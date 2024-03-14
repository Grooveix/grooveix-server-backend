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

    genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'genres',
            key: 'id'
        }
    },


    diskNumber: {
        type: DataTypes.INTEGER
    },

    /* TODO: maybe add a list of Songs in this table... */

};

module.exports = {
    init: (sequelize) => {
        return this.model = sequelize.define('albums', AlbumsModel);
    },
}