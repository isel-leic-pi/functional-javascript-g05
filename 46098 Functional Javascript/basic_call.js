function duckCount() {
		return Array.from(arguments).filter(arg => Object.prototype.hasOwnProperty.call(arg, 'quack')).length
    }
	//instead of Array.from() could use Array.prototype.slice.call()

    module.exports = duckCount