'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Search extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Search.belongsTo(models.Interest, { as: 'searchesOfInterests', foreignKey: 'interestId'})
      Search.belongsTo(models.Page, { as: 'NotesOfpages', foreignKey: 'pageId'})
    }
  }
  Search.init({
    noteName: DataTypes.STRING,
    noteBody: DataTypes.TEXT,
    noteUrl: DataTypes.TEXT,
    pageId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pages',
        key: 'id'
      }
    },
    interestId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'interests',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Search',
    tableName: 'searches'
  });
  return Search;
};