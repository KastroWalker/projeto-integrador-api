export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stores', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      merchantId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'merchants', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      addressId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'addresses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      name: { type: Sequelize.DataTypes.STRING, allowNull: false },
      description: { type: Sequelize.DataTypes.STRING, allowNull: false },
      status: { type: Sequelize.DataTypes.BOOLEAN, allowNull: false },
      openedAt: { type: Sequelize.DataTypes.TIME, allowNull: false },
      closedAt: { type: Sequelize.DataTypes.TIME, allowNull: false },
      createdAt: { type: Sequelize.DataTypes.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DataTypes.DATE, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stores');
  },
};
