function loadUsers(userIds, load, done) {
	let cmpltd = 0
	var users = []
	/*
	for (var i = 0; i < userIds.length; i++) {
		users.push(load(userIds[i]))
	}
	*/
	userIds.forEach(function(id, index) {
		load(id, function(user) {
			user[index] = user
			if (++completed === userIds.length) return done(users)
		})
	})
	return users
}

    module.exports = loadUsers