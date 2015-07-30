<?php

session_start();
$_SESSION["buttonclick"]="1";
$_SESSION["interest"]="";
$interests="";
$favorites="";
$flag=0;
if(!empty($_POST["mobileno"]))
{
	$len=strlen($_POST["mobileno"]);
	if($len!=10)
	{
		$_SESSION["mobilenoerr"]="Mobile no is invalid";
		$flag=1;
	}
	else
	{
		$mobileno=$_POST["mobileno"];
		$_SESSION["mobileno"]=$mobileno;
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
		$i=0;
		$count=count($_POST["interest"]);
		 foreach($_POST["interest"] as $value) 
		 {
           $_SESSION["interest"].=$value;
          
           if ($i == $count - 1) 
           		 $interests.=$value;
           else
           	  $interests.=$value.",";
           $i++;
        
			
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
if(!empty($_POST["fav"]))
{
	$i=0;
		$count=count($_POST["fav"]);
		 foreach($_POST["fav"] as $value) 
		 {
          
           if ($i == $count - 1) 
           		 $favorites.=$value;
           else
           	  $favorites.=$value.",";
           $i++;
        }
			
}

  if(!$flag)
  	{

		 // Create connection
		$conn = new mysqli("localhost", "root", "","subscription");

		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		}
		$sql1 = "INSERT INTO formdata 
		VALUES ('$name', '$sex', '$email','$country', '$state', '$address', '$mobileno','$interests','$favorites')";

		if (mysqli_query($conn, $sql1)) 
		{
			
			
			    $_SESSION["name"]=$_SESSION["email"]=$_SESSION["address"]=$_SESSION["mobileno"]=$_SESSION["country"]=$_SESSION["state"]="";
			   
			$_SESSION["message"]="Success";
		 header("Location: index.php");
		}
		else
		{
		    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		    $_SESSION["emailerr"]="Duplicate email";
		   	header("Location: index.php");
		}
 	}
 else
header("Location: index.php");
?>
