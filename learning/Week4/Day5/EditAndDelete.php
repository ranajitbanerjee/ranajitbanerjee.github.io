

<?php

$conn;

		if(isset($_POST["operation"]))
					{
						if($_POST["operation"]=='edit')
							{
								editdata();
							}
						if($_POST["operation"]=='delete')
							{
								deletedata();
							}
					}
		else
		{
			fetchdata();
		}
		

function editdata()
{
	if(connectdb())
		$conn=connectdb();
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
		mysqli_close($conn);
}

function connectdb()
{
	$GLOBALS['conn'] = new mysqli("localhost", "root", "","subscription");

		// Check connection
	if ($GLOBALS['conn']->connect_error) 
		{
		    return 0;
		}
	else return $GLOBALS['conn'];
}
function deletedata()
{
	if(connectdb())
		$conn=connectdb();
	$deletequery="DELETE from formdata where email='$_POST[email]'";
											if(mysqli_query($conn,$deletequery))
											{
												echo '{"message":"Successfully deleted"}';
											}		
	mysqli_close($conn);
}

function fetchdata()
	{
	if(connectdb())
		$conn=connectdb();
	echo  "<html><head><script type=\"text/javascript\" src=\"script.js\"></script>
		<link href=\"editpage.css\" rel=\"stylesheet\" type=\"text/css\">
		</head>";
		$data1=mysqli_query($conn,"Select * from formdata");

		echo "<h1> Subscriber details </h1>";
		echo "<h2 id='message'></h2>";
		echo "<table border=1 width=100>
		<tr>
		<th>Name</th>
		<th>Sex</th>
		<th>Email</th>
		<th>Country</th>
		<th>State</th>
		<th>Address</th>
		<th>Mobileno</th>
		<th>Interests</th>
		<th>Favorites</th>
		<th>EDIT</th>
		<th>Delete</th>
		</tr>";
		while ($result=mysqli_fetch_array($data1)) 
			{
				
				echo "<tr >";
				echo "<form method='post' style='width:200px'>";
				echo "<td>"."<input type='text' name='name' value='". $result['name']."'></td>";
				echo "<td>"."<input type='text' name='sex' value='". $result['sex']."'></td>";
				
				echo "<td>"."<input type='text' name='email' value='". $result['email']."'></td>";
				echo "<td>"."<input type='text' name='country' value='". $result['country']."'></td>";
				
				echo "<td>"."<input type='text' name='state' value='". $result['state']."'></td>";
				echo "<td>"."<input type='text' name='address' value='". $result['address']."'></td>";
				
				echo "<td>"."<input type='text' name='mobileno' value='". $result['mobileno']."'></td>";
				echo "<td>"."<input type='text' name='interests' value='". $result['interest']."'></td>";
				
				echo "<td>"."<input type='text' name='favorites' value='". $result['favorites']."'></td>";
				echo "<td>"."<input type='button' name='edit' value='edit' onclick='modifydata(this)'>"."</td>";
				echo "<td>"."<input type='button' name='delete' value='delete' onclick='modifydata(this)''>"."</td>";
				echo "</form>";
				echo "</tr>";
				

			}
			echo "</table>";
		echo "</html>";
	mysqli_close($conn);
	}
?>

