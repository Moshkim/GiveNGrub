module.exports = function(sequelize, DataType) {
    const NonProfit = sequelize.define("non_profit", {
        id: {
            type: dataType.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        orgID: {
            type: dataType.INTEGER,
            primaryKey: true
        },
        item_one: {
            type: dataType.INTEGER,
            allowNull: true
        },
        item_two: {
            type: dataType.INTEGER,
            allowNull: true
        },
        quantity: {
            type: dataType.INTEGER,
            defaultValue: 0,
            validate: {
                min: 0,
                max: 2
            }
        }
    })
}