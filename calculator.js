

function Calculator(){

	// this.stackHolder = [];


	this.validateInput = function(input){

		// var pattern = /[^\d+[+|-|x|\/]]+-\d+$/;
		var pattern = /^(\d+[+-x\/])+(\d)+$/;
		return pattern.test(input);


	}


	this.toRPN = function(input){
		var i ;
		var stack = [];
		var out = new String();
		var infix ;
		for ( i = 0; i < input.length; i++){
			switch(input.charAt(i) ){
				case '+':
					if (stack.length > 0 && stack[stack.length-1] != '('){
						out = out +  ' ' + stack.pop();
					}
					 out = out + " ";
					stack.push(input.charAt(i));
					break;
				case '-':
					if (stack.length > 0 && stack[stack.length-1] != '('){
						out = out +  ' ' + stack.pop();
					}
					out += ' ';
					stack.push(input.charAt(i));
					break;
				case 'x':

					console.log('stack:' ,stack);
					if (stack.length > 0 && stack[stack.length-1] != '('){
						if ( stack[stack.length-1] == '+' || stack[stack.length-1] == '-' ){
							// out = out +  ' ' + input.charAt(i);
							// out += ' ';	
						}
						else {
							out = out +  ' ' + stack.pop();

						}						
					}
					out += ' ';
					stack.push(input.charAt(i));
					
					break;
				case '/':
					console.log('stack:' ,stack);
					if (stack.length > 0 && stack[stack.length-1] != '('){
						if ( stack[stack.length-1] == '+' || stack[stack.length-1] == '-' ){
							// out = out +  ' ' + input.charAt(i);
							// out += ' ';							
						}
						else {
							out = out +  ' ' + stack.pop();														
						}						
					}
					out += ' ';
					stack.push(input.charAt(i));
					break;
				case '(':

					stack.push(input.charAt(i));
					break;	
				case ')':
					while ( stack.length > 0 && stack[stack.length-1] != '(' ){
						out = out +  ' ' + stack.pop();
					}
					
					stack.pop();
					break;
				default:
					out += input.charAt(i);
					console.log('i');
					break;
			}
		}

		while ( stack.length > 0) {
				console.log("...");
				out += " ";
				out += stack.pop();
		}

		return out;	

	}


	this.calculate = function(input) {
		var res = 0;
		var arr = input.split(' ');
		console.log(arr);
		// console.log(isNaN(1));
		// console.log(isNaN('a'));
		var stack  = [];
		var i;
		for ( i in arr ){
			if (!isNaN(arr[i])){
				stack.push(parseInt(arr[i]));
			}
			else {

				switch (arr[i]) {
					case '+':
						var a = stack.pop();
						var b = stack.pop();
						
						stack.push(a+b);
						break;
					case '-':
						
						stack.push(stack.pop()*(-1) + stack.pop());
						break;
					case '/':
						
						var d2 = stack.pop();
						var d1 = stack.pop();

						stack.push(d1/d2);							
						break;
					case 'x':

					
						stack.push(stack.pop() * stack.pop());
						
						break;

				}
			}
		}

		
		return stack.pop();
					
	}

}






	
	


var parseInput = function(input){

	var cal = new Calculator();

	var tmp = cal.toRPN.call(this, input);

	return cal.calculate.call(this,tmp);
	
}

	// console.log(parseInput('1x(2+3x4)+5'));


