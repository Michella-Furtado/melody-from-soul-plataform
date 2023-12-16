let $ = document.querySelector.bind(document)

function setColor(id) {
    console.log(id);
    // $("#"+id).style.
}


function artistStory(client) {
    document.write (`
        <div class="artist-story">
            <div id="img">
                <img src=${client.photo} alt="foto de artista">
             </div> 
            <small title="Visit artist's profile" >${client.nome}</small>    
        </div>
    `)
}