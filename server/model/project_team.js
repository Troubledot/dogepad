export default function (sequelize, DataTypes) {
  var PROJECT_TEAM = sequelize.define('project_team', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    projectID: DataTypes.STRING,
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    detail: DataTypes.STRING,
    date: DataTypes.STRING,
    state: DataTypes.INTEGER,
  })
  //  PROJECT_TEAM.associate = function(models) {
  //     PROJECT_TEAM.belongsTo(models.PROJECT, {
  //       foreignKey: 'projectID',
  //     })
  //   };
  PROJECT_TEAM.sync();
  return PROJECT_TEAM;
}
