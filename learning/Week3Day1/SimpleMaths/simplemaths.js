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
    for (i = 0; i < 30; i++) {
        var d = document.createElement('div');
        n1 = document.createElement('p');
        n2 = document.createElement('p');
        if(operation=='add')
        			n2.style.marginLeft='-17px';
        else
         		n2.style.marginLeft='-13px';
        var inputbox = document.createElement('input');
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

function setrandomnumbers(operation, index) //Set random numbers and apply add or subtract operation to those numbers
    {
        number1[index] = Math.floor(Math.random() * 90) + 10;
        number2[index] = Math.floor(Math.random() * 90) + 10;
        n1.innerHTML = number1[index];
        if (operation == 'add')
        {
        	result[index] = number1[index] + number2[index];
        	 n2.innerHTML = "+"+number2[index];
		  }
        else
	     {        
         result[index] = number1[index] - number2[index];
			 n2.innerHTML = "-"+number2[index];
        }
        
    }
    //Check given input with the actual result

function check(input) {
    if (input.createTextRange) 
    {
        var part = input.createTextRange();
        part.move("character", 1);
        part.select();
    } else if (input.setSelectionRange) 
    {
        input.setSelectionRange(0, 0);
    }
    input.focus();
    var id = input.id;
    if (result[id] == input.value) input.style.backgroundColor = 'green';
    else if (input.value == '') input.style.backgroundColor = 'white';
    else input.style.backgroundColor = 'red';
}