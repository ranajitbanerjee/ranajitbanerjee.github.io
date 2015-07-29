<!DOCTYPE html>
<html>
<?php
    session_start();

?>
<head>
	<title>Basic css assignment</title>
	<link href="style.css" rel="stylesheet" type="text/css">
	
</head>

<body <?php if(isset($_SESSION["buttonclick"])||isset($_SESSION["submitted"])) echo "onload=show('tab2')";  ?>>

    <div>
        <div class="tabs">
            <ul class="tab-links">
                <li class="active" id="active">
                    <a href="#tab1" onclick="show('tab1')" id="tab1">News</a>
                </li>

                <li class="tab2">
                    <a href="#tab2" onclick="show('tab2')" id="tab2">Subscribe</a>
                </li>
            </ul>
        </div>

        <div class="content">
            <div class="box">
                <div class="cont">
                    <h1>Welcome</h1>

                    <p class="description">Simple and Effective Angularjs Bindings for Fusioncharts Javascript Charting library.Simple and 		            Effective Angularjs Bindings for Fusioncharts Javascript Charting library.</p>

                    <p class="p3">AngularJs Binding for Fusioncharts Javascript Charting Library</p>
                </div>
            </div>
           
            <div class="box">
                <div class="cont">
                <h1>Latest News</h1><img alt="Tim cook image" height="210px" src="image.jpg" width="370px">
		</div>

                
            </div>
		 <h4 class="learnmore"><a href="#learnmore">LEARN MORE</a></h4>
            </div>

	<div id="subscribe" >
		<div class="form" id="form1">
		
		 <form id="form1" action="get.php" method="post" formtarget="_self">
		 <div class=innerdiv1Inside id="innerleft">
                <h2>Subscription Form</h2>
                <table width="270" height="200" >
                        <tr><td>Name</td><td><input type="text" id="name" name="name" value=<?php if(isset($_SESSION["name"])) echo $_SESSION["name"]; ?> >
                        <?php if(isset($_SESSION["nameerr"])) echo $_SESSION["nameerr"]; ?>
                        </td></tr>
                        <tr><td>Email</td><td><input type="text" id="email" name="email" value=<?php if(isset($_SESSION["email"])) echo $_SESSION["email"];?> ><?php if(isset($_SESSION["emailerr"])) echo $_SESSION["emailerr"]; ?> </td></tr>
                        <tr><td>MobileNum</td><td><input type="text" id="phno" name="mobileno" value=<?php if(isset($_SESSION["mobileno"])) echo $_SESSION["mobileno"]; ?>><?php if(isset($_SESSION["mobilenoerr"])) echo $_SESSION["mobilenoerr"]; ?> </span></td></tr>
                        <tr><td>Sex</td><td><input type="radio" id="sex" value="male" name="sex" <?php if(isset($_SESSION["sex"])){ if($_SESSION["sex"]=="male") echo "checked"; }?>>Male<input type="radio" name="sex" id="sex" value="female" <?php if(isset($_SESSION["sex"])){ if($_SESSION["sex"]=="female") echo "checked"; }?>>Female 
                            <?php if(isset($_SESSION["sexerr"])) echo $_SESSION["sexerr"]; ?>
                        </td></tr>
                        <tr><td>Interest</td>
                        <td><input type="checkbox" name="interest" value="football" onclick="selection(this)">Sports
                        <input type="checkbox" name="interest" value="movie" onclick="selection(this)">Movie
                        <input type="checkbox" name="interest" value="reading" onclick="selection(this)">Reading
                         <?php if(isset($_SESSION["interesterr"])) echo $_SESSION["interesterr"]; ?>   

                        </td></tr>
                </table>
            </div>
            <div class=innerdiv1Inside id="innerright">
                
                <table width="270" height="170" >
                        
                        <tr><td>Country</td><td><select id="country" name="country" value="" onchange="stateenable()">
                                              <option value="select" >Select</option>
                                              <option value="india" <?php  if(isset($_SESSION["country"])) {if($_SESSION["country"]=="india") {echo "selected"; }} ?>>India</option>
                                              <option value="usa"<?php if(isset($_SESSION["country"])) { if($_SESSION["country"]=="usa") { echo "selected";}}?> >USA</option>
                                            </select>
                                            <?php if(isset($_SESSION["countryerr"])) echo $_SESSION["countryerr"]; ?>  
                                            </td></tr>

                        <tr><td>State</td><td><select id="state" name="state">
                                           
                                              
                                            </select>
                                            <?php if(isset($_SESSION["stateerr"])) echo $_SESSION["stateerr"]; ?>  
                                            </td></tr>
                        <tr><td>Address</td><td><textarea rows='10' id="address" name="address"><?php if(isset($_SESSION["address"])) echo $_SESSION["address"]; ?></textarea>
                        <span><?php if(isset($_SESSION["addresserr"])) echo $_SESSION["addresserr"]; ?>
                        </td></tr>
                </table>
            </div>
			<button type="submit" id="subscribebutton">SUBSCRIBE</button>
			<button type="reset" id="resetbutton">RESET</button>
		    <?php
                    if(isset($_SESSION["submitted"]))
                    {
                        echo "<p>Succesfully submitted the form</p>";
                    }
            ?>
		</div>			
	</div>	
	<div class="model" id="model" >
            <div class=selectinterest id="football">
                    <h2>SELECT SPORTS</h2>
                        <input type="checkbox" name="fs" value="Messi">Messi
                        <input type="checkbox" name="fs" value="Ronaldo">Ronaldo
                        <input type="checkbox" name="fs" value="Pele">Pele
                        <input type="checkbox" name="fs" value="Xavi">Xavi
                        <input type="checkbox" name="fs" value="Iniesta">Iniesta
                        <input type="checkbox" name="fs" value="Roonie">Roonie
                     
                     <input type="button" class=ok value="OK" onclick="hide()"></input>
            </div>
            <div class=selectinterest id="movie">
                    <h2>SELECT GENRE</h2>
                        <input type="checkbox" name="fs" value="Romantic">Romantic
                        <input type="checkbox" name="fs" value="Thriller">Thriller
                        <input type="checkbox" name="fs" value="Classic">Classic
                        <input type="checkbox" name="fs" value="Action">Action
                        <input type="checkbox" name="fs" value="Sciencefiction">Sciencefiction
                        <input type="checkbox" name="fs" value="Historical">Historical
                     <input type="button" class=ok value="OK" onclick="hide()"></input>
            </div>
             <div class=selectinterest id="reading">
                    <h2>SELECT GENRE</h2>
                    <input type="checkbox" name="fs" value="satire">Satire
                        <input type="checkbox" name="fs" value="fiction">Fiction
                        <input type="checkbox" name="fs" value="guide">Guide
                        <input type="checkbox" name="fs" value="travel">Travel
                        <input type="checkbox" name="fs" value="drama">Drama
                        <input type="checkbox" name="fs" value="others">Others
                    
                     <input type="button" class=ok value="OK" onclick="hide()"></input>
            </div>
                
    </div>
    </form>
    </div>
<?php
    session_unset();

?>
</body>
<script src="script.js"></script>
</html>
