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
  		  $name=$_POST["name"];
        $sex=$_POST["sexvalue"];
        $email=$_POST["email"];
        $country=$_POST["country"];
         $state=$_POST["state"];
         $address=$_POST["address"];
         $mobileno=$_POST["mobileno"];
          $interest= $_POST["interests"];
          $favorites=$_POST["favorites"];
        $conn = new mysqli("localhost", "root", "","subscription");

        // Check connection
        if ($conn->connect_error) 
        {
            die("Connection failed: " . $conn->connect_error);
        }
        $sql1 = "INSERT INTO formdata 
        VALUES ('$name','$sex','$email','$country','$state','$address','$mobileno','$interest','$favorites')";
        if (mysqli_query($conn, $sql1)) 
        {
          echo '{"message":"SUCCESSFULLY SUBSCRIBED"}';

        }
        else
        {
            echo "Error: " . $sql1 . "<br>" . mysqli_error($conn);
        }
 	}
?>