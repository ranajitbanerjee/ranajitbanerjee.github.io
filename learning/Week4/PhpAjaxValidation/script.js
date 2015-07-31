
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
                                   state[1]=("AndhraPradesh|ArunachalPradesh|Assam|Bihar|Chattisgarh|Goa|Gujrat|Haryana|HimachalPradesh|jammuandkashmir|jharkhand|karnataka|MadhyaPradesh|manipur|Mizoram|Telengana|UttarPradesh|WestBengal");
                                   state[2]=("LosAngeles|NewYork|Florida");

                                   
                                    var selectedCountryIndex = document.getElementById("country").selectedIndex;

                                    var stateElement = document.getElementById('state');
                                    stateElement.length = 0;
                                    stateElement.options[0] = new Option('Select State', '');
                                   state_arr = state[selectedCountryIndex].split("|");
                                   stateElement.selectedIndex = 0;
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
        if(x=='tab2')
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
function resetstate()
    {
        var state=document.getElementById('state');
        state.options.length=0;
        document.getElementById('message').innerHTML="";
    }
function subscribe()
{
    var xmlhttp;
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    var name=document.getElementById('name').value;
    var mobileno=document.getElementById('mobileno').value;
    var email=document.getElementById('email').value;
    var sex=document.getElementsByName('sex');
    var address=document.getElementById('address').value;
    var country=document.getElementById('country').value;
    var state=document.getElementById('state');
    var interest=document.getElementsByName('interest');
    var sexvalue="";
    if(state.options.length!==0)
    {
        state=state.options[state.selectedIndex].value;

    }
    else
        state="";
    var interests="";
    var favs="";
    var i=0;
    for(i=0;i<3;i++)
        {
            if(interest[i].checked)
                {
                    interests=interests+interest[i].value+ "";
                }        
            
        }
   
        if(sex[0].checked)
        {
            sexvalue="male";
        }
        if(sex[1].checked)
        {
            sexvalue="female";
        }
    var favorites=document.getElementsByName("fs");
    console.log(favorites.length+" "+favorites);
    for(i=0;i<favorites.length;i++)
        {
            console.log(favorites[i].value);
            if(favorites[i].checked)
                favs=favs+favorites[i].value+",";       
        }
    xmlhttp.onreadystatechange=function()
    {
        if(xmlhttp.readyState==4&&xmlhttp.status==200)
        {

            console.log(xmlhttp.responseText);
            var response=JSON.parse(xmlhttp.responseText);
                for(var i in response)
                {
                    console.log(i+" "+response[i]);
                    document.getElementById(i).innerHTML=response[i];

                   
                }
             if(response.message=="SUCCESSFULLY SUBSCRIBED")
                {

                    document.getElementById("form1").reset();
                    resetstate();
                }
            }
        
    };
    var params="name="+name+"&email="+email+"&mobileno="+mobileno+"&interests="+interests+"&sexvalue="+sexvalue+"&country="+country+"&state="+state+"&address="+address+"&favorites="+favs;
    console.log(params);
    xmlhttp.open("POST", "get.php", true);
    //console.log(params);
    xmlhttp.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded");
    xmlhttp.send(params);


}

