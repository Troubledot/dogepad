export default function (sequelize, DataTypes) {
  var INVITE = sequelize.define('invite', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    account: DataTypes.STRING,
    invite: DataTypes.STRING,
    ga: DataTypes.STRING,
    state: DataTypes.INTEGER,
  })
  INVITE.sync();
  return INVITE;
}
