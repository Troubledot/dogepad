export default function (sequelize, DataTypes) {
  var PROJECT_IDO_DETAIL = sequelize.define('project_ido_detail', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    projectID: DataTypes.STRING,
    address: DataTypes.STRING,
    tx: DataTypes.STRING,
    amount: DataTypes.STRING,
    type: DataTypes.STRING,
    ga: DataTypes.STRING,
    date: DataTypes.STRING,
    state: DataTypes.INTEGER,
  })
  PROJECT_IDO_DETAIL.sync();
  return PROJECT_IDO_DETAIL;
}
