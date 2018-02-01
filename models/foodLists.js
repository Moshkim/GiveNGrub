module.exports = function(sequelize, dataTypes) {
    const FoodLists = sequelize.define("food_lists", {
        foodID: {
            type: dataTypes.INTEGER,
            autoIncrement: true
        },
        orgID: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        frozen: {
            type: dataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        fresh: {
            type: dataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        canned: {
            type: dataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        packaged: {
            type: dataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        status: {
            type: dataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
        remaining: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        takenBy: {
            type: dataTypes.INTEGER,
            defaultValue: null,
            allowNull: true
        }
    })
}