// mvc model 
// mysql 中的数据  row => 映射为 Object   orm sequelize

module.export = (sequelize, DataTypes) => sequelize.define(
  'shops',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    thumb_url: DataTypes.STRING
  },
  {
    tableName: 'shops',
  }
)