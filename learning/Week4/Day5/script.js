
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
function resetall()
    {
        var state=document.getElementById('state');
        state.options.length=0;
    }
function subscribe()
{
    var xmlhttp,name,mobileno,email,sex,address,country,state,interest,sexvalue,i;
    var interests="";
    var favs="";

    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

     name=document.getElementById('name').value;
     mobileno=document.getElementById('mobileno').value;
     email=document.getElementById('email').value;
     sex=document.getElementsByName('sex');
     address=document.getElementById('address').value;
     country=document.getElementById('country').value;
     state=document.getElementById('state');
     interest=document.getElementsByName('interest');
     sexvalue="";
    if(state.options.length!==0)
    {
        state=state.options[state.selectedIndex].value;

    }
    else
        state="";
   
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
    //console.log(favorites.length+" "+favorites);
    for(i=0;i<favorites.length;i++)
        {
           // console.log(favorites[i].value);
            if(favorites[i].checked)
                favs=favs+favorites[i].value+",";       
        }
   // console.log(favorites);
    xmlhttp.onreadystatechange=function()
    {
        if(xmlhttp.readyState==4&&xmlhttp.status==200)
        {

            console.log(xmlhttp.responseText);
            var response=JSON.parse(xmlhttp.responseText);
                for(i in response)
                {
                     
                   // console.log(i+" "+response[i]);
                   document.getElementById(i).innerHTML=response[i];
                         
                }
             if(response.message=="Successfully subscribed")
                {

                    document.getElementById("form1").reset();
                    resetall();
                }
            }
        
    };
    var params="name="+name+"&email="+email+"&mobileno="+mobileno+"&sexvalue="+sexvalue+"&country="+country+"&state="+state+"&address="+address+"&interests="+interests+"&favorites="+favs;
    console.log(params);
    xmlhttp.open("POST", "get.php", true);
    xmlhttp.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded");
    xmlhttp.send(params);


}
function modifydata(element)
{
    var form=element.parentElement.parentElement.firstChild; //form element
    //console.log(form);
    var rowelement=form.parentElement; //row element
    var name,sex,email,country,state,address,mobileno,interests,favorites,xmlhttp,i,params;
    if(window.XMLHttpRequest)
        {
            xmlhttp=new XMLHttpRequest();
        }
    else
        {
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
     name=form[0].value;
     sex=form[1].value;
     email=form[2].value;
     country=form[3].value;
     state=form[4].value;
     address=form[5].value;
     mobileno=form[6].value;
     interests=form[7].value;
     favorites=form[8].value;

    xmlhttp.onreadystatechange=function() 
        {
            if(xmlhttp.readyState==4&&xmlhttp.status==200)
            {
                console.log(xmlhttp.responseText);
                var response=JSON.parse(xmlhttp.responseText);
                console.log(response.message);
                if(response.message=='Successfully deleted')
                   {
                      rowelement.parentElement.removeChild(rowelement);
                   }
                document.getElementById('message').innerHTML=response.message;
                
            }

        };
    console.log(element.name);
    if(element.name=='edit')
       {
         params="name="+name+"&email="+email+"&mobileno="+mobileno+"&sex="+sex+"&country="+country+"&state="+state+"&address="+address+"&interests="+interests+"&favorites="+favorites+"&operation="+element.name;
       }
    if(element.name=='delete')
        {
          params="email="+email+"&operation="+element.name;
        }
        xmlhttp.open("POST","EditAndDelete.php",true);
         xmlhttp.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded");
        xmlhttp.send(params);
}