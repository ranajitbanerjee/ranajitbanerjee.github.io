<!DOCTYPE html>
<html>
<head>
	<title>Basic css assignment</title>
	<link href="style.css" rel="stylesheet" type="text/css">
	
</head>

<body>
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
		<div class="form" id="form">
		
		 <form id="form1" method="post">
		 <div class=innerdiv1Inside id="innerleft">
                <h2>Subscription Form</h2>
                <table width="270" height="200" >
                        <tr>
                            <td>Name</td>
                            <td><input type="text" id="name" name="name"> <span id="nameErr"></span></td>
                        </tr>
                        <tr><td>Email</td><td><input type="text" id="email" name="email" >
                            <span id="emailErr"></span></td></tr>
                         </td></tr>
                        <tr><td>MobileNum</td>
                        <td>
                        <input type="text" id="mobileno" name="mobileno" > 
                         <span id="mobilenoErr"></span>
                        </td>
                       
                        <tr><td>Sex</td><td><input type="radio" id="sex" value="female" name="sex">Male<input type="radio" id="sex" value="male" name="sex">Female
                        <span id="sexErr"></span></td></tr>
                        <tr><td>Interest</td>
                        <td><input type="checkbox" name="interest" value="football"  onclick="selection(this)">Football
                        <input type="checkbox" name="interest" value="Movie"  onclick="selection(this)">Movie
                        <input type="checkbox" name="interest" value="Reading" onclick="selection(this)">Reading
                        <span id="interestErr"></span></td></tr>

                        </td></tr>
                </table>
            </div>
            <div class=innerdiv1Inside id="innerright">
                
                <table width="270" height="170" >
                
                        <tr><td>Country</td><td>
                                            <select id="country" name="country" onchange="stateenable()">
                                              <option value="select" >Select</option>
                                              <option value="india" >India</option>
                                              <option value="usa" >USA</option>
                                            </select>
                                            <span id="countryErr"></span>
                                            </td></tr>

                                            <tr><td>State</td><td>
                                            <select id="state" name="state" value="">
                                           
                                              
                                            </select>
                                             <span id="stateErr"></span></td></tr>
                                            </td></tr>
                        <tr><td>Address</td><td><textarea rows='10' id="address" name="address"></textarea>
                         <span id="addressErr"></span>     <p id="message"></p></td>

                         </tr>
                        </td>

                        </tr>
                </table>
            </div>

			<button type="button" id="subscribebutton" onclick="subscribe()">SUBSCRIBE</button>
			<button type="reset" id="resetbutton" onclick="resetall()">RESET</button>
		</div>			
	</div>	
	<div class="model" id="model">
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
            <div class=selectinterest id="Movie">
                    <h2>SELECT GENRE</h2>
                        <input type="checkbox" name="fs" value="Romantic">Romantic
                        <input type="checkbox" name="fs" value="Thriller">Thriller
                        <input type="checkbox" name="fs" value="Classic">Classic
                        <input type="checkbox" name="fs" value="Action">Action
                        <input type="checkbox" name="fs" value="Sciencefiction">Sciencefiction
                        <input type="checkbox" name="fs" value="Historical">Historical
                     <input type="button" class=ok value="OK" onclick="hide()"></input>
            </div>
             <div class=selectinterest id="Reading">
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

</body>
<script src="script.js"></script>
</html>
