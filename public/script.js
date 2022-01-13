// let Btn = document.getElementById('btn');
let URLinput = document.querySelector('.URL-input');
// let select = document.querySelector('.opt');
let serverURL = 'http://localhost:4000';

// Btn.addEventListener('click', () => {
// if (!URLinput.value) {
// alert('Enter YouTube URL');
// } else {
// if (select.value == 'mp3') {
// downloadMp3(URLinput.value);
// } else if (select.value == 'mp4') {
// downloadMp4(URLinput.value);
// }
// }
// });
// var  finalData;
var sttonum;

// console.log(sttonum)
document.querySelector("#btninfo").addEventListener("click", async function () {
   
    // let videoURL = document.querySelector("#videoURL").value.trim();
    // let urlnum = document.getElementById("videoURL").value;
    // urlnum = urlnum.match(/\w+/g);
    // console.log(urlnum);
    // console.log(serverURL);
    // mainfatvhing()
    var area = document.getElementById("videoURL");

    if (area.value=='') {
        alert('Please Enter youtube url' );
        return
    }
    document.getElementById("fatchedview").style.display= "block";
     document.getElementById('btntoshow').style.display="none";
     document.getElementById('massg').style.display= "block"
     document.querySelector('.hidandshow').style.display="block"
    
    // console.log(typeof(area))
    
    var lines = area.value.replace(/\r\n/g, "\n").split("\n").filter(line => line);
    // console.log(lines);
    // var newviews = area.value.replace(/\r\n/g,"\n").split("\n").filter(newviews => newviews);

    document.getElementById("totvid").innerHTML = "TOTAL NUMBER OF VIDEO:-" +' '+ lines.length;
    finalData = [];
    for (const item of lines) {
        const response = await fetch(serverURL + "/videoInfo?videoURL=" + item);
        const resData = await response.json();
        // console.log(resData)
        var viewsreslt = resData.videoDetails.viewCount;
        // for(l=0; l<sttonum; l++){
            // console.log(sttonum[l])
            document.getElementById("fatchedview").value += item +" "+viewsreslt +","+" "+resData.videoDetails.publishDate +'\n';
        
        // };
       finalData.push(viewsreslt);
        
      }
      
       
     
       sttonum = finalData.map(Number);
       if (finalData.length==lines.length) {
        document.getElementById('showrangeses').style.display='block'
        document.getElementById('massg').style.display= "none"
        window.scrollTo(0,document.body.scrollHeight);

     };
     
       
    //   console.log(sttonum);
    //   const fltview = [];
    //   for (k = 0; k < sttonum.length; k ++) {
	// 	// console.log(spltedviews);
    //     if(sttonum[k]>1 && sttonum[k]<10000){
    //             //  console.log(sttonum[k])
    //              fltview.push(sttonum[k]);
                
    //     }
    // }
        
    //   scfun();
    
    // for (i = 0; i < lines.length; i ++) {
    //     // tasks(i);
    //     // }
    //     await fetch(serverURL + "/videoInfo?videoURL=" + lines[i]).then(function (response) {
    //         // var stscode = response.status();
    //         // var rescod = response.status;
    //         // && response.status===200
    //         // console.log(rescod);
    //         // var rescod = response.status;
    //         // console.log(rescod)
    //         // document.getElementById("stscod").InnerHTML = rescod;
    //         return await response.json();

    //     }).then(function (data) {
    //         // console.log(data);
    //         // console.log(data.status);
    //         // document.getElementById("view").innerHTML = data.videoDetails.viewCount;});
    //         var viewsreslt = data.videoDetails.viewCount;
    //         finalData.push(data);
    //         console.log(finalData)

    //         // var bom = [];
    //         // bom.push(viewsreslt);
    //         // // handler(bom);
    //         // console.log(bom);
    //         // for(i = 0; i < lines.length; i++){
    //         // var allviews = [];
    //         // allviews.push(viewsreslt);
    //         // console.log(allviews)
    //         // }
    //         // if (viewsreslt >=1 && viewsreslt<=40000) {
    //         // console.log("between 1 and 40000"+viewsreslt);
    //         // document.getElementById('fistrang').innerHTML= `Views between 1 to 40000=${viewsreslt}` ;
    //         // }
    //         // if (viewsreslt >=40000 && viewsreslt<=50000) {
    //         // console.log("between 40000 and 50000"+viewsreslt);
    //         // document.getElementById('secrange').innerHTML= `Views between 40000 to 50000=${viewsreslt}` ;

    //         // }
    //         // switch (viewsreslt) {
    //         //     case viewsreslt >=1 && viewsreslt<=40000:

    //         //         console.log("between 1 and 40000"+viewsreslt);
    //         //         break;
    //         //     case viewsreslt >=40000 && viewsreslt<=50000:
    //         // console.log("between 40000 and 50000"+viewsreslt);
    //         //         break;
    //         // }


    //         // console.log(viewsreslt)
    //         // document.getElementById("key").value += data.videoDetails.viewCount +",";

    //         document.getElementById("key").value += viewsreslt + ",";
    //     })
    // };
    // setData(finalData);
});



// .replace(/\r\n/g,"\n").split("\n").filter(viewsreslt => viewsreslt)
// + ",";
// var ytviews = document.getElementById("key").value;

// if (ytviews!='') {
// var newviews = ytviews.value.replace(/\r\n/g,"\n").split("\n").filter(newviews => newviews);

// }


// var views= document.getElementById("key").value;
// // var a = "1,2,3,4";
// var b = views.split(',');
// //  console.log(b);
// var c = b.map(Number);
// console.log(c.length)
// switch (viewsreslt) {
// case viewsreslt>1 && viewsreslt<30000:

// console.log(viewsreslt);
// break;
// case 1:
// day = "Monday";
// break;
// case 2:
// day = "Tuesday";
// break;
// case 3:
// day = "Wednesday";
// break;
// case 4:
// day = "Thursday";
// break;
// case 5:
// day = "Friday";
// break;
// case 6:
// day = "Saturday";
// }

// var views= document.getElementById("key").value;
// var convtoaar = viewsss.value.replace(/\r\n/g,"\n").split("\n").filter(line => line);
// console.log(typeof(viewsss));
// var totalvalue = document.getElementById("key").value;
// // var valuestr = parseInt(totalvalue);
// var convtoaar =  totalvalue.value.replace(/\r\n/g,"\n").split("\n").filter(convtoaar => convtoaar)
// console.log(convtoaar);


// function tasks(i){
// setTimeout(function(){
// document.getElementById("key").value += data.videoDetails.keywords[i] +";" + " ";

// };
// }, 10000*i)
// var views= document.getElementById("key").value
// var convtoaar = views.value.replace(/\r\n/g,"\n").split("\n").filter(line => line)
// console.log(convtoaar);


// var viewrs =  document.querySelector('.getview');
// var newviews = viewrs.value.replace(/\r\n/g,"\n").split("\n").filter(newviews => newviews);

// var newviews = []

// function mainfatvhing(){
// //   arr = newviews.value.split('\n')
// console.log(newviews)
// }

// mainfatvhing()
// Additional queries performance.......
// var minval = document.getElementById("minval").value;
// var maxval = document.getElementById("maxval").value;

document.querySelector("#btninfoo").addEventListener("click", function () {
    var minval = document.getElementById("minval").value;
    var maxval = document.getElementById("maxval").value;
    var price = document.getElementById('price').value;
    if (minval==''&&maxval==''&&price=='') {
        alert("Please Enter Minimum, Maximum and Price")
        return
    };
    const fltview = [];
    for (k = 0; k < sttonum.length; k ++) {
        	// console.log(spltedviews);
            if(sttonum[k]>=minval && sttonum[k]<=maxval){
                    //  console.log(sttonum[k])
                     fltview.push(sttonum[k]);
                    
            }
        }
    
document.getElementById('viewsprice').style.display="block"
document.getElementById('rangeview22').innerHTML = "Number of Videos:-"+' '+fltview.length;
document.getElementById('totprice').innerHTML="Amount"+' '+"₹"+fltview.length*price
console.log(fltview.length);
    // var sedata = finalData;
    
    // var colltviews = document.getElementById("key").value;
    // var viewspt = colltviews.split(',');
    // // var spltedviews = viewspt.map(Number);
    // for (k = 0; k < sttonum.length; k ++) {
	// 	// console.log(spltedviews);
    //     if(sttonum[k]>1 && sttonum[k]<20000){
    //              console.log(sttonum[k])
    //     }
        // if (spltedviews[k] >= minval && spltedviews[k] <= maxval) {
        //     document.getElementById("videoof").value = spltedviews[k] + ",";

        //     // var totvid = document.getElementById("videoof").value =spltedviews[k] +"," ;
        //     // var unicvid = totvid.split(',');
        //     // var unicvid3 = unicvid.map(Number);
        //     // console.log(unicvid3.length);
        //     // document.getElementById("numbrofvideo").innerHTML = unicvid3.length-1;

        // }
    // }


});

//    document.getElementById("key").value;
// var newviews = vierws.value.replace(/\r\n/g,"\n").split("\n").filter(newviews => newviews);
// var newviews = document.getElementById("key").value.replace(/\r\n/g,"\n").split("\n").filter(newviews => newviews);

// var a = "1,2,3,4";
//    var b = views.split(',');
//     //  console.log(b);
//       var c = b.map(Number);
// var cremv = c.length - 1;

// var minval = document.getElementById("minval").value;
// var maxval = document.getElementById("maxval").value;


// for (k = 0; k < c.length; k++){
// // console.log(c[k]);
// if (c[k]>=minval && c[k]<=maxval) {
// // var arry = {}
// // var finalnumr = [c[k], c[k]]
// // arry = finalnumr
// // console.log(c[k]);
// var totvid = document.getElementById("videoof").value +=c[k] +"," ;
// //  console.log(b);
// var unicvid = totvid.split(',');
// var unicvid3 = unicvid.map(Number);
// console.log(unicvid3.length);
// // console.log(unicvid)
// // var vidnumm = unicvid3.length-1;
// document.getElementById("numbrofvideo").innerHTML = unicvid3.length-1;


// //   var vidtext = "total"
// //   var fltrvid = document.getElementById("numbrofvideo").value;

// //   if (vidnumm==fltrvid) {
// //   document.getElementById("videoof").value = "";

// //   }
// //   console.log(unicvid3.length-1)
// // length.c

// }


// // var showty = document.getElementById("numbrofvideo").value;
// // console.log(showty)
// // if (showty!=="") {

// // 	document.getElementById("numbrofvideo").value="";
// // }
// // document.getElementById("show").style.display = "block"


// }
// async function custm(){

// }
// var finalnum = delete c";
// console.log(finalnum)
// //  const obj = { a: 4, b: 0.5 , c: 0.35, d: 5 };
//    const max = Math.max.apply(null, Object.values(finalnum));
//    const min = Math.min.apply(null, Object.values(finalnum));
//    console.log(max) // 5
//    console.log(min) // 5

// var cv =c.value.replace(/\r\n/g,"\n").split("\n").filter(cv=>cv);
// console.log(cv);


// }
// fetch(serverURL+"/videoInfo?videoURL="+lines[3]).then(function(response){
// return response.json();
// }).then(function(data){
// console.log(data);
// document.getElementById("view").innerHTML = data.videoDetails.viewCount;
// document.getElementById("imz").src = data.videoDetails.thumbnails[data.videoDetails.thumbnails.length - 1].url;
// document.getElementById("titl").innerHTML = data.videoDetails.title;
// document.getElementById("view").innerHTML = data.videoDetails.viewCount;
// document.getElementById("earn").innerHTML = "$"+data.videoDetails.viewCount/2000;
// document.getElementById("like").innerHTML = data.videoDetails.likes;
// document.getElementById("dislike").innerHTML = data.videoDetails.dislikes;
// document.getElementById("publish").innerHTML = data.videoDetails.uploadDate;
// document.getElementById("disc").value = data.videoDetails.description;
// document.getElementById("subs").innerHTML = data.videoDetails.author.subscriber_count;
// document.getElementById("names").innerHTML = data.videoDetails.author.name;
// document.getElementById("cat").innerHTML = data.videoDetails.category;
// document.getElementById("length").innerHTML = data.videoDetails.lengthSeconds +" "+"second";
// for (i = 0; i < data.videoDetails.keywords.length; i++)
// document.getElementById("key").value += data.videoDetails.keywords[i] +";" + " ";


// async function downloadMp3(query) {
// const res = await fetch(`${serverURL}/downloadmp3?url=${query}`);
// if(res.status == 200) {
// var a = document.createElement('a');
// a.href = `${serverURL}/downloadmp3?url=${query}`;
// a.setAttribute('download', '');
// a.click();
// } else if(res.status == 400) {
// alert("Invalid url");
// }
// }

// async function downloadMp4(query) {
// const res = await fetch(`${serverURL}/downloadmp4?url=${query}`);
// if(res.status == 200) {
// var a = document.createElement('a');
// a.href = `${serverURL}/downloadmp4?url=${query}`;
// a.setAttribute('download', '');
// a.click();
// } else if(res.status == 400) {
// alert('Invalid url');
// }
// }
