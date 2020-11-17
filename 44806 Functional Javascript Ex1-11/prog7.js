/*function toUpperArray(items) {
       if (!items.length) return []             // end condition
       var head = items[0]                      // item to operate on
       head = head.toUpperCase()                // perform action
       var tail = items.slice(1)                // next
       return [head].concat(toUpperArray(tail)) // recursive step
    }

     // => ['HELLO', 'WORLD']
	console.log(toUpperArray(['hello', 'world']))*/
	
	// Your reduce function should behave the same as a
    // regular Array#reduce, but it will take the array
    // to operate on as the first argument:


	
	function reduce(arr, fn, initial) {
		return (function funk (index,value){
			
			if(index == arr.length) return value
		
			let next = index + 1
			
			return funk( next ,fn(value,arr[index],index,arr))
		
		})(0, initial)
	  
    }

    module.exports = reduce
	
	    console.log(reduce([1,2,3], function(prev, curr, index, arr) {
      return prev + curr
    }, 0))
    // => 6
	