let randomWord = 'https://random-word-api.herokuapp.com/word?number=1';

// fetch(randomWord)
//    .then((resp)=>{
//       return resp.json();
//    }) .then((data)=>{
//       console.log(data[0]);
//    }) .catch((err)=>{
//       console.log(err);
//    })

async function getWord() {
try{
   let resp = await fetch(randomWord);
   let word = await resp.json();
   
   let random = document.createElement('p');
   random.innerText = word[0];
   document.body.append(random);

   let resp1 = await fetch (`https://api.giphy.com/v1/gifs/search?api_key=qdYBceLdENv2oGgXroKASDJ6mKCjkoMp&q=${word[0]}&limit=25&offset=0&rating=g&lang=en`);
   let result = await resp1.json();

   let img = document.createElement('object');
   img.setAttribute('data', result.data[0].images.downsized.url);
   document.body.append(img);

} catch (error) {
   alert('sorry img not found');
   console.log(error);
}
}

getWord();
