
var storednumber='',lastnumber,lastoperator,flag=false;

var c=0,firstnum;
function display(input)
{
		
 	var inputbox=document.getElementById('input');
	var inputvalue=inputbox.value;
	if(flag==true)
	{
		cleardisplay();
		inputbox.value=input;
	}
	else
	{
    
    	if(inputvalue.lastIndexOf('.')>=0&&input=='.')
    	{ } //dont set inputbox value when decimal is already in the inputbox
   		 else
   		 inputbox.value=inputvalue+input;
	
	}
}

function displayoperator(operator)
{
   var val=operator;
	var inputbox = document.getElementById("input");
	lastoperator=operator;

	if (inputbox.value.length != 0 || val =="-") 
    {
	    if (c == 0) 
	    {

	        firstnum = inputbox.value;

	        inputbox.value = inputbox.value + val;
	        
	    }
	    if (inputbox.value.length != 1)
	    {
	        c = 1;
			if(operator=='%'&&inputbox.value[inputbox.value.length-1]!='%')
			{
			 inputbox.value=inputbox.value+val;	
			 calculate();
			}    
	    
	    }
	}
	flag=false;
}
function cleardisplay()
{
	var inputbox=document.getElementById('input');
	inputbox.value='';
	flag=false;
	c=0;

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
	var value=inputvalue.substring(firstnum.length+1);
			if(lastoperator=='+')
				{
					
				    inputbox.value=Number(firstnum)+Number(value);
				}
		if(lastoperator=='-')
				{
					
				    inputbox.value=Number(firstnum)-Number(value);
				}
			if(lastoperator=='*')
				{
					
				    inputbox.value=Number(firstnum)*Number(value);
				}
		if(lastoperator=='/')
				{
					
				    inputbox.value=Number(firstnum)/Number(value);
				}
		if(lastoperator=='mod')
				{
					
				    inputbox.value=Number(firstnum)%Number(value);
				}
			if(lastoperator=='%')
			{
		
			var value=inputbox.value[firstnum.length],firstnumber,secondnumber;
			
				if(value=='+'||value=='-'||value=='*'||value=='/')
				{
					firstnumber=inputbox.value.substring(0,firstnum.length);
				
					secondnumber=	inputbox.value.substring(firstnum.length+1,inputbox.value.length-1);		
				
					
				}
				else 
				inputbox.value=firstnum/100;
				
				if(value=='+')
				{
				inputbox.value=Number(firstnumber)+(Number(secondnumber)/100)*Number(firstnumber);
				}
					if(value=='-')
				{
				inputbox.value=Number(firstnumber)-(Number(secondnumber)/100)*Number(firstnumber);
				}
					if(value=='*')
				{
				inputbox.value=Number(firstnumber)*(Number(secondnumber)/100);
				}
					if(value=='/')
				{
				inputbox.value=Number(firstnumber)/(Number(secondnumber)/100);
				}
				
			}
				c=0;

		    flag=true; //SET FLAG TO TRUE --FLAG TRUE MEANS RESULT IS CALCULATED AND NOW CLEAR THE DISPLAY 

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
function memoryadd()
{

	var inputbox=document.getElementById('input');
	inputbox.value=Number(inputbox.value)+Number(storednumber);

}
function memoryminus()
{
	
	var inputbox=document.getElementById('input');
	inputbox.value=Number(storednumber)-Number(inputbox.value);

}
