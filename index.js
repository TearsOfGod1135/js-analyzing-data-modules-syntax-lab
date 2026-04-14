


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
// Import datejs
require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (let arr of args) {
    combinedObject.users = [...combinedObject.users, ...arr];
  }

  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  return combinedObject;
}

// 👇 ADD THIS LINE (instead of module.exports = ...)
module.exports.combineUsers = combineUsers;