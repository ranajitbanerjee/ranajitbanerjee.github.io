  var desc=[];
    desc[0]="NEWS INFORMATION";
    desc[1]="NEWS SUBSCRIPTION";
    desc[2]="HOTEL BOOKING SYSTEM";
    desc[3]="HOSPITAL MANAGEMENT SYSTEM";
    desc[4]="GAS BOOKING SYSTEM";
    desc[5]="RAILWAY TICKET BOOKING";
    var imageid,modalbox;
function show(workid)
    {
    	   imageid=workid;
    	modalbox=document.getElementById('modal');
    	
        modalbox.style.visibility = (modalbox.style.visibility == "visible") ? "hidden" : "visible";
        setcontent(workid);

    }
    function setcontent(workid)
    {
    	
    	var image=document.getElementById('innerbox');
        var descriptionbox=document.getElementById('description');
    	if(workid=='left'&&imageid!=1)
              imageid--;
    	if(workid=='right'&&imageid!=6)
    		  imageid++;
    	var imageurl="url('images/"+imageid+".png')";
    	image.style.backgroundImage=imageurl;
        image.style.backgroundSize="cover";
        image.style.backgroundRepeat="no-repeat";
        descriptionbox.innerHTML=desc[imageid-1];
     
     }
     function hide()
     {
     	 modalbox.style.visibility = "hidden";
     }