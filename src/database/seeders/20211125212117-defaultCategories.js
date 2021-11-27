export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'categories',
      [
        { name: 'Snack', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Dessert', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Drink', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
