<?php

//Declaring error messages variables and initializing it with empty string
$nameErr=$emailErr=$sexErr=$addressErr=$interestErr=$mobilenoErr=$countryErr=$stateErr="";

//Declaring flag variable if flag is 0 then all input fields are valid

$flag=0;


//If request method is post then check input fields if any field is invalid or empty then set flag to 1

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
          
          //Checking if email format is correct
         if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL))
             {
                $emailErr = "Email_is_incorrect";
                $flag=1;
             }
           //if email format is correct then check availability of email
          else
            {

                $conn = new mysqli("localhost", "root", "","subscription");
                $selectquery="SELECT email from formdata where email='$_POST[email]'";
                $result=mysqli_query($conn,$selectquery);
                $numrows=mysqli_num_rows($result);
                if($numrows>0)
                  {
                   $emailErr = "This email is already registered";
                   $flag=1;
                  }
                mysqli_close($conn);
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

        //if flag is 1 then input fields are not valid or empty then echo a json string containing all the error messages
     	if($flag==1)
        {
        $result='{"nameErr":"'.$nameErr.'","mobilenoErr":"'.$mobilenoErr.'","emailErr":"'.$emailErr.'","sexErr":"'.$sexErr.'","interestErr":"'.$interestErr.'","countryErr":"'.$countryErr.'","stateErr":"'.$stateErr.'","addressErr":"'.$addressErr.'","message":""}';
        echo $result;
        }
 }
  //if flag 0 then all fields valid so insert the data to the table
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
        $conn = new mysqli("localhost", "root", "","subscription");  //creating connection object

        // Check connection
        if ($conn->connect_error) 
        {
            die("Connection failed: " . $conn->connect_error);
        }
        $sql1 = "INSERT INTO formdata 
        VALUES ('$name','$sex','$email','$country','$state','$address','$mobileno','$interest','$favorites')";
        if (mysqli_query($conn, $sql1)) 
        {
          echo '{"nameErr":"'.$nameErr.'","mobilenoErr":"'.$mobilenoErr.'","emailErr":"'.$emailErr.'","sexErr":"'.$sexErr.'","interestErr":"'.$interestErr.'","countryErr":"'.$countryErr.'","stateErr":"'.$stateErr.'","addressErr":"'.$addressErr.'","message":"Successfully subscribed"}';

        }
        else
        {
            echo "Error: " . $sql1 . "" . mysqli_error($conn);
        }
      mysqli_close($conn);  //Closing connection

 	}

?>