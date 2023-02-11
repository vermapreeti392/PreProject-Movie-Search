let input = document.getElementById('search');
let btn = document.getElementById('btn');
let results = document.getElementById('results');
let movies = [];
btn.addEventListener('click', async()=>{     
   await fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=8b2760a7`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        results.innerHTML="";
        movies = data.Search;
    }).catch(e=>console.log(e));
    if(movies){
        movies.map((data)=>{
            results.innerHTML+=`<div class="card"><img src=${data.Poster} alt="pics" style="width:30%">
            <div class="container">
              <h4><b>${data.Title}</b></h4>
              <p style='margin : 10px'>${data.Year}</p>
              <p>${data.imdbID}</p>
            </div>
          </div>`
        })
    }
    else{
        results.innerHTML=  `<h1 style="color: white; margin: auto">No movies avaiable</h1>`
    }
    
})