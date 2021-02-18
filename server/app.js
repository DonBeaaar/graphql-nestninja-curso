const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
'mongodb+srv://felipe:tCFRohuLEqBUhvAB@felipecluster.jpbc6.mongodb.net/gql-nestninja',
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (error, res) => {
    if (error) throw error;
    else console.log('Base de datos online');
  },
);

const PORT = 3000;

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.listen(PORT, () => {
	console.log("Escuchando en el puerto: " + PORT);
});
