<?php

$conn = new mysqli("localhost", "root", "","subscription");
		// Check connection
		if ($conn->connect_error) 
		{
		    die("Connection failed: " . $conn->connect_error);
		}

if(isset($_POST["operation"]))
	{
		if($_POST["operation"]=='edit')
			{
			$editquery="UPDATE formdata SET name='$_POST[name]',sex='$_POST[sex]',email='$_POST[email]',country='$_POST[country]',
						state='$_POST[state]',address='$_POST[address]',mobileno='$_POST[mobileno]',interest='$_POST[interests]',favorites='$_POST[favorites]' where email='$_POST[email]'";                              
						
						if(mysqli_query($conn,$editquery))
						{
							echo '{"message":"Successfully updated"}';
							
						}
						else
						{
							echo "Error";
						}
			}
		if($_POST["operation"]=='delete')

			{

				$deletequery="DELETE from formdata where email='$_POST[email]'";
							if(mysqli_query($conn,$deletequery))
							{
								echo '{"message":"Successfully deleted"}';
							}		
			}
	}
	mysqli_close($conn);

?>