var result = [],
    number1 = [],
    number2 = [],
    n1, n2;

function show(operation) {
    //Removing previous div elements
    var parentdiv = document.getElementById("maindiv");
    while (parentdiv.firstChild) {
        parentdiv.removeChild(parentdiv.firstChild);
    }
    var divelem = document.getElementById('maindiv'); //parent div element Here you append the child divs
    var i;

	 //creating child div elements p elements and input elements
    for (i = 0; i < 30; i++) 
     {
        var d = document.createElement('div');
        n1 = document.createElement('p');   //first number
        n2 = document.createElement('p');		//second number
        if(operation=='add')
        			n2.style.marginLeft='-17px';
        else
         		n2.style.marginLeft='-13px';
        var inputbox = document.createElement('input'); //this is input box where you will type the value
        inputbox.type = 'text';
        inputbox.maxLength = '3';
        inputbox.id = i;
        inputbox.setAttribute('onkeyup', 'check(this)');
        d.className = 'container';
        divelem.appendChild(d);
        d.appendChild(n1);
        d.appendChild(n2);
        d.appendChild(inputbox);
        setrandomnumbers(operation, i);
    }
}

 //Set random numbers and apply add or subtract operation to those numbers
function setrandomnumbers(operation, index)
    {
	//creating random numbers between 10 and 100

        number1[index] = Math.floor(Math.random() * 90) + 10;
        number2[index] = Math.floor(Math.random() * 90) + 10;
	//setting first number value
        n1.innerHTML = number1[index];

	//if operation is add then add the numbers
        if (operation == 'add')
         {
        	result[index] = number1[index] + number2[index];
		//setting second number value in case of add concatenating a + symbol
        	 n2.innerHTML = "+"+number2[index];
	 }
        else
	 {        
         	result[index] = number1[index] - number2[index];
		//setting second number value in case of add concatenating a - symbol
			 n2.innerHTML = "-"+number2[index];
         }
        
    }

//Check given input with the actual result

function check(input) 
{

    //setting cursor position
 
        input.setSelectionRange(0, 0);
 
    var id = input.id;
    
    //set background color green when result matches with input else red and if result is blank then set white	

    if (result[id] == input.value) input.style.backgroundColor = 'green';
    
    else if (input.value == '') input.style.backgroundColor = 'white';
    
    else input.style.backgroundColor = 'red';

}
