'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Page extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Page.belongsTo(models.Interest, { as: 'pagesOfInterests', foreignKey: 'interestId'})
      Page.hasMany(models.Search, { as: 'PagesOfNotes', foreignKey: 'pageId'})
    }
  }
  Page.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    notes: DataTypes.ARRAY(DataTypes.STRING),
    interestId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'interests',
        key: 'id'
      }
    }
  }, 
  {
    sequelize,
    modelName: 'Page',
    tableName: 'pages'
  });
  return Page;
};