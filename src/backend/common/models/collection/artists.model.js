const { DataTypes } = require("sequelize");

const artistsModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    genres: {
        /* Make dependent: genres.model */
    },

    description: {
        type: DataTypes.STRING
    },

    albums: {
        /* Make dependent: discography.model */
    },

    singles: {
        /* Make dependent: discography.model */
    },

};

module.exports = {
    init: (sequelize) => {
        return this.model = sequelize.define('artists', artistsModel);
    },
}