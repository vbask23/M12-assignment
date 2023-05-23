// class Jukebox {
//     constructor(albums) {
//         this.albums = []
//     }
//     addAlbum = function(album) {
//         this.albums.push(album)
//     }
//     favoriteAlbum = function() {
//         let max = -1, fav
//         for (let i = 0; i < this.albums.length; i++) {
//             if (this.albums[i].played > max) {
//                 max = this.albums[i].played
//                 fav = this.albums[i]
//             }
//         }
//         return fav.display()
//     }
// }

// class Album {
//     constructor(artist, title) {
//         this.artist = artist
//         this.title = title
//         this.played = 0
//     }
//     play = function() {
//         this.played += 1
//     }
//     display = function() {
//         return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
//     }
// }

// var jbox = new Jukebox()
// const album1 = new Album('Operation Ivy', 'Energy')
// const album2 = new Album('Blink 182', 'Dude Ranch')
// const album3 = new Album('New Found Glory', 'Sticks and Stones')

// jbox.addAlbum(album1)
// jbox.addAlbum(album2)
// jbox.addAlbum(album3)

// album1.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album3.play()

// console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)



let songlist = [['Operation Ivy', 'Energy'], ['Blink 182', 'Dude Ranch'], ['New Found Glory', 'Sticks and Stones']]

let songList = document.querySelector('#songList')
let jukebox = document.querySelector('#jukebox')

// BUILD DROPDOWN MENU
let option = document.createElement('option')
for ( let i = 0; i< songlist.length; i++ ) {
    songList.innerHTML +=
    `<option>${songlist[i]}</option>
     
    `
    songList.appendChild(option)
}

btn.addEventListener('click', playSong)
function playSong(song) {
    if (song == ['Operation Ivy', 'Energy']) {
        console.log('yep')
    }
}

