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
    }
  }
  Page.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    preview: DataTypes.STRING,
    notes: DataTypes.ARRAY(DataTypes.TEXT),
    interestId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'interest',
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