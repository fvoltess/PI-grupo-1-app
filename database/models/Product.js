module.exports = (sequelize, DataTypes) => {
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
      // este users hace referencia al tablename de config en User.js
      references: { model: "users", key: "id" },
    },
  };

  let config = {
    tableName: "products",
    timestamps: true,
    underscored: false,
  };

  const Product = sequelize.define(alias, columns, config);

  Product.associate = (models) => {
    Product.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
    });

    Product.hasMany(models.Comment, {
      as: "comments",
      foreignKey: "productId",
    });
  };

  return Product;
};
