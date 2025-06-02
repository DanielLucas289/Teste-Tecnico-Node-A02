const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static init(sequelize) {
    return super.init(
      {
        description: DataTypes.STRING,
        value: DataTypes.DECIMAL(10, 2),
      },
      {
        sequelize,
        modelName: "order",
        tableName: "orders",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.user, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = Order;
