export default function (sequelize, DataTypes) {
  var InscriptionTOTAL = sequelize.define('inscription_total', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    address: DataTypes.STRING,
    amount: DataTypes.STRING,
    inscriptionId: DataTypes.STRING,
    ga: DataTypes.STRING,
    date: DataTypes.STRING,
    state: DataTypes.INTEGER,
  })
  InscriptionTOTAL.sync();
  return InscriptionTOTAL;
}
