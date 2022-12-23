'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SectionItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SectionItem.belongsTo(models.Section, { foreignKey: 'section_id' })
      SectionItem.belongsTo(models.Video, { foreignKey: 'video_id', targetKey: 'id', as: 'video' })
    }
  }
  SectionItem.init({
    name: DataTypes.STRING,
    video_id: DataTypes.INTEGER,
    section_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'SectionItem',
  });
  return SectionItem;
};