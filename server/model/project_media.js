export default function (sequelize, DataTypes) {
  var PROJECT_MEDIA = sequelize.define('project_media', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    projectID: DataTypes.STRING,
    website: DataTypes.STRING,
    discord: DataTypes.STRING,
    telegram: DataTypes.STRING,
    gitbook: DataTypes.STRING,
    medium: DataTypes.STRING,
    state: DataTypes.INTEGER,
  })
  PROJECT_MEDIA.sync();
  return PROJECT_MEDIA;
}
