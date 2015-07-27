(function(){
/*This createDom function creates dom elements recursively.It takes two arguments the dom object and the parent element of that object
	The dom object contains the all the html attributes,style attributes and events.All the attributes are applied to the element
	in this function and the event listeners are also added in this function
			*/
	var createDom=function(obj,parent)
		{

			var i=2,element,a,number,n,j,k,type;
	      	//obj.number is the number of dom elements we want to create
			if(!obj.number) //If there is no number attribute then create only one element that tag.So number is set to 1
			{
			number=1;
			i=1;
			}
			else
			 number=obj.number;	//Else set number to object's number attribute
		   for(n=0;n<number;n++)	
		   {
					element=document.createElement(obj.tag); //create element
		            for(i=1;i<Object.keys(obj).length;i++)
		            {
		            	a=Object.keys(obj)[i];	//Get Object attribute name
		                type=typeof(obj[a]);	//Get the type of object
						//if attribute is style then set style properties of the created element
						if(a=='style')	
								for(k in obj[a])	
										element[a][k]=obj[a][k];								
										
									


						if(type!='object') //If attribute is not of type object 
							element[a]=obj[a];			
						if(a=='child')
							{
					     	for(j in obj.child)
						     	{
						     	//Here is the recursion.It creates the child elements.
								createDom(obj[a][j],element);      
								}
							}
						if(obj[a] instanceof Array)	//If attribute is of type array
							{
								element[a]=obj[a][n];
							}
	      				if(a=='events')
		           	    	{
		           	    		//Loop through the event object attribute and add event listener to the element
		           	    		for(k in obj[a])	
		           	    		{

										element.addEventListener(k,obj[a][k]);
								}	
		           	    	}
           	     
           	    	}
           	  parent.appendChild(element); //appending the child element to the parent
           	 }
            

		
     };

   	//This is radio buttons dom object.
   	//It contains style attributes and event attributes.It has multiple children which also has children.
     var radiobuttons={
     	tag:'div',
     	id:'maindiv',
     	style:{
     		    width: '960px',
			    height: '800px',
			    border: '3px solid lightseagreen',
			    margin: '0 auto',
			    borderRadius: '5px',
			    padding: '10px'
     	      },
        child:[


        			{
        				tag:'div',
        				id:'radiobox',
			  	  	    style: {
					  	  	   	width:'378px',
					  	  	    height:'100px',
					  	  	    margin:'20px auto',
					  	  	    fontSize:"19px"
								},
						child: [
								{
					     		tag:'label',
					     		number:3,
								innerHTML:['Basic calculator','Date calculator','Emi calculator'],
						     	style:{
				     			width:'30',
				     			height:'30px',
				     			marginTop:'0px',
				     			marginRight:'7px',
				     		    	 }
				     		    },
				     			{
					     		tag:'input',
					     		number:3,
					     		type:'radio',
					     		name:'options',
					     		id:['BasicCalculator','datecalculator','emicalculator'],
					     		events:{
					     				"click":CreateCalculators
							     	   },
					     		className:'radioclass',
						     	style:{
				     			width:'30',
				     			height:'30px',
				     			marginTop:'0px',
				     			margin:'0px 45px 0px 40px'
					     		     }
			     				}
	    		  			]
		          
			     		}
     		    
     		]
     };

    createDom(radiobuttons,document.body);
    var maindiv=document.getElementById('maindiv');

    function CreateCalculators(e)
			    {
			    	var calculators=document.getElementsByClassName('calculators');
			    	
			    	if(calculators.length===0)
			    		createDom(calculatorobjects[e.currentTarget.id],maindiv);
			    	else
			    	for(i=0;i<calculators.length;i++)
			    	{
			    		if(e.currentTarget.id!=calculators[i].id)
					    {
					    	maindiv.removeChild(calculators[i]);	//REMOVE OTHER CALCULATORS

					    }
					    createDom(calculatorobjects[e.currentTarget.id],maindiv);
					    
			    	}
			    }
    
    var calculatorobjects={};
    //Basic Calculator Dom object
    //This dom object contains multiple children which in turn has children.It also has style attributes and event attributes
    //----------------------------------------------------------------------------------------------------------------------
    calculatorobjects.BasicCalculator={
			    				tag:'div',
			    				id:'calculatordiv',
			    				className:'calculators',
			    				style: { 
			    						border: '10px solid burlywood',
							  			height: '321px',
							 			width: '500px',
							  			padding: '10px 10px 10px 10px',
							  			backgroundColor: 'cornflowerblue',
							  			borderRadius: '8px',
							  			margin:'0 auto',
							  			position:'relative'
							  		   },
							  	child: [                        
									  			{
									  			tag:'input',
									  			id:'inputbox',
									  			type:'input',
					  	  	   					style:{
								  		      			float: 'right',
								  						width: '498px',
							  							height: '52px',
							  							fontSize: '31px',
							  			   				textAlign: 'right'
													  }
												},
												{
													tag:'div',
										  	  	    style:{
										  		   			width: '236px',
												  			height: '247px',
												 		    marginTop: '5px',
												  			float: 'left',
														  },
													child:[
															{
															tag:'button',
															number:'11',
															type:'button',
															id:['1','2','3','4','5','6','7','8','9','0','.'],
												  	  	    innerHTML:['1','2','3','4','5','6','7','8','9','0','.'],
												  	  	    events:{
												  	  	    		"click":display
														  	  	   },
												  	  	    style:{  width: '74px',
														  			float: 'left',
														 		    height: '65px',
														  			borderRadius: '5px',
														  			color: 'white',
														  			fontWeight: 'bolder',
														  			fontSize: '22px',
														  			backgroundColor: 'crimson'
														  		}
															 }
														   ]
														  
												},
													    		
									  			{
									  			tag:'div',
									    		id:'operatorbox',
													style:{
													width: '250px',
										  			height: '246px',
										  			float: 'left',
										  			marginTop: '5px',
												  		   } ,
												 child:[
															 {
															 tag:'button',
															 number:'6',
															 type:'button',
															 id:['*','/','+','-','%','MOD'],
															 innerHTML:['*','/','+','-','%','MOD'],
															 className:'operators',
															 events:{
												  	  	    		"click":displayoperator
														  	  	   },
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
													 		  		}
													 		 },
													 		 {
															 tag:'button',
															 type:'button',
															 id:['CLR'],
															 innerHTML:['CLR'],
															 className:'operators',
															 events:{
												  	  	    		"click":cleardisplay
														  	  	   },
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
													 		  		}
													 		 },

													 		 {
															 tag:'button',
															 type:'button',
															 id:['M+'],
															 innerHTML:['M+'],
															 className:'operators',
															 events:{
												  	  	    		"click":memoryadd
														  	  	   },
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
													 		  		}
													 		 },
													 		 {
															 tag:'button',
															 type:'button',
															 id:['<-'],
															 innerHTML:['<-'],
															 className:'operators',
															 events:{
												  	  	    		"click":backspace
														  	  	   },
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
													 		  		}
													 		 },
													 		 {
															 tag:'button',
															 type:'button',
															 id:['MD'],
															 innerHTML:['MD'],
															 className:'operators',
															 events:{
												  	  	    		"click":memorydelete
														  	  	   },
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
													 		  		}
													 		 },
													 		 {
															 tag:'button',
															 type:'button',
															 id:['M-'],
															 innerHTML:['M-'],
															 className:'operators',
															 events:{
												  	  	    		"click":memoryminus
														  	  	   },
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
													 		  		}
													 		 },
													 		  {
															 tag:'button',
															 type:'button',
															 id:['MR'],
															 innerHTML:['MR'],
															 className:'operators',
															 events:{
												  	  	    		"click":memoryrecall
														  	  	   },
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
													 		  		}
													 		 },
													 		 {
													 		 	tag:'button',
													 			type:'button',
																id:'=',
																innerHTML:'=',
																className:'operators',
																events:{
																		"click":calculate
																	   },
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
													 		  		}
													 		 }


												 	   ]	  	   
										  	  	}
					   
							  		   ]

							   };
	//----------------------------------------------------------------------------------Calculator dom object------------
				   

  

    //Date Calculator Object
    //--------------------------------------------------------------------------------------------------------------------
    calculatorobjects.datecalculator=
    			{ 
	    			tag:'div',
	    			id:'datediv',
	    			className:'calculators',
	    			style:
						{
							    width: '926px',
							    height: '689px',
							    border: '6px solid pink',
							    position: 'absolute',
							    top: '100px',
							    borderRadius: '20px',
							    padding: '10px'
				  		},
					child:
						[
							{
								tag:'div',
								id:'datebox1',
								style:
									{
										width:'700px',
										height:'200px',
									
								
									},
								child:
									[
										{

											tag:'h1',
											id:'header1',
											innerHTML:'Date Diffference',
										},
										{
											tag:'span',
											innerHTML:'Enter Date',
											style:
													{	
														width:'150px',
														height:'30px',
														padding:'0px',
														marginRight: '10px',
													    fontSize: '20px'
													}
										},
										{
											tag:'input',
											number:2,
											id:['date1','date2'],
											type:'date',
											style:{
													width:'150px',
													height:'30px'			
												  }
										},
										{
											tag:'button',
											className:'datediffbutton',
											type:'button',
											innerHTML:'Get difference',
											style:
													{	
														width:'90px',
														height:'30px',
														padding:'0px',
														marginLeft:'10px'
													},
											events:{

													"click":datediff
												   }
										},
										{
											tag:'p',
											id:'result1',
											style:
												{	
													width:'150px',
													height:'30px',
													padding:'0px',
													marginLeft:'10px'
												}
										}



									]		
							},
							{
								tag:'div',
								id:'datebox2',
								style:
									{
										width:'808px',
										height:'200px',
									
								
									},
								child:
									[
										{

											tag:'h1',
											innerHTML:'Time Diffference',
										},
										{
											tag:'span',
											innerHTML:'Enter Time1',
											style:
													{	
														width:'150px',
														height:'30px',
														padding:'0px',
														marginRight: '10px',
													    fontSize: '20px'
													}
										},
										{
											tag:'input',
											number:2,
											id:['hour2.1','minute2.1'],
											placeholder:['HRS','MIN'],
											type:'text',
											style:{
													width:'50px',
													height:'30px'			
												  }
										},
										{
											tag:'select',
											id:'select1',
											style:{
											height:'26px',
											width:'63px',
											marginLeft:'10px',
											marginRight:'10px'
												  },
											child:
												[
													{
													tag:'option',
													number:2,
													id:['option1.1','option1.2'],
													innerHTML:['AM','PM']
													}
												]
											
										},
										{
										tag:'span',
										innerHTML:'Enter time2',
										style:
												{	
													width:'150px',
													height:'30px',
													padding:'0px',
													marginRight: '10px',
												    fontSize: '20px'
												}
										},
										{
										tag:'input',
										number:2,
										id:['hour2.2','minute2.2'],
										type:'text',
										maxlength:'2',
										placeholder:['HRS','MIN'],
										style : {
												height:'20px',
												width:'50px',			
											    }
										},
										{
											tag:'select',
											id:'select2',
											style:{
											height:'26px',
											width:'63px',
											marginLeft:'10px',
											marginRight:'10px'
												  },
											child:
												[
													{
													tag:'option',
													number:2,
													id:['option2.1','option2.2'],
													innerHTML:['AM','PM']
													}
												]
											
										},
										{
											tag:'button',
											className:'timediffbutton',
											type:'button',
											innerHTML:'Get difference',
											style:
													{	
														width:'90px',
														height:'30px',
														padding:'0px',
														marginLeft:'10px'
													},
											events:{

													"click":timediff
												   }
										},
										{
											tag:'p',
											id:'result2',
											style:
												{	
													width:'150px',
													height:'30px',
													padding:'0px',
													marginLeft:'10px'
												}
										}



									]		
							},
							{
								tag:'div',
								id:'datebox3',
								className:'datediv3',
								child:[
										{
										tag:'h1',
										innerHTML:'Add time interval',
										},
										{
										tag:'span',
										innerHTML:'Enter date and time',
										style:
												{	
													width:'150px',
													height:'30px',
													padding:'0px',
													marginRight: '10px',
												    fontSize: '20px'
												}
										},
										
										{
											tag:'input',
											id:'date3',
											type:'date',
											style:{
												width:'150px',
												height:'30px'			
												}

										},
										{
											tag:'input',
											number:2,
											id:['hour3.1','minute3.1'],
											type:'text',
											maxlength:'2',
											placeholder:['HRS','MIN'],
											style : {
													height:'28px',
													width:'50px',			
													marginLeft:'10px',
													} 

										},
										{
											tag:'span',
											innerHTML:'Set Time Interval',
											style:
												{	
													width:'150px',
													height:'30px',
													padding:'0px',
													marginLeft:'10px'
												}
										},
										{
											tag:'input',
											number:5,
											id:['year','months','hour3.2','minute3.2','days'],
											type:'text',
											placeholder: ['YRS','MONTHS','HRS','MIN','DAYS'],	
											style : {
													height:'28px',
													width:'50px',			
													marginLeft:'10px',
													fontSize:'15px'
													}
										},
										{
											tag:'button',
											className:'timeintervalbutton',
											type:'button',
											innerHTML:'Add time interval',
											style:
													{	
														width:'90px',
														height:'40px',
														marginLeft:'10px'
													},
											events:{

													"click":addtimeinterval
												   }

										},

										{
											tag:'p',
											id:'result3',
											style:
													{	
														width:'150px',
														height:'30px',
														padding:'0px',
														marginLeft:'10px'
													}
										}


									  ]
							}



						]

				};
	//-----------------------------------------------DATE CALCULATOR OBJECT ENDS------------------------------------


	//EMI CALCULATOR OBJECT
	//--------------------------------------------------------------------------------------------------------------
	calculatorobjects.emicalculator=
				{
				   tag:'div',
				   id:'emidiv',
				   className:'calculators',
				   style:{
						    position: 'absolute',
						    top: '116px',
						    width: '629px',
						    height: '500px',
						    border: '3px solid burlywood',
						    zIndex: '99',
						    paddingLeft: '300px',
						    paddingTop: '50px',
						    borderRadius: '5px',

						},
					child:[

							{
							tag:'div',
							className:'inputdiv',
							style : {
									float:'left'
									},   
						   child:[
						   			{
						   			tag:'p',
						   			number:4,
						   			innerHTML:[ 'LOAN','EMI','RATE','MONTHS' ],
							   		style: {
											borderRadius: '5px',
						   					marginLeft: '5px' ,
						   					 fontSize:'20px'
						   				   }

									}
						   		 ]
						   	},
						   	{
						   	tag:'div',
						   	id:'inputboxemi',
						   	className:'inputboxdiv',
							style:{
								 float: 'left',
					  			 width: '126px',
					 			 height: '188px',
					  			 borderRadius: '5px',
					 			 marginLeft: '10px',
					 			 marginTop:'17px'
								 },
							child:[
									{
									tag:'input',
									number:4,
									type:'text',
									placeholder:['loan','emi','rate','months'],
									id:['loan','emi','rate','months'],
									className:'inputboxes', 
									style: {
					 				 		 width: '115px',
						 					 height: '32px',
						 				   }		
		
									}

								  ]
						 	},
						 	{
						 	tag:'button',
						 	type:'button',
						 	id:'calculatemi',
						 	className:'calemi',
						 	innerHTML:'Calculate emi',
						 	style:{
									width:'100px',
									height:'40px',
									marginTop: '17px',
    								fontSize: '13px'
								  },
							events:{
									"click":calculateEmi
								   }
							}
						   ]
				};
	//-------------------------------------------EMI CALCULATOR OBJECT ENDS--------------------------------------------------





	//FUNCTIONALITIES OF ARITHMETIC CALCULATOR
	//-------------------------------------------------------------------------------------------------------------
			         var storednumber='',lastnumber,lastoperator,flag=false;
							
							var c=0,firstnum;
							function display(input)
							{
								
								input=input.currentTarget.id;
							 	var inputbox=document.getElementById('inputbox');
								var inputvalue=inputbox.value;
								if(flag===true)
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
							
								if (inputbox.value.length !== 0 || val ==="-") 
							    {
								    if (c ===0) 
								    {
							
								        firstnum = inputbox.value;
							
								        inputbox.value = inputbox.value + val;
								        
								    }
								    if (inputbox.value.length != 1)
								    {
								    	
								      c = 1;
										
										if(operator=='%'&&inputbox.value[inputbox.value.length-1]!=='%')
										
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
									
										value=inputbox.value[firstnum.length];
										var firstnumber,secondnumber;
										
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
			 var date1,date2,hours,days,months,years,ms,result1,string='';
			 date1=document.getElementById('date1').value;
			 date2=document.getElementById('date2').value;
			 result1=document.getElementById('result1');	//result1 for storing date difference result
			 date1=new Date(date1);
			 date2=new Date(date2);
			 ms=date2.getTime()-date1.getTime();
	         if(ms<0)
	         	result1.innerHTML='Date2 should not be before Date1';
	         else
	         {
				hours=ms/3600000;
				days=hours/24;
				years=Math.floor(days/365);
				
				months=Math.floor((days%365)/30);
				days=(days%365)%30;
  				string=string+((years>0)?years+' years ':'')+((months>0)?months+' months ':'')+((days>0)?days+' days':'');
  				result1.innerHTML=string;
				//result1.innerHTML=years+" years "+months+" months "+days+" days";
			 }
			
			
		}	
		
		//FUNCTION FOR CALCULATING TIME DIFFERENCE
	    function timediff()
	   {
	   
	  		var minutes,hours,date1,date2,result2;
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
			
		
					
			result2=document.getElementById('result2');
			hours=parseInt(time/3600);
			minutes=(time/60)%60;
			result2.innerHTML=hours+" hours "+minutes+" minutes";
				   
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
	//FUNCTIONALITIES OF EMI CALCULATOR
		//-----------------------------------------------------------------------------------
					function calculateEmi()
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
					 if(emi.value==='')
					 {
					  res=p*(r/1200)*b;
					   emi.value=res;
					 }
					 
					 if(nom.value==='')
					
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
					 
					 if(principal.value==='')
					 {
							var l=e*(a-1);
							result=l/(a*(r/1200));
							principal.value=Math.round(result);
					 
					 
					 }

			
			}		
		//-------------------------------------------------------------------------------------------


    
})();
