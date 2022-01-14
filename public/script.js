let URLinput = document.querySelector('.URL-input');
let serverURL = 'http://localhost:4000';
var sttonum;
document.querySelector("#btninfo").addEventListener("click", async function () {
var area = document.getElementById("videoURL");
if (area.value=='') {alert('Please Enter youtube url' );return}
document.getElementById("fatchedview").style.display= "block";
document.getElementById('btntoshow').style.display="none";
document.getElementById('massg').style.display= "block"
document.querySelector('.hidandshow').style.display="block"
var lines = area.value.replace(/\r\n/g, "\n").split("\n").filter(line => line);
document.getElementById("totvid").innerHTML = "TOTAL NUMBER OF VIDEO:-" +' '+ lines.length;
finalData = [];
for (const item of lines) {
const response = await fetch(serverURL + "/videoInfo?videoURL=" + item);
const resData = await response.json();
var viewsreslt = resData.videoDetails.viewCount;
document.getElementById("fatchedview").value += item +","+" "+viewsreslt +","+" "+resData.videoDetails.publishDate +'\n';
finalData.push(viewsreslt);}
sttonum = finalData.map(Number);
if (finalData.length==lines.length) {
document.getElementById('showrangeses').style.display='block'
document.getElementById('massg').style.display= "none"
window.scrollTo(0,document.body.scrollHeight)}});
document.querySelector("#btninfoo").addEventListener("click", function () {
var minval = document.getElementById("minval").value;
var maxval = document.getElementById("maxval").value;
var price = document.getElementById('price').value;
if (minval==''&&maxval==''&&price=='') {
alert("Please Enter Minimum, Maximum and Price")
return};
const fltview = [];
for (k = 0; k < sttonum.length; k ++) {
if(sttonum[k]>=minval && sttonum[k]<=maxval){
fltview.push(sttonum[k])}};
document.getElementById('viewsprice').style.display="block"
document.getElementById('rangeview22').innerHTML = "Number of Videos:-"+' '+fltview.length;
document.getElementById('totprice').innerHTML="Amount"+' '+"₹"+fltview.length*price});