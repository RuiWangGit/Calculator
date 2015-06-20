

function Calculator(){

	this.stackHolder = [];

	this.validateInput = function(input, letter){
		//now assume the input is valid.
		var ch = input.charAt(input.length - 1 );
		if(  ch == '+' || ch == '-' || ch == '/' || ch == 'x'  ){
			if (  letter == ')' || letter == '+' || letter == '-' || letter == '/' || letter == 'x') {
				// console.log( "am i here");
				return false;
			}

		}
		

		return true;



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
		var i
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
						
						
						stack.push(stack.pop()/a);
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




		// console.log('ddd '+input);
		// console.log('test ' +cal.toRPN.call(this, input));
		var tmp = cal.toRPN.call(this, input);
		// console.log(tmp);
		// console.log(cal.calculate.call(this,tmp));
		return cal.calculate.call(this,tmp);
		
	}

	// console.log(parseInput('1x(2+3x4)+5'));


