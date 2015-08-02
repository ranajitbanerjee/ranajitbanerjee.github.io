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

//Edit or delete data ajax function Here element is the edit or delete button object
function modifydata(element)
{
    var form=element.parentElement.parentElement.firstChild; // Get the form element to which the edit button or delete button belongs to
    //console.log(form);
    var rowelement=form.parentElement; //Get the row element from which edit or delete button is invoked
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

                if(response.message=='Successfully deleted')
                   {
                    //If delete operation is successfull then remove the row element which was deleted
                      rowelement.parentElement.removeChild(rowelement);
                   }
                //set the message span element to response message variable
                document.getElementById('message').innerHTML=response.message;
                
            }

        };
//if edit button was clicked then element name is edit
    if(element.name=='edit')
       { 
        //store all the input fields value and operation name to params variable.Operation means edit or delete operation
         params="name="+name+"&email="+email+"&mobileno="+mobileno+"&sex="+sex+"&country="+country+"&state="+state+"&address="+address+"&interests="+interests+"&favorites="+favorites+"&operation="+element.name;
       }
    if(element.name=='delete')
        {
     //store only the email field value for delete operation as email field is primary key
       
          params="email="+email+"&operation="+element.name;
        }
        xmlhttp.open("POST","EditAndDelete.php",true);
         xmlhttp.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded");
        xmlhttp.send(params);
}