function doubleAll(numbers){
	const map1 = numbers.map(num=>num*2) //lambda
	return map1
}
module.exports=doubleAll
/*
    module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }
}*/