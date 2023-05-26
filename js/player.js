const $ = (id) => document.getElementById(id)

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played ++    
    }

    display = function(fav) {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}
class Jukebox extends Album{
    constructor(albums) {
        super()
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }

    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

let songlist = [['Operation Ivy', 'Energy'], ['Blink 182', 'Dude Ranch'], ['New Found Glory', 'Sticks and Stones']]
let jukebox = document.querySelector('#jukebox') 
let songList = document.querySelector('#songList')
let album = []

function album1() {   
    for (let i = 0; i < songlist.length; i++ ) {
        let option = document.createElement('option')     
        album[i] = new Album(songlist[i][0], songlist[i][1])
        songList.innerHTML +=
        `<option>${album[i].artist}, ${album[i].title}</option>  
        `       
    }   
}

let jbox = new Jukebox()
window.addEventListener('load', () => {
    album1()
})

btn.addEventListener('click',()=> { 
    let x = $('songList').value
    
    if(x == 'Operation Ivy, Energy') {
        album[0].play()
        jbox.addAlbum(album[0])        
    }
    
    if(x == 'Blink 182, Dude Ranch') {
        album[1].play()
        jbox.addAlbum(album[1])
    }
    if(x == 'New Found Glory, Sticks and Stones') {
        album[2].play()
        jbox.addAlbum(album[2])
    }  
}) 

favAlbum.addEventListener('click', () => {
    console.log(jbox.album)
    alert(jbox.favoriteAlbum())
})






