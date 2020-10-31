const User = (sequelize, datatypes) => {
  const model = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: datatypes.INTEGER,
      },
      name: datatypes.STRING,
      email: {
        allowNull: false,
        unique: true,
        type: datatypes.STRING,
      },
      password: {
        allowNull: false,
        type: datatypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: datatypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: datatypes.DATE,
      },
    },
    {
      tableName: 'users',
    },
  );

  return model;
};

module.exports = User;
