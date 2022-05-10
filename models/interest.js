'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Interest.belongsTo(models.User, { as: 'interestsOfUsers', foreignKey: 'userId'})
      
      Interest.hasMany(models.Pages, { as: interestsPages, foreignKey: 'interestId'})
    }
  }
  Interest.init({
    topic: DataTypes.STRING,
    description: DataTypes.STRING,
    searches: DataTypes.ARRAY(DataTypes.JSONB),
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Interest',
    tableName: 'interests'
  });
  return Interest;
};