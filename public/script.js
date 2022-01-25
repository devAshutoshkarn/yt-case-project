// All codes is written by Ashutosh karn(A Teen Programmer!)
let URLinput = document.querySelector('.URL-input');
let serverURL = 'https://yt-cash-calculate.openode.dev';
var sttonum;
document.querySelector("#btninfo").addEventListener("click", async function () {
var area = document.getElementById("videoURL");
    if (area.value == '') {alert('Please Enter youtube url');return}var lines = area.value.replace(/\r\n/g, "\n").split("\n").filter(line => line);
    if (200<lines.length) {alert("Please Enter url less than 200");return;};document.getElementById("fatchedview").style.display = "block";
    document.getElementById('btntoshow').style.display = "none";
    document.getElementById('massg').style.display = "block"
    document.querySelector('.hidandshow').style.display = "block"
    document.getElementById("totvid").innerHTML = "TOTAL NUMBER OF VIDEOS:-" + ' ' + `<b style="color:red" >${
        lines.length
    }</b>`;
    finalData = [];
    for (const item of lines) {
        const response = await fetch(serverURL + "/videoInfo?videoURL=" + item);
        const resData = await response.json();
        var viewsreslt = resData.videoDetails.viewCount;
        document.getElementById("fatchedview").innerHTML += `<span style="color:#3fff00; font-size:18px;" >${
            resData.videoDetails.ownerChannelName
        }</span>` + "," + " " + `<a href="${item}" target="_blank">${item}</a>` + "," + " " + `<span style="color:white; font-size:18px;" >(${
            numeral(viewsreslt).format('0.0a')
        })</span>` + "," + " " + `<b style="color:yellow">${
            resData.videoDetails.publishDate
        }</b>` + '\n';
        finalData.push(viewsreslt);
    }sttonum = finalData.map(Number);
    if (finalData.length == lines.length) {
        document.getElementById('showrangeses').style.display = 'block'
        document.getElementById('massg').style.display = "none"
        window.scrollTo(0, document.body.scrollHeight)}});
document.querySelector("#btninfoo").addEventListener("click", function () {
    var minval = document.getElementById("minval").value;
    var maxval = document.getElementById("maxval").value;
    var price = document.getElementById('price').value;
    var multipliers = {k: 1000, m: 1000000};
    var minval1 =(parseFloat(minval)*multipliers[minval.charAt(minval.length-1).toLowerCase()]);
    var maxval1 =(parseFloat(maxval)*multipliers[maxval.charAt(maxval.length-1).toLowerCase()]);
    if (minval === '' && maxval === '') {alert("Please Enter Minimum, Maximum views");return;};const datype = ["k","M","m","K"];
    let text = minval;
    let sectext = maxval;
    let result = text.substring((text.length-1));
    let secresult = sectext.substring((sectext.length-1));
    let indexdt = datype.indexOf(result);
    let secindexdt = datype.indexOf(secresult);
    if (indexdt<0) {
        alert("Enter like 1k, 2k, 3k, 4k");
        return;
    };if (secindexdt<0) {
        alert("Enter like 1k, 2k, 3k, 4k");
        return;
    };var viewsprice = document.getElementById('totprice');
    const fltview = [];
    for (k = 0; k < sttonum.length; k ++) {
        if (sttonum[k] >= minval1 && sttonum[k] <= maxval1) {
            fltview.push(sttonum[k])
        }
    };document.getElementById('viewsprice').style.display = "block"
    document.getElementById('rangeview22').innerHTML = "Number of Videos:-" + ' ' + `<b style="color:black">${
        fltview.length
    }</b>`;
    var vidprice = fltview.length * price
    document.getElementById('totprice').innerHTML = "Amount" + ' ' + "₹" + `<b style="color:#cd1a1a">${vidprice}</b>`;
    viewsprice.scrollIntoView();
    document.getElementById("minval").value=maxval;
    document.getElementById("maxval").value='';
    var myul = document.getElementById("myUL");
    myul.style.display = "block"
    document.getElementById("rcal").style.display = "block";
    var li = document.createElement("li");
    li.textContent = minval + "-" + maxval + "=" + " " + fltview.length + " " + "videos" + "," +" "+ "Price" +" " + price+ ","+" " +"Amount"+" "+ "₹" + vidprice;
    let anch = document.createElement('a');
    anch.textContent="x";
    anch.href="javascript:void(0)";
    li.appendChild(anch);
    var fistele = myul.firstElementChild;
    if (fistele == null) {
        myul.appendChild(li);
    } else {myul.insertBefore(li, fistele);}
});let btnul=document.querySelector("ul");
btnul.addEventListener('click', function(e){
var myul = document.getElementById("myUL");
if (confirm("Are you Sure!") == true) {var li =e.target.parentNode;
myul.removeChild(li);}});

