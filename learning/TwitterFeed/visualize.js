(function(){


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
            this.getAllTweets=function(){
                return allTweets(jsondata);
            }
        };
    twitterData.prototype.search=function(keywords,tweets){

            var dataSet=tweets,
            count=dataSet.length,
            i,
            words=keywords.category,
            len=words.length,
            text,
            newDataSet=[],
            keywordArr=[],
            j=0,
            keywordsRegex="";
                for(i=0;i<len;i++){
                    keywordsRegex+=(i==len-1?"\\b"+words[i]+"\\b":"\\b"+words[i]+"\\b|");
                }

           //console.log(dataSet);
            for(i=0;i<count;i++){
                text=dataSet[i].text;

                if(words[0].toLowerCase()=="others"||text.search(new RegExp(keywordsRegex, "i"))!==-1){
                    
                    keywordArr[j]={};
                    keywordArr[j].text=text;
                    keywordArr[j].created_at=dataSet[i].created_at;
                    keywordArr[j].favorite_count=dataSet[i].favorite_count;
                    keywordArr[j].retweet_count=dataSet[i].retweet_count;
                    keywordArr[j].cateogory=words[0];
                    keywordArr[j].color=keywords.color;
                    j++;
                }
                else
                {
                    newDataSet.push(dataSet[i]);
                }

            }
            //console.log(keywordArr.length+"  "+newDataSet.length);
            var arr={"dataSet":newDataSet,"keywordArr":keywordArr}
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
            if(xchanges==0){
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
    }
    twitterData.prototype.render=function forceLayout(){
        console.log(this);
        var tweets=this.getAllTweets(),
            keywords=[
                        {
                            category:["KBC"],
                            color:"coral"
                        },
                        {
                            category:["film","trailer","movie"],
                            color:"teal"
                        },
                        {
                            category:["sports","kabaddi","football","cricket","tennis","world cup"],
                            color:"red"
                        },
                        {
                            category:["love","peace","fun","happiness","friendship"],
                            color:"blue" 
                        },
                        {
                            category:["India","country","indian"],
                            color:"black" 
                        },
                        {
                            category:["others"],
                            color:"aqua"
                        }
                    ],
            data=this.sort(this.prepareDataSet(keywords,tweets)),
            dataset = {
                nodes: data,
                edges: [
                ]
            },
            svg = d3.select("div")
                .append("svg")
                .attr("width", 1700)
                .attr("height", 900),
            w=1700,h=600,
            scale=d3.scale.linear()
                    .domain([1,2000])
                    .range([2,14]),
            force = d3.layout.force()
                         .nodes(dataset.nodes)
                         .size([w, h])
                         .charge([-12])        
                         .start(),
            nodes = svg.selectAll("circle")
            .data(dataset.nodes)
            .enter()
            .append("circle")
            .attr("r", function(d){
                return scale(d.retweet_count);
            })
            .style("fill", function(d, i) {
                    return d.color;
            })
            .call(force.drag);
            nodes.append("svg:title")
            .text(function(d) { return d.text; });
            console.log(data);
        force.on("tick", function() {

            nodes.attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });

        });
    };

var obj=new twitterData(tweetData);
obj.render();






})();