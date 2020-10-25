function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
		  const valid = (currentValue) => goodUsers.includes(currentValue)
        return submittedUsers.every(valid)
      };
    }

    module.exports = checkUsersValid
	
//SOLUTION TWO
/*
function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
		 return submittedUsers.every(id => goodUsers.some(x => x === id))
      };
    }

    module.exports = checkUsersValid
*/