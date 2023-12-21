let $ = document.querySelector.bind(document)

// function setColor(posi) {
//     $("aside#left-aside ul li:nth-child("+posi+")").style.background = "#b60404ec"
//     $("aside#left-aside ul li:nth-child("+posi+")").style.color = "#fff"
//     // $("#"+id).style.
// }


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