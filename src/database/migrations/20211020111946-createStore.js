export default {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('stores', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: Sequelize.DataTypes.STRING, allowNull: false },
      description: { type: Sequelize.DataTypes.STRING, allowNull: false },
      status: { type: Sequelize.DataTypes.BOOLEAN },
      merchant_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'merchants', key: 'id' },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clients');
  },
};
