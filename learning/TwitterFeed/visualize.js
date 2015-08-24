(function(){

var a = performance.now();
 //twitterData is a funciton which receives json data and parses it
 var twitterData=function(jsondata){
            var allTweets=function(jsondata){
                var i,j,tweetsArr=[],tweetObj={},tweetData=jsondata,len=tweetData.length;
                for(i=0;i<len;i++){
                    tweetObj.id=tweetData[i].id;
                    tweetObj.text=tweetData[i].text;
                    tweetObj.retweet_count=tweetData[i].retweet_count;
                    tweetObj.favorite_count=tweetData[i].favorite_count;
                    tweetObj.created_at=tweetData[i].created_at;
                    tweetsArr[i]=tweetObj;
                    tweetObj={};
                }
                return tweetsArr;
            };
            //function for getting all the tweets
            this.getAllTweets=function(){
                return allTweets(jsondata);
            };
        };
    //this function searches for tweets which contains those keywords and returns an object which contains the 
    //result data set and a new data set.New data set does not contain the tweets which is in result data set.
    twitterData.prototype.search=function(keywords,tweets){
            var dataSet=tweets,
            count=dataSet.length,
            i,
            words=keywords.keywords,
            len=words.length,
            text,
            newDataSet=[],
            keywordArr=[],
            j=0,
            keywordsRegex="";
            //Forming a Regular expression pattern from keywords
                for(i=0;i<len;i++){
                    keywordsRegex+=(i==len-1?"\\b"+words[i]+"\\b":"\\b"+words[i]+"\\b|");
                }

            //Loop through the data set and search tweets containing any of those keywords
            for(i=0;i<count;i++){
                text=dataSet[i].text;

                if(keywords.category.toLowerCase()=="others"||text.search(new RegExp(keywordsRegex, "i"))!==-1){
                    
                    keywordArr[j]={};
                    keywordArr[j].text=text;
                    keywordArr[j].created_at=dataSet[i].created_at;
                    keywordArr[j].favorite_count=dataSet[i].favorite_count;
                    keywordArr[j].retweet_count=dataSet[i].retweet_count;
                    keywordArr[j].cateogory=words[0];
                    keywordArr[j].color=keywords.color;
                    j++;
                }
                else{
                    newDataSet.push(dataSet[i]);
                }

            }
            //console.log(keywordArr.length+"  "+newDataSet.length);
            var arr={"dataSet":newDataSet,"keywordArr":keywordArr};
            return arr;
        
    };
    twitterData.prototype.sort=function(tweets,sortBy){
        var temp,
            arr=[],
            i,j,xchanges;
        for(i=0,len=tweets.length;i<len;i++){
            xchanges=0;
            for(j=i+1;j<len;j++){
                if(new Date(tweets[i].created_at).getTime()>=new Date(tweets[j].created_at).getTime()) {
                    temp=tweets[i];
                    tweets[i]=tweets[j];
                    tweets[j]=temp;
                }
            xchanges++;
            }
            if(xchanges===0){
                break;
            }

        }
        return tweets;
    };
    twitterData.prototype.prepareDataSet=function(keywords,tweets){
        var newDataSet={},dataset=[];
            for(var i=0,len=keywords.length;i<len;i++){
                newDataSet=this.search(keywords[i],tweets);
                dataset=dataset.concat(newDataSet.keywordArr);
                tweets=newDataSet.dataSet;
            }
        return dataset;
    };
    twitterData.prototype.max=function(data){
        var max=0,retweet_count;
        for(var i=0,len=data.length;i<len;i++){
            retweet_count=data[i].retweet_count;
            if(max<retweet_count){
                max=retweet_count;
            }
        }
        return max;
    };
    twitterData.prototype.min=function(data){
        var min=99999999999,retweet_count;
        for(var i=0,len=data.length;i<len;i++){
            retweet_count=data[i].retweet_count;
            if(min>retweet_count){
                min=retweet_count;
            }
        }
        return min;
    };
    var keywords=[
                        {
                            category:"KBC",
                            keywords:["KBC"],
                            color:"coral"
                        },
                        {
                            category:"Film",
                            keywords:["film","trailer","movie"],
                            color:"teal"
                        },
                        {
                            category:"Sports",
                            keywords:["sports","kabaddi","football","cricket","tennis","world cup"],
                            color:"red"
                        },
                        {
                            category:"Love",
                            keywords:["love","peace","fun","happiness","friendship"],
                            color:"blue" 
                        },
                        {
                            category:"India",
                            keywords:["India","country","indian"],
                            color:"black" 
                        },
                        {
                            category:"others",
                            keywords:[],
                            color:"aqua"
                        }
    ];
    twitterData.prototype.render=function forceLayout(){
        var tweets=this.getAllTweets(),
            data=this.sort(this.prepareDataSet(keywords,tweets)),
            nodes=[],
            svg = d3.select("#bubblechart")    
                .style({
                    "float":"right"
                })    
                .append("svg")
                .attr("width", data.length)
                .attr("height", data.length),
            w=data.length,h=data.length-150,
            min=this.min(data),
            max=this.max(data);
            scale=d3.scale.linear()         //D3 SCALE FOR SCALING VALUES IN RANGE
                    .domain([min,max])
                    .range([2,14]),
            tick=function tick(e) {                   //TICK FUNCTION
                node.attr("cx", function(d) { return d.x; })
                    .attr("cy", function(d) { return d.y; });
            },
            force=d3.layout.force()         //FORCE LAYOUT ELEMENT
                .nodes(nodes)
                .size([w, h])
                .charge([-11])
                .on("tick",tick),
            node=svg.selectAll("circle"),
            date=d3.select("#time").style({"color":"teal","font-size":"25px","font-family":"courier"}),
            count=0,
            simulate=function simulate(){

                if(count===data.length){
                    clearInterval(timer);
                    return;
                }
                nodes.push(data[count]);
                force.start();

                node=node.data(nodes);
                date.text(data[count].created_at.replace(/[+](0000)/g," "));
                node.enter()
                    .append("circle")
                    .attr("r", function(d){
                        return scale(d.retweet_count);
                    })
                    .style("fill", function(d, i) {
                            return d.color;
                    })
                    .append("svg:title")
                    .text(function(d) { return d.text; });

                
                count++;

            },
            timer=setInterval(simulate,40);
    };

var p=d3.select("#category")
    .attr("width", 400)
    .attr("height", 900)
    .style({"float":"left"});
p.selectAll("p")
    .data(keywords).enter()
    .append("p")
    .text(function(d){
        return d.category;
    })
    .style({
    "background-color": function(d){
        return d.color;
    },
    "width": 180,
    "border-radius":"5px",
    "color":"white",
    "font-size":"20px",
    "font-family":"Trebuchet MS"
});

var obj=new twitterData(tweetData);
obj.render();

var b = performance.now();
console.log('It took ' + (b - a) + ' ms.');

})();