export default function (sequelize, DataTypes) {
  var PROJECT = sequelize.define('project', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    info: DataTypes.STRING,
    detail: DataTypes.STRING,
    date: DataTypes.STRING,
    state: DataTypes.INTEGER,
  })
  // PROJECT.associate = function (models) {
  //     PROJECT.hasMany(models.PROJECT_TEAM, {
  //       foreignKey: 'projectID',
  //       as: 'team',
  //     })
  // }
  PROJECT.sync();
  return PROJECT;
}
