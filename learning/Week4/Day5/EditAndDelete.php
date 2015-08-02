<html>
	<head>
		<script type="text/javascript" src="modify.js"></script>
		<link href="sty.css" rel="stylesheet" type="text/css">
	</head>
<?php
$conn = new mysqli("localhost", "root", "","subscription");

		// Check connection
		if ($conn->connect_error) 
		{
		    die("Connection failed: " . $conn->connect_error);
		}

else
	{
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
				echo "<td>"."<input type='button' name='edit' value='edit' onclick='editdata(this)'>"."</td>";
				echo "<td>"."<input type='button' name='delete' value='delete' onclick='editdata(this)''>"."</td>";
				echo "</form>";
				echo "</tr>";
				

			}
			echo "</table>";
	}
?>

</html>