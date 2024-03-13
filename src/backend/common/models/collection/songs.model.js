const { DataTypes } = require("sequelize");

const SongsModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    trackNumber: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },

    album: {
        /* Make dependent: album.model */
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

    duration: {
      type: DataTypes.INTEGER
    },

    audioCodec: {
        type: DataTypes.STRING
    },

    bitRate: {
        type: DataTypes.INTEGER
    },

    single: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },

    localLocation: {
        type: DataTypes.STRING,
        defaultValue: "AUTO" // Searches automatically in the default collection folder, otherwise normal Linux path
    },



};

module.exports = {
    init: (sequelize) => {
        return this.model = sequelize.define('songs', SongsModel);
    },
}