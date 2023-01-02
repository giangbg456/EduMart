'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blogs.belongsTo(models.Image, { foreignKey: 'imageID', targetKey: 'id', as: 'images' })
    }
  }
  Blogs.init({
    name: DataTypes.STRING,
    imageID: DataTypes.INTEGER,
    conetent: DataTypes.TEXT
    
  }, {
    sequelize,
    modelName: 'Blogs',
  });
  return Blogs;
};