module.exports = function (sequelize, DataTypes) {
    var Rating = sequelize.define("Rating", {
        drinkRated: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                max: 10,
                min: 1
            }
        }
    });

    Rating.associate = function (models) {
        Rating.belongsTo(models.Author, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Rating;
};
