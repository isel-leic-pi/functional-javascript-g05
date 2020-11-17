    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]


function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(function(okevery){ //checks whether all the elements of the array satisfy the given condition or not
			return goodUsers.some(function (oksome){ //check whether at least one of the elements of the array satisfies the given condition or not
				//console.log(okevery.id==oksome.id)
				return okevery.id==oksome.id
			})
		})
	}
}

    module.exports = checkUsersValid    


// `checkUsersValid` is the function you'll define
    	var testAllValid = checkUsersValid(goodUsers)
	
    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true

    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false