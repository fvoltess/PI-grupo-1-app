module.exports = (sequelize, DataTypes) => {
  const alias = "Comment";

  const columns = {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER.UNSIGNED,
      foreignKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      foreignKey: true,
    },
    comment: {
      type: DataTypes.STRING(500),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  };

  const config = {
    tableName: "comments",
    timestamps: true,
    underscored: false,
  };

  const Comment = sequelize.define(alias, columns, config);

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
      timestamps: false,
    });

    Comment.belongsTo(models.Product, {
      as: "product",
      foreignKey: "productId",
      timestamps: false,
    });
  };

  return Comment;
};
