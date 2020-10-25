function duckCount() {
	return Array.prototype.slice.call(arguments).filter(obj => Object.prototype.hasOwnProperty.call(obj,'quack')).length
    }
    module.exports = duckCount
	
	
	
	
	/*
	const quack = (currentValue) => Object.prototype.hasOwnProperty.call(currentValue, 'quack')
      return arguments.filter(quack)
	  */