const mongoose = require("mongoose");

const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@projetoyoutube.r0fypkq.mongodb.net/database?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Conexão com o banco de dados realizada com sucesso!");
  } catch (error) {
    console.error("Ocorreu um erro ao se conectar com o banco de dados", error);
  }
};

module.exports = connectToDataBase;
