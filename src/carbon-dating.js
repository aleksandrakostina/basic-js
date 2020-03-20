const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const k = 0.693;

module.exports = function dateSample(sampleActivity) {
  let sample = parseFloat(sampleActivity);
  if(typeof(sampleActivity) !== 'string' || isNaN(sample) || sample <= 0 || sample > 15 ) {
    return false;
  }
  else {    
    return Math.ceil(Math.log(MODERN_ACTIVITY / sample) * HALF_LIFE_PERIOD / k);
  }
};
