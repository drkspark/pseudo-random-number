"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class RandomNumber extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    RandomNumber.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            start: {
                type:DataTypes.INTEGER,
                allowNull: false
            },
            end: {
                type:DataTypes.INTEGER,
                allowNull: false
            },
            current: {
                type:DataTypes.INTEGER,
                allowNull: false
            },
        },
        {
            sequelize,
            modelName: "RandomNumber",
        }
    );
    return RandomNumber;
};
