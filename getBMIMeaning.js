const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight / (height**2)
}
function getBMIMeaning(weight, height) {
  const bmi = weight / (height**2)
  if(bmi<18.5)
    return 'Underweight'
  else if (bmi<25)
    return 'Normal weight'
  else
    return 'Overweight'
}
module.exports = getBMIMeaning
