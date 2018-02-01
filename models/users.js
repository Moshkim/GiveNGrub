
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUnique: true,
                isEmail: true
            }
            //  Passport.js https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537
            //  isUnique: 
            //  https://github.com/sequelize/sequelize/issues/275
            //  https://stackoverflow.com/questions/16356856/sequelize-js-custom-validator-check-for-unique-username-password
        }, 
        password: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                len: [5, 20]
            }
        }, 
        entity: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                len: [5, 100]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                len: [5, 100]
            }
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            validate: {
                len: [5, 9]
             }
        }
    });

    return User;
}



// validate: {
//     isEmail: true,
//     isUnique: function (value, next) {
//         if (value) {
//             User
//                 .find({where: {email: value}})
//                 .success(function (user) {
//                     if (user) {
//                         next('Already taken')
//                     } else {
//                         next()
//                     }
//                 })
//                 .error(function (err) {
//                     next(err.message)
//                 });
//         } else {
//             next('Empty')
//         }
//     }
