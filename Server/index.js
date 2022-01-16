const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.listen(PORT, () => {
	console.log(`Server Works !!! At port ${PORT}`);
});
app.use(express.json());
app.use(express.static("public"));

app.get("/",function(request,response){
	response.sendFile(__dirname + "public/index.html");
});

app.get("/videoInfo",async function(request,response){
	const videoURL = request.query.videoURL;
	const info = await ytdl.getInfo(videoURL);
	response.status(200).json(info);
	console.log(info);
});