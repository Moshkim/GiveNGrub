module.exports = function(sequelize, DataType){
    const Organization = sequelize.define('Organization', {
        id:{
            type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                isUnique: true,
                len: [1, 50]
            }
        },
        email: {
            type:DataType.STRING,
            allowNull: false,
            validate:{
                isUnique: true,
                isEmail: true,
                len: [2, 50]
            }
        },
        password: {
            type:DataType.STRING,
            allowNull: false,
            validate: {
                len: [6, 50]
            }
        },
        company_name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len:[5, 50]
            }
        },
        address: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [5, 50]
            }
        },
        city: {
            type: DataType.STRING,
            allowNull: true,
            validate: {
                len: [5, 50]
            }
        },
        state: {
            type: DataType.STRING,
            allowNull: true,
            validate: {
                len: [1, 50]
            }
        },
        zipcode: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                len: [5, 15]
            }
        },
        entity: {
            type: DataType.STRING,
            allowNull: false
        },
        capacity: {
            type: DataType.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: {
                max: 300
            }
        }
    })
    
    Organization.associate = function(models){
        Organization.hasMany(models.Food, {
            onDelete: "cascade"
        })
    }

    return Organization
}
