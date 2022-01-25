// All code is written by Ashutosh karn(A Teen Programmer!)
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const ytdl = require('ytdl-core');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(compression());
app.listen(PORT);
const apipath = path.join(__dirname, "../public");
app.use(express.json());
app.use(express.static(apipath));
app.get("/",function(request,response){
	response.sendFile(apipath + "/index.html");
});
app.get("/videoInfo",async function(request,response){
	const videoURL = request.query.videoURL;
	const info = await ytdl.getInfo(videoURL);
	response.status(200).json(info);
});