module.exports = function(sequelize, dataTypes) {
    const FoodProvider = sequelize.define("FoodProvider", {
        uid: {
            type: dataTypes.STRING,
            validate: {
                allowNull: false,
                len: [1, 20]
            }
        },
        address: {
            type: dataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [10, 200],
                
            }
        }
    })
}