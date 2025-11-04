module.exports = function (sequelize, DataTypes) {
  const alias = "Product";

  const columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(200),
    },
    description: {
      type: DataTypes.STRING(500),
    },
    image: {
      type: DataTypes.STRING(250),
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: { model: "user", key: "id" },
    },
  };

  let config = {
    tableName: "products",
    timestamps: true,
    underscored: false,
  };

  const Product = sequelize.define(alias, columns, config);

  Product.associate = function (models) {
    Product.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
      timestamps: false,
    });
  };

  return Product;
};
