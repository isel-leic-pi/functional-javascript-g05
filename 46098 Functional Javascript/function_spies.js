function Spy(target, method) {
		var originalFunction = target[method]
		var res = {
			count: 0
		}
		
		target[method] = function(){
			res.count++
			return originalFunction.apply(this, arguments)
		}
		return res
    }

    module.exports = Spy