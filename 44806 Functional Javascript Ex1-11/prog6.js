	/*var names = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
	
	let countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})

console.log(countedNames)*/

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
	
	function countWords(inputWords) {
      const names = inputWords.reduce(function (acc, curr){
			acc[curr] = ++acc[curr]||1			
			return acc
	  },{})
	  
	  return names
	  
    }

    module.exports = countWords



    console.log(countWords(inputWords))

    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }
	
