<?php

session_start();
$_SESSION["buttonclick"]="1";
$mobileno=$_POST["mobileno"];
$email=$_POST["email"];
$name=$_POST["name"];
$country=$_POST["country"];
$interest=$_POST["interest"];
$sex=$_POST["sex"];
$address=$_POST["address"];
$state=$_POST["state"];
$subinterest=$_POST["fs"];
$len=strlen($mobileno);
if($len!=10)
{
	$_SESSION["mobilenoerr"]="Mobile no is invalid";
	$flag=1;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $_SESSION["emailerr"] = "Invalid email format"; 
  $flag=1;
}
$str="*Required";
if(empty($name))
{
	$_SESSION["nameerr"]=$str;
	$flag=1;
}
if($country=='select')
	{
	$_SESSION["countryerr"]=$str;
	$flag=1;
	}
if($state=='select'||empty($state))
	{
	$_SESSION["stateerr"]=$str;
	$flag=1;
	}
if(empty($interest))
	{
	$_SESSION["interesterr"]=$str;
	$flag=1;
	}
if(empty($address))
	{
	$_SESSION["addresserr"]=$str;
	$flag=1;
	}
if(empty($sex))
	{
	$_SESSION["sexerr"]=$str;
 	$flag=1;
 	}
   
  $_SESSION["mobileno"]=$mobileno;
  $_SESSION["email"]=$email;
  $_SESSION["sex"]=$sex;
  $_SESSION["country"]=$country;
  $_SESSION["state"]=$state;
  $_SESSION["email"]=$email;
  $_SESSION["name"]=$name;
  $_SESSION["address"]=$address;
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