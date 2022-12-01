const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    const element = document.getElementById("playing");
    element.innerHTML = "Top Result";
}

async function getTracks (term) {
    const tracksEndpoint = baseURL + "?q=" + term + "&type=track";
    console.log(tracksEndpoint);
    
    const trackData = await fetch(tracksEndpoint).then(response => response.json());

    console.log(trackData);
    if (trackData.length === 0) {
        document.querySelector('#tracks').innerHTML = "No results found."
        return;
    }
    
    document.querySelector('#tracks').innerHTML = "";
    for(counter = 0; 5 > counter; counter++){
     const template = `
        <section class="track-item preview" onCLick="playTrack('${trackData[counter].id}')">
             <img src="${trackData[counter].album.image_url}" alt="Album cover of ${trackData[counter].album.name}">
             <i class="fas play-track fa-play" aria-hidden="true"></i>
             <div class="label">
               <h2>${trackData[counter].name}</h2>
               <p>
                  ${trackData[counter].artist.name}
               </p>
          </div>
        </section>
    `   
    document.querySelector('#tracks').insertAdjacentHTML('beforeend', template);
    console.log(counter);
    }
}

function playTrack (id) {
    const currentTrack = `
    <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="false" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
        `;
    document.querySelector('#artist').innerHTML = currentTrack;
    const element = document.getElementById("playing");
    element.innerHTML = "Now Playing";

}


async function getAlbums (term) {
    const albumsEndpoint = baseURL + "?q=" + term + "&type=album";
    // console.log(albumsEndpoint);

    const albumData = await fetch(albumsEndpoint).then(response => response.json());

    // console.log(albumData);
    if (albumData.length === 0) {
        document.querySelector('#albums').innerHTML = "No results found."
        return;
    }
    
    document.querySelector('#albums').innerHTML = "";
    for(counter = 0; albumData.length > counter; counter++){
     const template = `
    <section class="album-card" id="${albumData[counter]}.id">
    <div>
        <img src="${albumData[counter].image_url}" alt="Album cover of ${albumData[counter].name}">
        <h2>${albumData[counter].name}'</h2>
        <div class="footer">
            <a href="${albumData[counter].spotify_url}" target="_blank">
                View on spotify
            </a>
        </div>
    </div>
</section>
    `   
    document.querySelector('#albums').insertAdjacentHTML('beforeend', template);
    // console.log(counter);
    }
}

async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    // console.log(artistEndpoint);

    const artistData = await fetch(artistEndpoint).then(response => response.json());

    if (artistData.length === 0) {
        document.querySelector('#artist').innerHTML = "No results found."
        return;
    }

    // console.log(artistData);
    // console.log(artistData[0].name);
    // console.log(artistData[0].image_url);

    const template = `
    <section>
        <img src="${artistData[0].image_url}" />
        <h2>${artistData[0].name}</h2>
        <p>Popularity: ${artistData[0].popularity}</p>
    </section>
    `;


    const template1 = `
        <section class="artist-card" id="${artistData[0].id}">
            <div>
                <img src="${artistData[0].image_url}" alt="Image of ${artistData[0].name}">
                <h2>${artistData[0].name}</h2>
                <div class="footer">
                    <a href="${artistData[0].spotify_url}" target="_blank">
                        View on spotify
                    </a>
                </div>
            </div>
        </section>
        `;

    document.querySelector('#artist').innerHTML = template1;
    
}


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}