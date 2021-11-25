export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },

      storeId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'stores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      categoryId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'categories', key: 'id' },
      },

      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },

      value: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      discount: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: true,
      },

      status: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  },
};
