var express = require('express');
var router = express.Router();

/* GET news listing. */
router.get('/', function(req, res, next) {
  news = [
    {
      'url':'https://www.cnn.com/2019/05/24/entertainment/adam-levine-leaving-the-voice/index.html',
      'title':"Adam Levine is leaving 'The Voice'",
      'description':'After 16 seasons and a major bromance with fellow coach Blake Shelton, Adam Levine is leaving "The Voice."',
      'source':'cnn',
      'urlToImage':'https://cdn.cnn.com/cnnnext/dam/assets/131215181752-voice-judges-horizontal-large-gallery.jpg',
      'digest':'1',
      'reason':'Recommend'
    },
    {
      'url':'https://www.cnn.com/2019/05/24/politics/donald-trump-nancy-pelosi-democrats-republicans/index.html',
      'title':"Donald Trump falls for Nancy Pelosi's trap",
      'description':'The House speaker has spent the last two days provoking Trump, questioning his self-confidence, condescendingly confiding that she prays for him and suggesting a "family intervention."',
      'source':'cnn',
      'urlToImage':'https://cdn.cnn.com/cnnnext/dam/assets/190522115910-trump-pelosi-0522-split-large-tease.jpg',
      'digest':'2',
      'reason':'Trump'
    }
  ];
  res.json(news);
});

module.exports = router;
