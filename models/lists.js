module.exports = function(sequelize, DataType) {
    const FoodLists = sequelize.define("food_lists", {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        orgID: {
            type: DataType.INTEGER
        },
        frozen: {
            type: DataType.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        fresh: {
            type: DataType.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        canned: {
            type: DataType.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        packaged: {
            type: DataType.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        status: {
            type: DataType.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
        remaining: {
            type: DataType.INTEGER,
            allowNull: false
        },
        takenBy: {
            type: DataType.INTEGER,
            defaultValue: null,
            allowNull: true
        }
    })
    return FoodLists
}