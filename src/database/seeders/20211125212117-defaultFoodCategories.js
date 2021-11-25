export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'foodCategories',
      [
        { name: 'Snack', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Dessert', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Drink', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('foodCategories', null, {});
  },
};
