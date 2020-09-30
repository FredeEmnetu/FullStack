import express from 'express' // These are dependencies
import bodyParser from 'body-parser'

const app = express(); // using express
// var bodyParser = require('body-parser');
const fetch = require('node-fetch'); //using fetch
app.use(bodyParser.json());

// getdata()
// let TitleofBook = '';
// 'https://ocul-it.primo.exlibrisgroup.com/primaws/rest/pub/pnxs?blendFacetsSeparately=false&disableCache=false&getMore=0&inst=01OCUL_IT&lang=en&limit=10&newspapersActive=false&newspapersSearch=false&offset=0&pcAvailability=false&q=any,contains,Child:+From+birth+to+adolescence+&qExclude=&qInclude=&rapido=false&refEntryActive=true&rtaLinks=true&scope=ONTECHLIBS&skipDelivery=Y&sort=rank&tab=ONTECHLIBS&vid=01OCUL_IT:UO'

app.post('/Find',(req,res) =>{ // handleing post req call made by 
  let i;
  const TitleofBook = (req.body.Title.book) //this grabs the title from the state var that was passed to it
  const splitTitle = TitleofBook.split(' '); // splits the title if the is a space currently assumes there is a space so need to add if stat.

  var URLstring = ''; // var to store string after it is split
  for(i=0; i<splitTitle.length; i++){ // if search is Math car than this for loop will make it Math+car as '+' means space in the url
    if(i == splitTitle.length - 1){
      URLstring += splitTitle[i];
    }else{
      URLstring += splitTitle[i] + '+';
    }
    
  }

  const URL = `https://ocul-it.primo.exlibrisgroup.com/primaws/rest/pub/pnxs?blendFacetsSeparately=false&disableCache=false&getMore=0&inst=01OCUL_IT&lang=en&limit=10&newspapersActive=false&newspapersSearch=false&offset=0&pcAvailability=false&q=any,contains,${URLstring}&qExclude=&qInclude=&rapido=false&refEntryActive=true&rtaLinks=true&scope=ONTECHLIBS&skipDelivery=Y&sort=rank&tab=ONTECHLIBS&vid=01OCUL_IT:UO`;
  // line above adds var  urlstring to actual url
  getdata(URL).then(data => { // data in this instance is the json thats returned from the site
    res.send((iterateobj(data.docs))) // this is the line that should return the titles and authors
    
  });
 
})

const getdata = async (URL) => { // this functions gets the data from the site 
  return await fetch(URL).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => console.log(err));

}
const iterateobj = (obj) =>{  // recursive function meant to iterate over object from site (2.3k lines in object file)

  return obj.map(element => (element.pnx.display.title))
}



app.listen(8000, () => console.log("listening at port 8000")); // line to start the server on port 8000



