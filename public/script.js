// All codes is written by Ashutosh kumar karn(A teen Programmer!)
let URLinput = document.querySelector('.URL-input');
let serverURL = 'http://localhost:4000';
var sttonum;document.querySelector("#btninfo").addEventListener("click", async function () {
var area = document.getElementById("videoURL");
if (area.value=='') {alert('Please Enter youtube url' );return}
document.getElementById("fatchedview").style.display= "block";
document.getElementById('btntoshow').style.display="none";
document.getElementById('massg').style.display= "block"
document.querySelector('.hidandshow').style.display="block"
var lines = area.value.replace(/\r\n/g, "\n").split("\n").filter(line => line);
document.getElementById("totvid").innerHTML = "TOTAL NUMBER OF VIDEOS:-" +' '+ `<b style="color:red" >${lines.length}</b>`;
finalData = [];for (const item of lines) {
const response = await fetch(serverURL + "/videoInfo?videoURL=" + item);
const resData = await response.json();
var viewsreslt = resData.videoDetails.viewCount;
document.getElementById("fatchedview").innerHTML += `<span style="color:#3fff00; font-size:18px;" >${resData.videoDetails.ownerChannelName}</span>`+"," +" "+ `<a href="${item}" target="_blank">${item}</a>` +","+" "+ `<span style="color:white; font-size:18px;" >(${numeral(viewsreslt).format('0.0a')})</span>` +","+" "+ `<b style="color:yellow">${resData.videoDetails.publishDate}</b>` +'\n';
finalData.push(viewsreslt);}
sttonum = finalData.map(Number);
if (finalData.length==lines.length) {
document.getElementById('showrangeses').style.display='block'
document.getElementById('massg').style.display= "none"
window.scrollTo(0,document.body.scrollHeight)}});
document.querySelector("#btninfoo").addEventListener("click", function () {
var minval = document.getElementById("minval").value;
var maxval = document.getElementById("maxval").value;
var serchmin = minval.search("k");
var serchmax = maxval.search("k");
if(serchmin>0|| serchmax>0){var  minval1 = minval.replace("k", "")*1000;var  maxval1 = maxval.replace("k", "")*1000;
}else{minval1=minval;maxval1=maxval}if (minval==''&&maxval=='') {alert("Please Enter Minimum, Maximum and Price");return;};
var price = document.getElementById('price').value;
var viewsprice = document.getElementById('totprice');
const fltview = [];
for (k = 0; k < sttonum.length; k ++) {
if(sttonum[k]>=minval1 && sttonum[k]<=maxval1){
fltview.push(sttonum[k])}};
document.getElementById('viewsprice').style.display="block"
document.getElementById('rangeview22').innerHTML = "Number of Videos:-"+' '+`<b style="color:black">${fltview.length}</b>`;
var vidprice = fltview.length*price
document.getElementById('totprice').innerHTML="Amount"+' '+"₹"+`<b style="color:#cd1a1a">${vidprice}</b>`;
viewsprice.scrollIntoView();
var myul = document.getElementById("myUL");
myul.style.display="block"
document.getElementById("rcal").style.display="block";
var li = document.createElement("li");
li.textContent = minval +"-" + maxval + "=" + " "+ fltview.length+ " " + "videos" +"," + " " +"₹" + vidprice ;
var fistele = myul.firstElementChild;
if(fistele ==null){myul.appendChild(li);}else{myul.insertBefore(li, fistele);}});