'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attributes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Attributes.init({
    level: DataTypes.STRING,
    slogan: DataTypes.TEXT,
    require: DataTypes.TEXT,
    description: DataTypes.TEXT,
    except: DataTypes.TEXT,
    tag: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attributes',
  });
  return Attributes;
};