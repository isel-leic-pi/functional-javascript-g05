function reduce(arr, fn, initial) {
	return (function recursive(index = 0, val = initial){
		return (index >= arr.length) ? val : recursive(index + 1, fn(val, arr[index], index, arr))
	})()
}

/*
function reduce(arr, fn, initial) {
	return (arr.length <= 0) ? initial : reduce(arr.slice(1), fn, fn(initial, arr.slice(0,1), 0, arr))
}
*/

    module.exports = reduce