const { DataTypes } = require("sequelize");

const AlbumsModel = {
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

    duration: {
        type: DataTypes.INTEGER,
    },

    artist: {
        /* Make dependent: artist.model */
    },

    releaseDate: {
        type: DataTypes.DATE,
    },

    genres: {
        /* Make dependent: genres.model */
    },


    diskNumber: {
        type: DataTypes.INTEGER
    },

};

module.exports = {
    init: (sequelize) => {
        return this.model = sequelize.define('albums', AlbumsModel);
    },
}