<?php

$conn = new mysqli("localhost", "root", "","subscription");

		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		}
	if(isset($_POST["edit"]))
		{
			$editquery="UPDATE formdata SET name='$_POST[name]',sex='$_POST[sex]',email='$_POST[email]',country='$_POST[country]',
			state='$_POST[state]',address='$_POST[address]',mobileno='$_POST[mobileno]',interest='$_POST[interest]',favorites='$_POST[favorites]' where email='$_POST[email]'";                              
			mysqli_query($conn,$editquery);
		}
	if(isset($_POST["delete"]))
		{
			$deletequery="DELETE from formdata where email='$_POST[email]'";
			mysqli_query($conn,$deletequery);
		}

$data1=mysqli_query($conn,"Select * from formdata");

echo "<h1> Subscriber details </h1>";
echo "<table style='border:2px solid black;width:200;border-radius: 10px;
    color: blueviolet;     margin: 40px 40px 40px 0px; '>
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
		echo "<form action='EditAndDelete.php' method='post'>";
		echo "<tr>";
		echo "<td>";
		echo "<input type='text' name='name' value='". $result['name']."'";
		echo "</td>";
		echo "<td>";
		echo "<input type='text' name='sex' value='". $result['sex']."'>";
		echo "</td>";
		echo "<td>";
		echo "<input type='text' name='email' value='". $result['email']."'>";
		echo "</td>";
		echo "<td>";
		echo "<input type='text' name='country' value='". $result['country']."'>";
		echo "</td>";
		echo "<td>";
		echo "<input type='text' name='state' value='". $result['state']."'>";
		echo "</td>";
		echo "<td>";
		echo "<input type='text' name='address' value='". $result['address']."'>";
		echo "</td>";
		echo "<td>";
		echo "<input type='text' name='mobileno' value='". $result['mobileno']."'>";
		echo "</td>";
		echo "<td>";
		echo "<input type='text' name='interest' value='". $result['interest']."'>";
		echo "</td>";
		echo "<td>";
		echo "<input type='text' name='favorites' value='". $result['favorites']."'>";
		echo "</td>";
		echo "<td>";
		echo "<input type='submit' name='edit' value='edit'>";
		echo "</td>";
		echo "<td>";
		echo "<input type='submit' name='delete' value='delete'>";
		echo "</td>";
		echo "</tr>";
		echo "</form>";

	}

?>
