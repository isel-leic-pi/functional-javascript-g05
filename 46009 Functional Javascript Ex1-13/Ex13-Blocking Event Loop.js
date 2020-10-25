function repeat(operation, num) {
    if(num == 5)
		return
	if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }

    module.exports = repeat