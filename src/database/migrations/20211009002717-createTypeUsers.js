export default {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('typeUsers', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: Sequelize.DataTypes.STRING, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('typeUsers');
  },
};
