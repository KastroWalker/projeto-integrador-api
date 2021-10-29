export default {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('purchaseTypesStores', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      typePurchaseId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'purchaseTypes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      storeId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'stores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: { type: Sequelize.DataTypes.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DataTypes.DATE, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('purchaseTypesStores');
  },
};
