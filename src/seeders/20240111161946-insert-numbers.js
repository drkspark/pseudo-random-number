"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const entries = [];
            
            for (let id = 1, start = 50000; id <= 200; id++, start += 5000) {
                entries.push({
                    id: id,
                    start: start,
                    end: start + 5000,
                    current: start,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            }
        // Sequelize convetion is to create table names based on plural forms
        await queryInterface.bulkInsert("RandomNumbers",entries, {});
    },

    async down(queryInterface, Sequelize) {
         await queryInterface.bulkDelete("RandomNumbers", null, {});
    },
};
