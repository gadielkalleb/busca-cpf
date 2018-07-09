const CpfModel = (sequelize, DataTypes) => {
  const Cpf = sequelize.define('Cpf',{
    numero: DataTypes.STRING,
    tipo: DataTypes.STRING
  })
  return Cpf
}
module.exports = CpfModel