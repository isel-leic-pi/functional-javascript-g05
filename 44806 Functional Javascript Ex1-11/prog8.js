var notDuck = Object.create({quack: true})
    var duck = {quack: true}
    duckCount(duck, notDuck) // 1
	
	
	
	function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function (obj){
		  return Object.prototype.hasOwnProperty.call(obj,'quack')
	  }).length
	  
	  
    }
	//console.log(duckCount)
    module.exports = duckCount
	