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

    albumId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'albums',
            key: 'id'
        }
    },


    artistId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'artists',
            key: 'id'
        }
    },

    releaseDate: {
        type: DataTypes.DATE,
    },

    genresId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'genres',
            key: 'id'
        }
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