const {sequelize} = require("../../models/index");
const {RandomNumber} = require("../../models/index");

/**
 * Algo:
 *      1. Get all availabe Ids
 *      2. Select a random ID
 *      3. Get the current value
 *      4. Increment the current value and if the end === current delete that row
 * @returns An random number
 */

const getRandomNumber = async () => {
    const t = await sequelize.transaction();

    try {
        const availabeIds = await RandomNumber.findAll(
            {attributes: ['id']}
        );
        
        if (availabeIds.length === 0) {
            throw new Error({"message": "All the pseudo random number have been exhausted"});
        }
        
        const randomIndex = Math.floor(Math.random() * availabeIds.length);

        const selectedEntry = await RandomNumber.findByPk(availabeIds[randomIndex].id);
        // console.log(selectedEntry);

        const selectedNumber = selectedEntry.current;
        
        if (!isIntervalExhausted(selectedEntry)) {
            selectedEntry.current = selectedEntry.current + 1;
            selectedEntry.save();
        } else {
            selectedEntry.destroy();
        }

        await t.commit();
        
        // console.log(selectedNumber);
        return selectedNumber;
    } catch (err) {
        await t.rollback();
        console.log(err);
        return err;
    }
}

const isIntervalExhausted = (entry) => {
    return entry.end === entry.current + 1;
}


module.exports = {
    getRandomNumber
};