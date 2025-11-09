module.exports = function (sequelize, DataTypes) {
  const alias = "User";

  const columns = {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(250),
    },
    email: {
      type: DataTypes.STRING(250),
    },
    birthdate: {
      type: DataTypes.DATE,
    },
    birthcity: {
      type: DataTypes.STRING(250),
    },
    password: {
      type: DataTypes.STRING(250),
    },
    profilePicture: {
      type: DataTypes.STRING(250),
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
    tableName: "users",
    timestamps: true,
    underscored: false,
  };

  const User = sequelize.define(alias, columns, config);

  User.associate = function (models) {
    User.hasMany(models.Comment, {
      as: "comments",
      foreignKey: "userId",
      timestamps: true,
    });

    User.hasMany(models.Product, {
      as: "products",
      foreignKey: "userId",
      timestamps: true,
    });
  };

  return User;
};
