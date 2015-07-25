(function()
{
 
	  document.body.id='body';
  //CREATING DOM ELEMENTS FUNCTION
  //-----------------------------------------------------------------------------------------------
  var createcomponent=function(obj)
  {
		var i,j,k,element;
		var number=obj.number;
		if(isNaN(number))
		number=1;
		var parentelement=document.getElementById(obj.parent);
	   for(i=0;i<number;i++)
	   {
	   	element=document.createElement(obj.elem);
			for(j=2;j<Object.keys(obj).length;j++)
			{			
				var a=Object.keys(obj)[j];

				//set style properties of element
				if(a=='style')
						for(k in obj[a])	
								element[a][k]=obj[a][k];								
								
				else
				{			
				    
					var typ=typeof(obj[a]);			//Get the type of object property
					//alert(typ);
					if(typ!='object')
						element[a]=obj[a];			//IF KEY 
					else
						{
				
						element[a]=obj[a][i];
				
						}
				}
			}
			
	   parentelement.appendChild(element);

 	   }
  }
  //--------------------------------------------------------------------------------------------------------

  //CREATING THE RADIO BUTTONS
  				//creating a main div
    	  	createcomponent({elem:'div',parent:'body',id:'main',className:'maindiv'});
				//creating a RADIO DIV FOR RADIO BUTTONS
  	  	   createcomponent({elem:'div',parent:'main',id:'radiobox',className:'radiodiv',
  	  	   style:{width:'374px',height:'100px'}});
				//CREATING RADIO LABELS
			createcomponent({elem:'label',parent:'radiobox',number:'3',
			innerHTML:['Basic Calculator','Date calculator','Mortgage Calculator'],
			className:'labels',style:{   width:'300px' , marginRight :'10px' }    });

			   //creating RADIO INPUT ELEMENTS
			createcomponent({elem:'input',parent:'radiobox',number:'3',type:'radio',
			name:'options',id:['radio1','radio2','radio3'],className:'radioclass', style : { marginRight:'100px'  }
			});
			
			
    	 
  //CREATING DOM ELEMENTS OF ARITHMETIC CALCULATOR
  //----------------------------------------------------------------------------------------------------
  function createcalculator()
  {
			  	  
  	 		// CREATING  DIV FOR CALCULATOR
  	  	   createcomponent({elem:'div',parent:'main',id:'calculatorbox',className:'caldiv',
  			  	 style: { border: '10px solid burlywood',
  			height: '321px',
 			width: '500px',
  			padding: '10px 10px 10px 10px',
  			backgroundColor: 'cornflowerblue',
  			borderRadius: '8px',
  			visibility:'hidden'} });	//Calculator div

			 createcomponent({elem:'input',parent:'calculatorbox',id:'inputbox',type:'input',className:'inputdiv',
  	  	   style:{
  		      float: 'right',
  				width: '498px',
  				height: '52px',
  				fontSize: '31px',
  			   textAlign: 'right'
		}});
	
			//CREATING DIV FOR DISPLAYING NUMBERS  	  	   
  	  	   createcomponent({elem:'div',parent:'calculatorbox',id:'numberbox',className:'numberdiv',
  	  	   style:{
  		   width: '236px',
  			height: '247px',
 		   marginTop: '5px',
  			float: 'left'
		}});
			
			  	  	   
  	  	   
  	  	   
  	  	   createcomponent({elem:'div',parent:'calculatorbox',id:'operatorbox',className:'operatordiv',
			style:{
			width: '250px',
  			height: '246px',
  			float: 'left',
  			marginTop: '5px'
  		   }  	  	   
  	  	   });
  	  	 
  	  	   createcomponent({elem:'button',parent:'numberbox',number:'11',type:'button',id:['1','2','3','4','5','6','7','8','9','0','.'],
  	  	   innerHTML:['1','2','3','4','5','6','7','8','9','0','.'],className:'numbers',
  	  	   style:{  width: '74px',
  			float: 'left',
 		   height: '65px',
  			borderRadius: '5px',
  			color: 'white',
  			fontWeight: 'bolder',
  			fontSize: '22px',
  			backgroundColor: 'crimson'}
  	  	   });	
  	  	   
			createcomponent({elem:'button',parent:'operatorbox',number:'12',type:'button',
			id:['*','/','+','-','CLR','MD','MR','M+','%','MOD','CN','M-'],
			innerHTML:['*','/','+','-','CLR','MD','MR','M+','%','MOD','CN','M-'],className:'operators',
			style: 
				{
			width: '80px',
  			height: '51px',
  			float: 'left',
  			borderRadius: '8px',
  			fontSize: '15px',
  			fontWeight: 'bold',
  			color: 'white',
  			backgroundColor: 'darkcyan'  	
 		  		}});	
				createcomponent({elem:'button',parent:'operatorbox',type:'button',
			id:'=',
			innerHTML:'=',className:'operators',
			style: 
				{
			width: '238px',
  			height: '51px',
  			float: 'left',
  			borderRadius: '8px',
  			fontSize: '15px',
  			fontWeight: 'bold',
  			color: 'white',
  			backgroundColor: 'darkcyan'  	
 		  		}});	

  }
  //-------------------------------------------------------------------------------------------------- 	
	
		
   
 
   function setevents(identifier,event1,functionname)
		{
		var elements,i;
		if(document.getElementsByClassName(identifier).length>0)
		{
				elements=document.getElementsByClassName(identifier);
			    for(i=0;i<elements.length;i++)
						{
					
						elements[i].addEventListener(event1,functionname);	
                         
						}

		}
		else if(typeof(identifier)=='object')
		{
			for(i=0;i<identifier.length;i++)
						{
					
						document.getElementById(identifier[i]).addEventListener(event1,functionname);	
                         
						}
		}
			else
			{
				elements=document.getElementById(identifier);
				elements.addEventListener(event1,functionname);	
			}
	
		}  
		
	
	createcalculator();
	emicalculator();
	createdatecalculator();

	function showapp(e)
	{
		  var a,b,c;
		  	a=document.getElementById('calculatorbox');
		  	c=document.getElementById('emibox');
		  	b=document.getElementById('datebox');
		  	if(e.currentTarget.id=='radio1')
		  	{
		  		
				b.style.visibility='hidden';	
				c.style.visibility='hidden';
				a.style.visibility='visible';


						
			}	
			if(e.currentTarget.id=='radio2')
			{		
  			a.style.visibility='hidden';	
			c.style.visibility='hidden';
			b.style.visibility='visible';
				
			}
			
			if(e.currentTarget.id=='radio3')
			{		
			a.style.visibility='hidden';	
			b.style.visibility='hidden';
			c.style.visibility='visible';
			}
	
	}
	
	
	
	
	//CREATE DOM ELEMENTS FOR DATE CALCULATOR
	//------------------------------------------------------------------------------------------------------------

	function createdatecalculator()
	{
			
			createcomponent({elem:'div',parent:'main',id:'datebox',className:'datediv',style:{
			width:'1000px',
			height:'500px',
			position: 'absolute',
  			top:'100px',
  			visibility:'hidden' }		
			});	//Main div

			createcomponent({elem:'div',parent:'datebox',id:'datebox1',className:'datediv1',style:
					{
						width:'700px',
						height:'200px',
					
				
					}			
			});
			
			
  	  	  createcomponent({elem:'h1',parent:'datebox1',id:'header1',className:'headerdiv',innerHTML:'Date Diffference'});	//Calculator div
  	  	  createcomponent({elem:'div',parent:'datebox',id:'datebox2',className:'datediv2',
			style: {
				width:'700px',
				height:'200px',
					
					
			}
  	  	  
  	  	  
  	  	  });



		   createcomponent({elem:'h1',parent:'datebox2',id:'header2',className:'headerdiv',innerHTML:'Time Difference'});	//Calculator div
  	  	
  	  	   createcomponent({elem:'div',parent:'datebox',id:'datebox3',className:'datediv3'});
			//CREATING DATE INPUT BOXES FOR DATE DIFFERENCE
			createcomponent({elem:'input',parent:'datebox1',number:2,id:['date1','date2'],type:'date',style:{
					width:'150px',
					height:'30px'			
				}
			});
			//CREATING BUTTON FOR CALCULATING DATE DIFFERENCE
			createcomponent({elem:'button',parent:'datebox1',className:'datediffbutton',type:'button',innerHTML:'Get difference',style:
				{	
					width:'90px',
					height:'30px',
					padding:'0px',
					marginLeft:'10px'
				}
				});			
			//CREATING P ELEMENT FOR STORING THE RESULT	
			createcomponent({elem:'p',parent:'datebox1',id:'result1',innerHTML:'Get difference',style:
				{	
					width:'150px',
					height:'30px',
					padding:'0px',
					marginLeft:'10px'
				}
				});	
			createcomponent({elem:'input',parent:'datebox2',number:2,id:['hour2.1','minute2.1'],type:'text',maxlength:'2',
			style : {
			height:'20px',
			width:'50px',			
			
			}             });
			
			createcomponent({elem:'select',parent:'datebox2',id:'select1',style:{
				height:'26px',
				width:'63px',
				marginLeft:'10px',
				marginRight:'10px'
				
			}});
			
			createcomponent({elem:'option',parent:'select1',id:'option1.1',innerHTML:'AM'});
			createcomponent({elem:'option',parent:'select1',id:'option1.2',innerHTML:'PM'});
			
			createcomponent({elem:'input',parent:'datebox2',number:2,id:['hour2.2','minute2.2'],type:'text',maxlength:'2',
			style : {
			height:'20px',
			width:'50px',			
			
			} });		
			createcomponent({elem:'select',parent:'datebox2',id:'select2',style:{
				height:'26px',
				width:'63px',
				marginLeft:'10px',
				marginRight:'10px'
				
			}});
			createcomponent({elem:'option',parent:'select2',id:'option2.1',innerHTML:'AM'});
			createcomponent({elem:'option',parent:'select2',id:'option2.2',innerHTML:'PM'});
			
			createcomponent({elem:'button',parent:'datebox2',className:'timediffbutton',type:'button',innerHTML:'Get difference',style:
				{	
					width:'90px',
					height:'30px',
					padding:'0px',
					marginLeft:'10px'
				}
				});			
				createcomponent({elem:'p',parent:'datebox2',id:'result2',style:
				{	
					width:'150px',
					height:'30px',
					padding:'0px',
					marginLeft:'10px'
				}
				});	
		   createcomponent({elem:'h1',parent:'datebox3',id:'header3',className:'headerdiv',innerHTML:'Add Time Interval'});	//Calculator div
  	  	
	//CREATING DATE INPUT BOXES FOR ADDING TIME INTERVAL  	  	
  	  		createcomponent({elem:'input',parent:'datebox3',number:1,id:'date3',type:'date',style:{
					width:'150px',
					height:'30px'			
				}
			});
			
			createcomponent({elem:'input',parent:'datebox3',number:2,id:['hour3.1','minute3.1'],type:'text',maxlength:'2',
			style : {
			height:'28px',
			width:'50px',			
			marginLeft:'10px',
			} });		
			
			createcomponent({elem:'span',parent:'datebox3',id:'spanelement',type:'button',innerHTML:'Set Time Interval',style:
				{	
					width:'150px',
					height:'30px',
					padding:'0px',
					marginLeft:'10px'
				}
				});	
				
			createcomponent({elem:'input',parent:'datebox3',number:5,id:['year','months','hour3.2','minute3.2','days'],type:'text',maxlength:'2',
			style : {
			height:'28px',
			width:'50px',			
			marginLeft:'10px',
			} });	
			
			createcomponent({elem:'button',parent:'datebox3',className:'timeintervalbutton',type:'button',innerHTML:'Add time interval',style:
				{	
					width:'90px',
					height:'40px',
					marginLeft:'10px'
				}
				});	

			createcomponent({elem:'p',parent:'datebox3',id:'result3',style:
				{	
					width:'150px',
					height:'30px',
					padding:'0px',
					marginLeft:'10px'
				}
				});	
	}	

	//---------------------------------------------------------------------------------------------------------------------





		
//CREATE EMI CALCULATOR	
function emicalculator()
	{
		//CREATING MAIN DIV FOR EMI 
		createcomponent({elem:'div',parent:'main',id:'emibox',className:'emidiv',style:{
			position:'absolute',
			top:'90px',
			left:'50px',
			visibility:'hidden'
	}
	
	});		
	   createcomponent({elem:'div',parent:'emibox',id:'input',className:'inputdiv',
			style : {
					float:'left'
			}	   
	   });	
	   //CREATING LABELS 
	   createcomponent({ elem:'p',parent:'input',number:4,innerHTML:[ 'loan','emi','rate','months' ],
	   		 style:{
						   borderRadius: '5px',
   						marginLeft: '5px' ,
   								
	   				 } 
					  });
		  
		
		//CREATING DIV FOR INPUTBOXES			  
		createcomponent({elem:'div', parent:'emibox',id:'inputboxemi',className:'inputboxdiv',
		style:{
			 float: 'left',
  			 width: '126px',
 			 height: '188px',
  			 borderRadius: '5px',
 			 marginLeft: '5px'
			 }		
	 	 });
	 	 //CREATING INPUTBOXES
		createcomponent({	elem:'input',parent:'inputboxemi',number:4,type:'text', placeholder:['loan','emi','rate','months'],
		id:['loan','emi','rate','months'],className:'inputboxes', style: {
					 				 
					 width: '115px',
 					 height: '32px',
 					
				}		
		
		});		
		//Create button calculate emi button
		createcomponent({elem:'button',parent:'emibox',type:'button',id:'calculatemi',className:'calemi',innerHTML:'Calculate emi',style:{
			width:'100px',
			height:'40px',
						
			
			}});

					
	}

//-----------------------------------------------------------------------------------------------------




		//FUNCTIONALITIES OF EMI CALCULATOR
		//-----------------------------------------------------------------------------------
					function calculate()
			{
					 var principal=document.getElementById('loan');
					 var rate=document.getElementById('rate');
					 var nom=document.getElementById('months');
					 var emi=document.getElementById('emi');
					 var r=parseFloat(rate.value);
					 var e=parseFloat(emi.value);
					 var n=parseFloat(nom.value);
					 var p=parseFloat(principal.value);
					  var a=Math.pow(1+(r/1200),n);
					  var res;
					  var b=a/(a-1);
					 if(emi.value=='')
					 {
					  res=p*(r/1200)*b;
					   emi.value=res;
					 }
					 
					 if(nom.value=='')
					
					 	{
					 		
					 		 var c=e-(p*(r/1200));
							if(c<=0)
								alert("EMI TOO LESS");
							else
							{
								
					 		 var t=Math.log(e/c);
					 		 var k=Math.log(1+(r/1200));
							 		result=Math.round(t/k);
							 	
							 		nom.value=result;
							}
					   }
					 
					 if(principal.value=='')
					 {
							var l=e*(a-1);
							result=l/(a*(r/1200));
							principal.value=Math.round(result);
					 
					 
					 }

			
			}		
		//-------------------------------------------------------------------------------------------

 	//ATTACHING EVENTS 
 	//-----------------------------------------------
	 setevents('calemi','click',calculate);
	 setevents('timeintervalbutton','click',addtimeinterval);
	 setevents('timediffbutton','click',timediff);
	 setevents('datediffbutton','click',datediff);
	 
     setevents('radioclass','click',showapp);  
	 setevents('numbers','click',display);
	 setevents(['*','/','+','-','%','MOD'],'click',displayoperator);

	 setevents(['CLR'],'click',cleardisplay);
	 setevents('=','click',calculate);
	 setevents('CN','click',backspace);
	 setevents('M+','click',memoryadd);
	 setevents('M-','click',memoryminus);
	 setevents('MR','click',memoryrecall);
	 setevents('MD','click',memorydelete);
	//--------------------------------------------------


	//FUNCTIONALITIES OF ARITHMETIC CALCULATOR
	//-------------------------------------------------------------------------------------------------------------
			         var storednumber='',lastnumber,lastoperator,flag=false;
							
							var c=0,firstnum;
							function display(input)
							{
								
								input=input.currentTarget.id;
							 	var inputbox=document.getElementById('inputbox');
								var inputvalue=inputbox.value;
								if(flag==true)
								{
									cleardisplay();
									inputbox.value=input;
								}
								else
								{
							    var index=inputbox.value.indexOf(lastoperator);
							    var string=inputbox.value.substring(0,index);
							    var decimalexists=string.search('.');
							    	if(inputvalue.lastIndexOf('.')>=0&&input=='.'&&decimalexists==-1)
							    	{ } //dont set inputbox value when decimal is already in the inputbox
							   		 else
							   		 inputbox.value=inputvalue+input;
								
								}
							}
							
							function displayoperator(operator)
							{
							   var val=operator.currentTarget.id;
								var inputbox = document.getElementById("inputbox");
								lastoperator=val;
							
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
										 
										}    
											    
								    
								    }
								}
								flag=false;
							}
							function cleardisplay()
							{
								var inputbox=document.getElementById('inputbox');
								inputbox.value='';
								flag=false;
								c=0;
							
							}
							
							function  backspace()
							{
								var inputbox=document.getElementById('inputbox');
								var inputvalue=inputbox.value;
							
							    if(inputvalue[inputvalue.length-1]=='d')
							    	inputbox.value=inputvalue.substring(0,inputvalue.length-3);
							    else
							    inputbox.value=inputvalue.substring(0,inputvalue.length-1);
								c=0;
							}
							
							function calculate()
							{
								var inputbox,inputvalue,arr=[],i,value;
								inputbox=document.getElementById('inputbox');
								inputvalue=inputbox.value;
	
								if(lastoperator=='MOD')
									value=inputvalue.substring(firstnum.length+3);
								else
									value=inputvalue.substring(firstnum.length+1);
										if(lastoperator=='+')
											{
												
											    inputbox.value=parseFloat(firstnum)+parseFloat(value);
											}
									if(lastoperator=='-')
											{
												
											    inputbox.value=parseFloat(firstnum)-parseFloat(value);
											}
										if(lastoperator=='*')
											{
												
											    inputbox.value=parseFloat(firstnum)*parseFloat(value);
											}
									if(lastoperator=='/')
											{
												
											    inputbox.value=parseFloat(firstnum)/parseFloat(value);
											}
									if(lastoperator=='MOD')
											{
												
											    inputbox.value=parseFloat(firstnum)%parseFloat(value);
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
											inputbox.value=parseFloat(firstnumber)+(parseFloat(secondnumber)/100)*parseFloat(firstnumber);
											}
												if(value=='-')
											{
											inputbox.value=parseFloat(firstnumber)-(parseFloat(secondnumber)/100)*parseFloat(firstnumber);
											}
												if(value=='*')
											{
											inputbox.value=parseFloat(firstnumber)*(parseFloat(secondnumber)/100);
											}
												if(value=='/')
											{
											inputbox.value=parseFloat(firstnumber)/(parseFloat(secondnumber)/100);
											}
											
										}
											c=0;
							
									    flag=true; //SET FLAG TO TRUE --FLAG TRUE MEANS RESULT IS CALCULATED AND NOW CLEAR THE DISPLAY 
							
							}
							
						
							
							function memoryrecall()
							{
							
								var inputbox=document.getElementById('inputbox');
								inputbox.value=storednumber;
							
							}
							function memorydelete()
							{
							storednumber='';
							}
							function memoryadd()
							{
							
								var inputbox=document.getElementById('inputbox');
							   storednumber=parseFloat(inputbox.value);
								inputbox.value=parseFloat(inputbox.value)+parseFloat(storednumber);
							
							}
							function memoryminus()
							{
								
								var inputbox=document.getElementById('inputbox');
								inputbox.value=parseFloat(storednumber)-parseFloat(inputbox.value);
							
							}
									
	//-----------------------------------------------------------------------------------------------------
			
			
			





	//FUNCTIONALITIES OF DATE CALCULATOR
	//--------------------------------------------------------------------------------------------------------
	//1.FUNCTION FOR CALCULATING DATE DIFFERENCE

	function datediff()
		{
			 var date1;
			 date1=document.getElementById('date1').value;
			 var date2=document.getElementById('date2').value;
			 date1=new Date(date1);
			 date2=new Date(date2);
			 var ms=date2.getTime()-date1.getTime();
	
			var hours=ms/3600000;
			var days=hours/24;
			alert(days);
			var result1=document.getElementById('result1');	//result1 for storing date difference result
			var years=Math.floor(days/365);
			var months=Math.floor((days%365)/30);
			days=(days%365)%30;
			result1.innerHTML=years+" years "+months+" months "+days+" days";
			
			
			
		}	
		
		//FUNCTION FOR CALCULATING TIME DIFFERENCE
	    function timediff()
	   {
	   
	  		var minutes,hours,date1,date2;
			var hour1=parseInt(document.getElementById('hour2.1').value);
			var minute1=parseInt(document.getElementById('minute2.1').value);
			var hour2=parseInt(document.getElementById('hour2.2').value);
			var minute2=parseInt(document.getElementById('minute2.2').value);
	
			var e1 = document.getElementById('select1');
			var time1 = e1.options[e1.selectedIndex].value;
			var e2 = document.getElementById('select2');
			var time2 = e2.options[e2.selectedIndex].value;		
				if(time1=='PM'&&hour1!=12)
					hour1=hour1+12;
				if(time2=='PM'&&hour2!=12)
					hour2=hour2+12;
				if(time1=='AM'&&hour1==12)
					hour1=0;				
				
				if(time2=='AM'&&hour2==12)
				   hour2=0;
			 date1 = new Date(2000, 0, 1,  hour1, minute1); // 9:00 AM
			if((time2=='PM'&&time2=='AM')||(hour2<hour1))
			  date2 = new Date(2000, 0, 2,  hour2, minute2);
			else 
				date2=new Date(2000, 0, 1,  hour2, minute2);
					var time=(date2-date1)/1000;
			
		
					
			var timediff=document.getElementById('result2');
			hours=parseInt(time/3600);
			minutes=(time/60)%60;
			timediff.innerHTML=hours+" hours "+minutes+" minutes";
				   
	   }
	
	//FUNCTION FOR ADDING TIME INTERVAL

		function addtimeinterval() 
			{
				
				 var date;
				 date=document.getElementById('date3').value;
				 var dat=new Date(date);
				 
				 var hour=parseInt(document.getElementById('hour3.1').value);
				 var minute=parseInt(document.getElementById('minute3.1').value);
				 var intervalyear=document.getElementById('year').value;
				 var intervalmonth=document.getElementById('months').value;
				 var intervalhour=document.getElementById('hour3.2').value;
				 var intervalminute=document.getElementById('hour3.2').value;
				 var intervalday=document.getElementById('days').value;
				 var result3=document.getElementById('result3');
				result3.innerHTML='SS';
				 var date1=new Date(dat.getFullYear(),dat.getMonth(),dat.getDate(),hour,minute);
				 date1.setFullYear(date1.getFullYear()+parseInt(intervalyear));
				 date1.setMonth(date1.getMonth()+parseInt(intervalmonth));
				 date1.setHours(date1.getHours()+parseInt(intervalhour));
				 date1.setMinutes(date1.getMinutes()+parseInt(intervalminute));
				 date1.setDate(date1.getDate()+parseInt(intervalday));
				 var datestring=date1.toString();
				 result3.innerHTML=datestring.substring(0,datestring.indexOf('G'));
						
			}

	//-------------------------------------------------------------------------------------------------------------------

})();


