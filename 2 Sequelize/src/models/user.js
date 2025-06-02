const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "user",
        tableName: "users",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.order, { foreignKey: "user_id", as: "orders" });
  }
}

module.exports = User;
