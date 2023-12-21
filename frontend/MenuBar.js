let ul1 = `
        <li onclick="setColor(self)"> <span class="material-symbols-outlined"> home </span> home</li>
        <li> <span class="material-symbols-outlined"> queue_music </span> playlists</li>
        <li> <span class="material-symbols-outlined"> 10mp </span> top 10</li>
        <li> <span class="material-symbols-outlined"> artist </span> artistas</li>
        <li> <span class="material-symbols-outlined"> category </span> categorias <i>&gt;</i> </li>
        <li> <span class="material-symbols-outlined"> info </span> sobre nós</li>
        <li> <span class="material-symbols-outlined"> assured_workload </span> políticas</li>
        <li> <span class="material-symbols-outlined"> contacts </span> contactos</li>
`

function MenuBar () {
    document.write(`
    <aside id="left-aside">
    <span class="close"><span class="material-symbols-outlined"> close </span></span>
    <div class="logo">
        <img src="https://cdn.pixabay.com/photo/2016/11/19/00/12/wave-1837426_1280.png" alt="">
        <small>Melody</small>
    </div>
    <nav>
        <ul>
            <a style="background-color: #990000;color: #fff;">
                <li> <span class="material-symbols-outlined"> home </span> home</li>
            </a>
            <a href="pages/playlist.html">
                <li><span class="material-symbols-outlined"> queue_music </span> playlists</li>
            </a>
            <a href="#">
                <li> <span class="material-symbols-outlined"> 10mp </span> top 10</li>
            </a>
            <a href="pages/artists.html">
                <li> <span class="material-symbols-outlined"> artist </span> artistas</li>
            </a>
            <a href="#">
                <li> <span class="material-symbols-outlined"> category </span> categorias <i>&gt;</i> </li>
            </a>
            <a href="#">
                <li> <span class="material-symbols-outlined"> info </span> sobre nós</li>
            </a>
            <a href="#">
                <li> <span class="material-symbols-outlined"> assured_workload </span> políticas</li>
            </a>
            <a href="a">
                <li> <span class="material-symbols-outlined"> contacts </span> contactos</li>
            </a>
        </ul>
    </nav>
    </aside>   
    
    `)
}

