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
					var interest="";
								var name=document.form1.name.value;
								var email=document.form1.email.value;
								var sex=document.form1.sex.value;

                                var inputElements = document.getElementsByClassName('checkbox');
									for(var i=0; inputElements[i]; ++i)
										{
	      	   								if(inputElements[i].checked)
		   										{
		  
	           										interest= interest+inputElements[i].value+" ";
	           										//console.log(interest);		

	           									}
										}
										


								
								var country=document.form1.country.value;
								var address=document.form1.textarea.value;
								var object={};
								
								object.name=name;
								object.email=email;
								object.sex=sex;
								object.country=country;
								object.address=address;
								object.interest=interest;
							        object.__proto__=null;
							
							    JSON.stringify(object);
						console.log(object);
						

	
	}
