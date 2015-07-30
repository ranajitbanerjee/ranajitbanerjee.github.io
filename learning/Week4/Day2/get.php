<?php

session_start();
$_SESSION["buttonclick"]="1";
$subinterest="";
$interest="";
$_SESSION["interest"]="";
if(!empty($_POST["mobileno"]))
{
$mobileno=$_POST["mobileno"];
$len=strlen($mobileno);
if($len!=10)
{
	$_SESSION["mobilenoerr"]="Mobile no is invalid";
	$_SESSION["mobileno"]=$mobileno;
	$flag=1;
}
}
else
{
	$_SESSION["mobilenoerr"]="*Required";
	$flag=1;
}
if(empty($_POST["email"]))
{
	
 $_SESSION["emailerr"] = "*Required";
  $flag=1; 
}
else
{
	if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) 
	{
	  $_SESSION["emailerr"] = "Invalid email format"; 
	 $flag=1;
	}
	$email=$_POST["email"];
	 $_SESSION["email"]=$email;
}
$str="*Required";
if(empty($_POST["name"]))
{
	$_SESSION["nameerr"]=$str;
	$flag=1;
}
else
{
	$name=$_POST["name"];
	$_SESSION["name"]=$name;
}
if($_POST["country"]=='select')
	{
	$_SESSION["countryerr"]=$str;
	$flag=1;
	}
else
{

$country=$_POST["country"];
 $_SESSION["country"]=$country;
}
if(empty($_POST["state"]))
	{
	$_SESSION["stateerr"]=$str;
	$flag=1;
	}
else
{
	 $state=$_POST["state"];
	 $_SESSION["state"]=$state;
}
if(empty($_POST["interest"]))
	{
	$_SESSION["interesterr"]=$str;
	$flag=1;
	}
else
	{
		 foreach($_POST["interest"] as $value) 
		 {
           
   		   $interest.=$value;
   		   $_SESSION["interest"].=$value;
   		   echo $_SESSION["interest"];
   		 }
   	}
if(empty($_POST["address"]))
	{
	$_SESSION["addresserr"]=$str;
	$flag=1;
	}
else
{
	$address=$_POST["address"];
 $_SESSION["address"]=$address;
}
if(empty($_POST["sex"]))
	{
	$_SESSION["sexerr"]=$str;
 	$flag=1;
 	}
 else
 {
 	$sex=$_POST["sex"];
 	 $_SESSION["sex"]=$sex;
 }
  if(!empty($_POST["fs"]))
  {
    foreach ($_POST["fs"] as $value) 
    {
    	$subinterest.=$value;
    }

  }

 
  if(!$flag)
  	{
  		$csvdata="\nName:".$name."\nemail:".$email."\nsex:".$sex."\nmobileno:".$mobileno."\naddress:".$address.
  		"\nCountry:".$country."\nState:".$state."\nInterest ".$interest." \nSubInterest ".$subinterest;
  		
        
	$fp = fopen("formdata.csv","a") or die("Unable to open file!");
	if($fp)
	{
		fwrite($fp,$csvdata); 
        fclose($fp); 
	}
$_SESSION["mobileno"]=$_SESSION["email"]=$_SESSION["sex"]=$_SESSION["country"]=$_SESSION["state"]=$_SESSION["email"]=$_SESSION["name"]=$_SESSION["address"]="";
 	$_SESSION["submitted"]="1";
 	}
header("Location: index.php");
?>