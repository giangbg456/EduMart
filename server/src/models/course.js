'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Courses.belongsTo(models.Image, { foreignKey: 'imageID', targetKey: 'id', as: 'images' })
      Courses.belongsTo(models.Attributes, { foreignKey: 'attributeID', targetKey: 'id', as: 'attribute' })
      Courses.hasMany(models.Section, { foreignKey: 'course_id' })
    }
  }
  Courses.init({
    name: DataTypes.STRING,
    imageID: DataTypes.INTEGER,
    attributeID: DataTypes.INTEGER
    
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};