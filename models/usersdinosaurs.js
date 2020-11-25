'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usersdinosaurs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usersdinosaurs.init({
    userId: DataTypes.INTEGER,
    dinosaurId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usersdinosaurs',
  });
  return usersdinosaurs;
};