export default function (sequelize, DataTypes) {
  var Box = sequelize.define('box', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    address: DataTypes.STRING,
    tx: DataTypes.STRING,
    inscriptionId: DataTypes.STRING,
    type: DataTypes.STRING,
    ga: DataTypes.STRING,
    date: DataTypes.STRING,
    state: DataTypes.INTEGER,
  })
  Box.sync();
  return Box;
}
