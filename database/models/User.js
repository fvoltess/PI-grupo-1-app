module.exports = (sequelize, DataTypes) => {
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
    birthplace: {
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

  User.associate = (models) => {
    User.hasMany(models.Comment, {
      as: "comments",
      foreignKey: "userId",
    });

    User.hasMany(models.Product, {
      as: "products",
      foreignKey: "userId",
    });
  };

  return User;
};
