module.exports = function(sequelize, DataType){
    const Organization = sequelize.define('Organization', {
        id:{
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        email: {
            type:DataType.STRING,
            allowNull: false,
            validate:{
                isEmail: true,
                len: [1, 50]
            }
        },
        password: {
            type:DataType.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        company_name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len:[1, 50]
            }
        },
        contact: {
            type: DataType.STRING,
            allowNull: true
        },
        address: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        place_id: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        latitude: {
            type: DataType.DECIMAL(12, 9),
            allowNull: true,
            defaultValue: null
        },
        longitude: {
            type: DataType.DECIMAL(12, 9),
            allowNull: true,
            defaultValue: null
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
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    })
    
    Organization.associate = function(models){
        Organization.hasMany(models.Food, {
            onDelete: "cascade"
        })
    }

    return Organization
}
