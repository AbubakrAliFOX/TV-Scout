require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const axios = require('axios');

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/search', async (req, res) => {
    const {searchTerm} = req.query;
    const search = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const searchResult = search.data; // This line is to avoid the JSON.stringify(value) error.
    res.render('index', {searchResult, searchTerm})
})

app.get('/show/:id', async (req, res) => {
    const {id} = req.params;
    const show = await axios.get(`https://api.tvmaze.com/shows/${id}?embed[]=cast&embed[]=images&embed[]=crew&embed[]=seasons&embed[]=episodes`);
    const showData = show.data;
    const castData = showData._embedded.cast;
    const seasonsData = showData._embedded.seasons;
    const episodesData = showData._embedded.episodes;
    let imgData = [], crewData=[];
    // refactor function later
    for (image of show.data._embedded.images) {
      if (image.type == 'background') {
        imgData.push(image);
      }
    }
    // refactor function later
    for (member of show.data._embedded.crew) {
      if (member.type == 'Creator' || member.type == 'Executive Producer') {
        crewData.push(member);
      }
    }

    const videoId = await lookForVideo(showData.name);
    res.render('show', {showData, castData, imgData, crewData, seasonsData, episodesData, videoId});
    // videoId
})

const lookForVideo = async (showName) => {
    try {
      const query = `${showName} TV Show Trailer`; // The search query provided as a query parameter
      const maxResults = 2; // Number of results (default: 10)
  
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: 'snippet',
            maxResults,
            q: query,
            key: process.env.YOUTUBE_KEY,
            type: 'video',
            videoEmbeddable: true
          },
        }
      );
        
      return response.data.items[0].id.videoId;
    } catch (error) {
      console.error('Error making YouTube API request:', error);
    }
};

app.listen(3000, () => {
    console.log('App running on port 3000');
})

