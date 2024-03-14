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

    genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'genres',
            key: 'id'
        }
    },

    description: {
        type: DataTypes.STRING
    },


    /* TODO: somehow get many references from albums...
    *  For now working with only one album/single for one artist
    *  */
    albumsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'albums',
            key: 'id'
        }
    },

    singlesID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'songs',
            key: 'id'
        }
    },

};

module.exports = {
    init: (sequelize) => {
        return this.model = sequelize.define('artists', artistsModel);
    },
}