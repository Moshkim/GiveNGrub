module.exports = function(sequelize, DataType) {
    const NonProfit = sequelize.define("non_profit", {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        orgID: {
            type: DataType.INTEGER
        },
        item_one: {
            type: DataType.INTEGER,
            allowNull: true
        },
        item_two: {
            type: DataType.INTEGER,
            allowNull: true
        },
        quantity: {
            type: DataType.INTEGER,
            defaultValue: 0,
            validate: {
                min: 0,
                max: 2
            }
        }
    })

    return NonProfit
}