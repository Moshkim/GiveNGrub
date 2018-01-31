module.exports = function(sequelize, dataTypes) {
    const FoodLists = sequelize.define("Food_Lists", {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orgID: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                len: [1, 10]   
            }
        }
    })
}