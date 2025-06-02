const Sequelize = require("sequelize");
const dotenv = require("dotenv");

const User = require("../models/user");
const Order = require("../models/order");

dotenv.config();

const models = [User, Order];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(
      process.env.POSTGRE_DB_NAME || "central_pedidos_dev",
      process.env.POSTGRE_USERNAME,
      process.env.POSTGRE_PASSWORD,
      {
        host: process.env.POSTGRE_HOST || "localhost",
        port: process.env.POSTGRE_PORT || 5432,
        dialect: "postgres",

        define: {
          timestamps: true,
          underscored: true,
          underscoredAll: true,
        },
        dialectOptions: {},
        logging: false,
      }
    );

    models
      .map((model) => model.init(this.connection))
      .map((model) => {
        if (model.associate) {
          model.associate(this.connection.models);
        }
        return model;
      });

    console.log(
      "Conexão com o banco de dados e modelos inicializados com sucesso!"
    );
  }
}

module.exports = new Database().connection;
