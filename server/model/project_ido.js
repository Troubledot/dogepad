export default function (sequelize, DataTypes) {
  var PROJECT_IDO = sequelize.define('project_ido', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    projectID: DataTypes.STRING,
    type: DataTypes.STRING,
    privateStartTime: DataTypes.STRING,
    privateEndTime: DataTypes.STRING,
    privateTotalSale: DataTypes.INTEGER,
    privateTotalContributor:  DataTypes.INTEGER,
    privateTotalToken: DataTypes.INTEGER,
    publicStartTime: DataTypes.STRING,
    publicEndTime: DataTypes.STRING,
    publicTotalSale: DataTypes.INTEGER,
    publicTotalContributor: DataTypes.INTEGER,
    publicTotalToken: DataTypes.INTEGER,
    date: DataTypes.STRING,
    state: DataTypes.INTEGER,
  })
  PROJECT_IDO.sync();
  return PROJECT_IDO;
}
