'use strict';
module.exports = (sequelize, DataTypes) => {
  const SommeilEtFatigue = sequelize.define('SommeilEtFatigue', {
    fatigue: DataTypes.BOOLEAN,
    fatigueNb: DataTypes.INTEGER,
    asthenie: DataTypes.BOOLEAN,
    sommeilNonReparateur: DataTypes.BOOLEAN,
    insomnie: DataTypes.BOOLEAN,
    hypersomnie: DataTypes.BOOLEAN,
    apneeSommeil: DataTypes.BOOLEAN,
    ronflement: DataTypes.BOOLEAN,
    somnolence: DataTypes.BOOLEAN,
    cauchemar: DataTypes.BOOLEAN,
    sommeilAgite: DataTypes.BOOLEAN,
    reveilPrecoceSansRendormissement: DataTypes.BOOLEAN,
    sueurNocturne: DataTypes.BOOLEAN,
    syndromeJambeSansRepos: DataTypes.BOOLEAN,
    reveilFrequent: DataTypes.BOOLEAN,
    difficulteEndormissement: DataTypes.BOOLEAN,
    nycturie: DataTypes.BOOLEAN,
    coupDeFatigue: DataTypes.BOOLEAN,
    sieste: DataTypes.BOOLEAN,
    siesteNb: DataTypes.INTEGER,
    somnambulisme: DataTypes.BOOLEAN,
    terreurNocturne: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING,
    dateDuJour: DataTypes.DATE
  }, {});
  SommeilEtFatigue.associate = function(models) {
    // associations can be defined here
  };
  return SommeilEtFatigue;
};