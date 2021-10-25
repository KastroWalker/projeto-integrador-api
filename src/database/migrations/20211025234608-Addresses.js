export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('addresses', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      road: { type: Sequelize.STRING, allowNull: false },
      number: { type: Sequelize.STRING, allowNull: false },
      district: { type: Sequelize.STRING, allowNull: false },
      city: { type: Sequelize.STRING, allowNull: false },
      zipCode: { type: Sequelize.STRING, allowNull: false },
      complement: { type: Sequelize.STRING, allowNull: true },
      coordinate: { type: Sequelize.GEOMETRY('POINT', 4326), allowNull: true },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('addresses');
  },
};
