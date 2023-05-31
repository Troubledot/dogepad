export default function (sequelize, DataTypes) {
  var PROJECT_TOKEN = sequelize.define('project_token', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    projectID: DataTypes.STRING,
    part1_name: DataTypes.STRING,
    part1_amount: DataTypes.INTEGER,
    part2_name: DataTypes.STRING,
    part2_amount: DataTypes.INTEGER,
    part3_name: DataTypes.STRING,
    part3_amount: DataTypes.INTEGER,
    part4_name: DataTypes.STRING,
    part4_amount: DataTypes.INTEGER,
    part5_name: DataTypes.STRING,
    part5_amount: DataTypes.INTEGER,
    part6_name: DataTypes.STRING,
    part6_amount: DataTypes.INTEGER,
    part7_name: DataTypes.STRING,
    part7_amount: DataTypes.INTEGER,
    part8_name: DataTypes.STRING,
    part8_amount: DataTypes.INTEGER,
    part9_name: DataTypes.STRING,
    part9_amount: DataTypes.INTEGER,
    part10_name: DataTypes.STRING,
    part10_amount: DataTypes.INTEGER,
    state: DataTypes.INTEGER,
  })
  PROJECT_TOKEN.sync();
  return PROJECT_TOKEN;
}
