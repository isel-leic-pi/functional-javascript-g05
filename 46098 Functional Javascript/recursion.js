function getDependencies(tree, arr = []) {
	let dependencies = tree && tree.dependencies || []
	Object.keys(dependencies).forEach((dep) => {
		let key = dep + '@' + tree.dependencies[dep].version
		(arr.indexOf(key) === -1) arr.push(key)
		getDependencies(tree.dependencies[dep], arr)
	})
	return arr.sort()
}

    module.exports = getDependencies