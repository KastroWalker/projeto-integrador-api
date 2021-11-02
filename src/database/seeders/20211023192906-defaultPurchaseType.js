export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'purchaseTypes',
      [
        { name: 'Card', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Cash', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('purchaseTypes', null, {});
  },
};
