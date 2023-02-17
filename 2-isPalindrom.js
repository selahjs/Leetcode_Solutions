var isPalindrome = function(num) {
	numbers = num.toString();
	var isPalindrom = false

	for (var i = 0; i < Math.round(numbers.length/2); i++) {
		if (numbers[i] == numbers[numbers.length-1-i]){
			isPalindrom = true;
		}
		else{ 
			isPalindrom = false;
			break;
		}
		
	}
	return isPalindrom;
};
// console.log(isPalindrom('1000021'));