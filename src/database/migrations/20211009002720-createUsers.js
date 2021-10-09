export default {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      type_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'typeUsers', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      name: { type: Sequelize.DataTypes.STRING, allowNull: false },
      username: { type: Sequelize.DataTypes.STRING, allowNull: false },
      password: { type: Sequelize.DataTypes.STRING, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
