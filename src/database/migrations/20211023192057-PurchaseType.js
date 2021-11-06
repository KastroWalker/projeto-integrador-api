export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('purchaseTypes', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('purchaseTypes');
  },
};
