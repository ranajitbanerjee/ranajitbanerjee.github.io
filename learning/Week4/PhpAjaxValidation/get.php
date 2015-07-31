<?php


$nameErr=$emailErr=$sexErr=$addressErr=$interestErr=$mobilenoErr=$countryErr=$stateErr="";
$flag=0;


 if($_SERVER["REQUEST_METHOD"]=='POST')
 {
 	if(empty($_POST["name"]))
 	{
 		$nameErr="*Name Required";
 		$flag=1;
 	}
 	if(empty($_POST["email"]))
 	{
 		$emailErr="*Email Required";
 		$flag=1;
 	}
 	else 
 	{
      
     if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL))
         {
          $emailErr = "Email_is_incorrect";
          $flag=1;
         }
    }

 	if(empty($_POST["sexvalue"]))
 	{

 		$sexErr="*Sex Required";
 		$flag=1;

 	}
    
 	if(empty($_POST["mobileno"]))
 	{
 		$mobilenoErr="*Mobileno Required";
 		$flag=1;
 	}

 	else
 	{
 		if(strlen($_POST["mobileno"])!=10)
 		{
 			$mobilenoErr="Mobiie no is invalid";
 			$flag=1;
 		}
 	}
 	if($_POST["country"]=='select')
 	{
 		$countryErr="*Country Required";
 		$flag=1;
 	}
 	if(empty($_POST["state"]))
 	{
 		$stateErr="*State Required";
 		$flag=1;
 	}
 	if(empty($_POST["address"]))
 	{
 		$addressErr="*Address Required";
 		$flag=1;
 	}
 	if(empty($_POST["interests"]))
 	{
 		$interestErr="*Interest Required";
 		$flag=1;
 	}
 	if($flag==1)
 	{
 	 $result='{"nameErr":"'.$nameErr.'","mobilenoErr":"'.$mobilenoErr.'","emailErr":"'.$emailErr.'","sexErr":"'.$sexErr.'","interestErr":"'.$interestErr.'","countryErr":"'.$countryErr.'","stateErr":"'.$stateErr.'","addressErr":"'.$addressErr.'"}';
    echo $result;
 	}
 }

  if($flag==0)
  	{
  		$csvdata="\nName:".$_POST["name"]."\nemail:".$_POST["email"]."\nsex:".$_POST["sexvalue"]."\nmobileno:".$_POST["mobileno"]."\naddress:".$_POST["address"].
  		"\nCountry:".$_POST["country"]."\nState:".$_POST["state"]."\nInterests ".$_POST["interests"]."\nFavorites ".$_POST["favorites"];
  		
        
	$fp = fopen("formdata.csv","a") or die("Unable to open file!");
		if($fp)
		{
			fwrite($fp,$csvdata); 
	        fclose($fp); 
		}
	echo '{"message":"SUCCESSFULLY SUBSCRIBED"}';
 	}
?>