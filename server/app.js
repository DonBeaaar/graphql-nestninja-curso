const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//cors
app.use(cors());

mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},
  (error, res) => {
    if (error) throw error;
    else console.log('Base de datos online');
  },
);

const PORT = 4000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(PORT, () => {
  console.log('Escuchando en el puerto: ' + PORT);
});
