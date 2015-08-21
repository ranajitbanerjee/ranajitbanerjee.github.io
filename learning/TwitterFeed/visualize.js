(function(){
      var initRaphael=function(){
        var tweetsPerMonth={"Jan":{},"Feb":{},"Mar":{},"Apr":{},"May":{},"Jun":{},"Jul":{},"Sep":{},"Oct":{},"Nov":{},"Dec":{}},
            fetchTweetCounts=function(){
                var i,tweets=twitterData.getTweetList(),count=tweets.length,month,obj=tweetsPerMonth;
                for(i=0;i<count;i++){
                    month=tweets[i].created_at.substring(4,7);
                    if(month in obj){
                        obj[month].count=isNaN(obj[month].count)?0:obj[month].count+1;
                        
                    }
                }
                tweetsPerMonth=obj;
            },
            toggle=false,
            paper = Raphael(0,0,1000,1000),
            rectangle=[{
            type: "rect",
            x: 10,
            y: 10,
            width: 50,
            height: 50,
            fill: "#fc0"
            }],
            x=20,
            y=250,
            value;
        fetchTweetCounts();
        console.log(tweetsPerMonth);
        paper.add(rectangle);
        paper.path("M 70 30 V 500"); 
        paper.path("M 70 500 H 600");
        for(i in tweetsPerMonth){
            value=tweetsPerMonth[i].count;
            console.log(i+" "+value);
         
            paper.rect(x+=50,500-value,40,value).
            attr({fill:'red',cursor:'pointer'}).
            data("i","No.of tweets "+value).hover(function(){
            var g=this.attr("title",this.data("i"));
            g.attr({fill:'blue'});
            }).mouseout(function(){
            this.attr("fill",'red');
            });
            paper.text(x+20,510,i);
        }
        /*var paper = new Raphael(document.body, 320, 200);
        console.log(tweetsData.count);
        // Creates circle at x = 50, y = 40, with radius 10
        var circle = paper.circle(50, 40, 10);
        // Sets the fill attribute of the circle to red (#f00)
        circle.attr("fill", "#f00");

        // Sets the stroke attribute of the circle to white
        circle.attr("stroke", "#fff");*/
      };
      var twitterData={
            getTweetList:function(){
                var i,j,tweetsArr=[],tweetObj={};
                for(i=0;i<tweetData.length;i++){
                tweetObj.id=tweetData[i].id;
                tweetObj.text=tweetData[i].text;
                tweetObj.retweet_count=tweetData[i].retweet_count;
                tweetObj.favorite_count=tweetData[i].favorite_count;
                tweetObj.created_at=tweetData[i].created_at;
                tweetsArr[i]=tweetObj;
                tweetObj={};
                }
                return tweetsArr;
            },
            getUserInfo:function(){
                var i=0,userObj={};
                userObj.id=tweetData[i].user.id;
                userObj.followers_count=tweetData[i].user.followers_count;
                userObj.location=tweetData[i].user.location;
                userObj.profile_image=tweetData[i].user.profile_image_url_https;
                userObj.description=tweetData[i].user.description;
                userObj.friends_count=tweetData[i].user.friends_count;
                userObj.created_at=tweetData[i].user.created_at;  
                userObj.name=tweetData[i].user.name;  
                return userObj;

            },
            search:function(){
                var data=twitterData.getTweetList(),count=data.length,i,
                text,
                keywordArr=[{}],j=0,keywordsRegex="";
                for(i=0,len=arguments[0].length;i<len;i++){
                    keywordsRegex+=(i==len-1?"\\b"+arguments[0][i]+"\\b":"\\b"+arguments[0][i]+"\\b|");
                }
                for(i=0;i<count;i++){
                    text=data[i].text;

                    if(text.search(new RegExp(keywordsRegex, "i"))!==-1){
                        
                        keywordArr[j]={};
                        keywordArr[j].text=text;
                        keywordArr[j].created_at=data[i].created_at;
                        keywordArr[j].favorite_count=data[i].favorite_count;
                        keywordArr[j].retweet_count=data[i].retweet_count;
                        
                        j++;
                    }
                }
                return keywordArr;
            }
        };
    
  //initRaphael();
    var circles=[{
            type:"circle",
            cx:200,
            cy:200,
            r:5
        }];
  console.log(twitterData.search(["KBC"]));
  var createCircles=function(){
    console.log(arguments[0]);
    var paper = Raphael(0,0,1000,1000),
        spacing,
        attributes={fill:arguments[1],stroke:"none"};
        var draw=function (tweetData){
            for(var i=0,len=tweetData.length;i<len;i++)
            {
            if((circles[0].cx+circles[0].r)>900){
                circles[0].cx=200;
                circles[0].cy+=100;
            }
            console.log(circles[0].cx);
            spacing=circles[0].r;
            circles[0].r=(tweetData[i].retweet_count/2000)*(70-2)+2;
            circles[0].cx+=circles[0].r+spacing+5;
           
            paper.add(circles).attr(attributes).
            data("value",tweetData[i].text+" cx:"+circles[0].cx+" Retweets"+tweetData[i].retweet_count).hover(function(){
            this.attr({"title":this.data("value")});
            });
        }
        
        
      
    };
    var tweetDat=twitterData.search([arguments[0]]);
    draw(tweetDat);
    
    
  };
  createCircles("KBC","aqua");
  createCircles("film","black");
  createCircles("india","red");



















})();