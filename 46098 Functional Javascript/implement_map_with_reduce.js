/*
Codigo feito
module.exports = function arrayMap(arr, fn) {
		return arr.reduce((acc = [], curr) => {
			Array.prototype.push.call(acc,fn(curr))
		})
    }
*/

module.exports = function arrayMap(arr, fn, thisArg) {
	return arr.reduce(function(acc, item, index, arr) {
		acc.push(fn.call(thisArg, item, index, arr))
		return acc
	}, [])
}