export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      road: { type: Sequelize.DataTypes.STRING, allowNull: false },
      number: { type: Sequelize.DataTypes.STRING, allowNull: false },
      district: { type: Sequelize.DataTypes.STRING, allowNull: false },
      city: { type: Sequelize.DataTypes.STRING, allowNull: false },
      zipCode: { type: Sequelize.DataTypes.STRING, allowNull: false },
      complement: { type: Sequelize.DataTypes.STRING, allowNull: true },
      coordinate: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      createdAt: { type: Sequelize.DataTypes.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DataTypes.DATE, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('addresses');
  },
};
