
function check(input)
{
var inp=input.value;
if(isNaN(inp)||inp.length>12)
  alert("Please enter a valid no");
if(inp.length==2)
{
if(inp[0]!='9'||inp[1]!='1')
    alert("Enter 91 as india code");
}
if(inp.length==3)
{
    if(inp[2]!='9'&&inp[2]!='8'&inp[2]!='7')
        alert("enter a valid mobile no");
}
//if(inp[2]!='9'&&inp[2]!='8'&&inp[2]!='7')
        //alert(inp[2]);


}
function stateenable()
            {
                               var state=[];
                               state[1]=("Andra Pradesh|Arunachal Pradesh|Assam|Bihar|Chattisgarh|Goa|Gujrat|Haryana|Himachal Pradesh|jammu and kashmir|jharkhand|karnataka|Madhya Pradeshmanipur|Mizoram|Telengana|Uttar Pradesh|West Bengal");
                               state[2]=("LosAngeles|NewYork|Florida|karnali");

                               
                                var selectedCountryIndex = document.getElementById("country").selectedIndex;

                                var stateElement = document.getElementById('state');
                                stateElement.length = 0; // Fixed by Julian Woods
                                stateElement.options[0] = new Option('Select State', '');
                                stateElement.selectedIndex = 0;

                                var state_arr = state[selectedCountryIndex].split("|");

                                for (var i = 0; i < state_arr.length; i++)
                                {
                                   stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
                                }
             }

var k;

function selection(cb) {
    if (cb.checked) {
        document.getElementById("model").style.visibility = 'visible';
        k = cb.value;
        document.getElementById(k).style.visibility = 'visible';
    }
    
}

function hide() {
    
    document.getElementById("model").style.visibility = 'hidden';
    document.getElementById(k).style.visibility = 'hidden';
    
}

function show(x)
    {
        var a=document.getElementById("tab1");
        var b=document.getElementById("tab2");
        if(x=='tab1')
        {
            document.getElementById("subscribe").style.visibility='hidden';
            a.style.color='#8197B6';
            b.style.color='#6e6e6e';
            a.style.backgroundColor='#E4F0FE';
            b.style.backgroundColor='white';
            b.style.borderBottom='1px solid #DDE6F7';
            a.style.borderBottom='1px solid #E4F0FE ';


        }
        else
        {
            document.getElementById("subscribe").style.visibility='visible';
            a.style.backgroundColor='white';
            b.style.backgroundColor='#E4F0FE';
            a.style.color="#6e6e6e";
            b.style.color="#8197B6";
            a.style.borderBottom='1px solid #bdcdee';
            b.style.borderBottom='1px solid #E4F0FE ';

        }
    }
    function json()
	{
	var sex,interest="";
	var a=document.getElementById("name").value;
    	var b=document.getElementById("email").value;
    	var c = document.getElementsByName('sex');
	for (var i =c.length; i--;) {
   	if (c[i].checked) {
        sex= c[i].value;
        break;
    }
}
   	var inputElements = document.getElementsByClassName('checkbox');
	for(i=0; inputElements[i]; ++i)
		{
	      	   if(inputElements[i].checked)
		   {
		  
	           interest= interest+inputElements[i].value+" ";
	           
		   }
		}
    var e=document.getElementById('country').value;
    var f=document.getElementById('textarea').value;
    console.log("{");
    console.log('"name":"'+a+'",');
    console.log('"email":"'+b+'",');
    console.log('"sex":"'+sex+'",');
    console.log('"interest":"'+interest+'",');
    console.log('"country":"'+e+'",');
    console.log('"address":"'+f+'"');
    console.log("}");
	
	}

