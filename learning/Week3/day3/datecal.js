function caldifferencedate()
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
			var datediff=document.getElementById('datedifference');
			var years=Math.floor(days/365);
			var months=Math.floor((days%365)/30);
			days=(days%365)%30;
			datediff.innerHTML=years+" years "+months+" months "+days+" days";
			
			
			
		}	
		
		function caltime()
	   {
	   
	  		var minutes,hours,date1,date2;
			var hour1=parseInt(document.getElementById('hour1').value);
			var minute1=parseInt(document.getElementById('minute1').value);
			var hour2=parseInt(document.getElementById('hour2').value);
			var minute2=parseInt(document.getElementById('minute2').value);
	
			var e1 = document.getElementById('amorpm1');
			var time1 = e1.options[e1.selectedIndex].value;
			var e2 = document.getElementById('amorpm2');
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
			
		
					
			var timediff=document.getElementById('timedifference');
			hours=parseInt(time/3600);
			minutes=(time/60)%60;
			timediff.innerHTML=hours+" hours "+minutes+" minutes";
				   
	   }
	
		function	nextdate() 
			{
						
				 var date;
				 date=document.getElementById('date').value;
				 var dat=new Date(date);
				 
				 var hour=parseInt(document.getElementById('hour').value);
				 var minute=parseInt(document.getElementById('minute').value);
				 var intervalyear=document.getElementById('timeintervalyrs').value;
				 var intervalmonth=document.getElementById('timeintervalmonths').value;
				 var intervalhour=document.getElementById('timeintervalhour').value;
				 var intervalminute=document.getElementById('timeintervalminute').value;
				 var intervalday=document.getElementById('timeintervaldays').value;
	
				 var timeresult=document.getElementById('timeresult2');
				
				 var date1=new Date(dat.getFullYear(),dat.getMonth(),dat.getDate(),hour,minute);
				 date1.setFullYear(date1.getFullYear()+parseInt(intervalyear));
				 date1.setMonth(date1.getMonth()+parseInt(intervalmonth));
				 date1.setHours(date1.getHours()+parseInt(intervalhour));
				 date1.setMinutes(date1.getMinutes()+parseInt(intervalminute));
				 date1.setDate(date1.getDate()+parseInt(intervalday));
				 var datestring=date1.toString();
				 timeresult.innerHTML=datestring.substring(0,datestring.indexOf('G'));
			   // timeresult2.innerHTML=date1.getDate()+"/"+date1.getMonth()+"/"+date1.getFullYear()+"  "+date1.getHours()+":"+date1.getMinutes();
			  	// alert(date1.getMinutes()); 			
				 				
						
			}
