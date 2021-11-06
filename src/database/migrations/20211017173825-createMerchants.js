export default {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('merchants', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: Sequelize.DataTypes.STRING, allowNull: false },
      email: { type: Sequelize.DataTypes.STRING, allowNull: false },
      username: { type: Sequelize.DataTypes.STRING, allowNull: false },
      password: { type: Sequelize.DataTypes.STRING, allowNull: false },
      createdAt: { type: Sequelize.DataTypes.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DataTypes.DATE, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clients');
  },
};
