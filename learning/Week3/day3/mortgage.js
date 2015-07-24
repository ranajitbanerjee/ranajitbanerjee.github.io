function calculateemi()
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