
var storednumber='',lastnumber,lastoperator,flag=false;

var c=0,firstnum;
function display(input)
{
		
 	var inputbox=document.getElementById('input');
	var inputvalue=inputbox.value+input;
	if(flag==true)
	{
		
		cleardisplay();
		inputbox.value=input;
	}
	else
	{
    
    	if(inputbox.value[inputbox.value.length-1]=='.'&&input=='.')
    	{} //dont set inputbox value when decimal is already in the inputbox
   		 else
   		 inputbox.value=inputvalue;
	
	}
}

function displayoperator(operator)
{
   var val=operator;
	var inputbox = document.getElementById("input");
	lastoperator=operator;
	if (inputbox.value.length != 0 || val =="-") 
    {
	    if (c == 0) {
	        firstnum = inputbox.value;
	        inputbox.value = inputbox.value + operator;
	    }
	    if (inputbox.value.length != 1)
	        c = 1;
	}
}
function cleardisplay()
{
	var inputbox=document.getElementById('input');
	inputbox.value='';
	flag=false;
}

function  backspace()
{
	var inputbox=document.getElementById('input');
	var inputvalue=inputbox.value;

    if(inputvalue[inputvalue.length-1]=='d')
    	inputbox.value=inputvalue.substring(0,inputvalue.length-3);
    else
    inputbox.value=inputvalue.substring(0,inputvalue.length-1);
	c=0;
}

function calculate()
{
	var inputbox=document.getElementById('input');
	var inputvalue=inputbox.value;
	var arr=[],i;
			if(lastoperator=='+')
				{
					
				    inputbox.value=Number(firstnum)+Number(inputvalue.substring(firstnum.length+1));
				}
		if(lastoperator=='-')
				{
					
				    inputbox.value=Number(firstnum)-Number(inputvalue.substring(firstnum.length+1));
				}
			if(lastoperator=='*')
				{
					
				    inputbox.value=Number(firstnum)*Number(inputvalue.substring(firstnum.length+1));
				}
		if(lastoperator=='/')
				{
					
				    inputbox.value=Number(firstnum)/Number(inputvalue.substring(firstnum.length+1));
				}
		if(lastoperator=='mod')
				{
					
				    inputbox.value=Number(firstnum)%Number(inputvalue.substring(firstnum.length+1));
				}

				c=0;
		    flag=true; //SET FLAG TO TRUE --FLAG TRUE MEANS RESULT IS CALCULATED AND NOW CLEAR THE DISPLAY 
			memorystore();

}

function memorystore()
{

   var inputbox=document.getElementById('input');
	storednumber=Number(inputbox.value);

}

function memoryrecall()
{

	var inputbox=document.getElementById('input');
	inputbox.value=storednumber;

}
function memorydelete()
{
storednumber='';
}
