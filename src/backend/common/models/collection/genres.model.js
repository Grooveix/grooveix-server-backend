const { DataTypes } = require("sequelize");

const genresModel = {
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


};

module.exports = {
    init: (sequelize) => {
        return this.model = sequelize.define('genres', genresModel);
    },
}