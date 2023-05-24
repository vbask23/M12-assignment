const $ = (id) => document.getElementById(id)

class Jukebox {
    constructor(albums) {
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

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
        
    }

    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

let songlist = [['Operation Ivy', 'Energy'], ['Blink 182', 'Dude Ranch'], ['New Found Glory', 'Sticks and Stones']]

let jukebox = document.querySelector('#jukebox') 
let songList = document.querySelector('#songList')
var jbox = new Jukebox()
// let album = []

function album1() {
    let album =[]
    for (let i = 0; i < songlist.length; i++ ) {
        let option = document.createElement('option')     
        album[i] = new Album(songlist[i][0], songlist[i][1])

        songList.innerHTML +=
        `<option>${album[i].artist}, ${album[i].title}</option>  
        `
        songList.appendChild(option)       
    } 
}

window.addEventListener('load', () => {
    album1()
})

btn.addEventListener('click',()=> {        
    let x = $('songList').value
    x = x.split(/\,/)
    const h = new Album (x[0], x[1])
    jbox.addAlbum(h)
    console.log(jbox.albums)
    h.play() 
    $('songList').value = ' '     
})

favAlbum.addEventListener('click',()=> {
    alert(jbox.favoriteAlbum())
})



