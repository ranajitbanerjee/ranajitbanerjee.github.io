function editdata(element)
{
	var form=element.parentElement.parentElement.firstChild; //form element
	//console.log(form);
	var rowelement=form.parentElement; //row element
	

	var xmlhttp,i,params;
	if(window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var name=form[0].value;
	var sex=form[1].value;
	var email=form[2].value;
	var country=form[3].value;
	var state=form[4].value;
	var address=form[5].value;
	var mobileno=form[6].value;
	var interests=form[7].value;
	var favorites=form[8].value;

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
		xmlhttp.open("POST","editfunction.php",true);
		 xmlhttp.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded");
		xmlhttp.send(params);
}
