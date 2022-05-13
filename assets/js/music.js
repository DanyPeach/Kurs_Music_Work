const player = document.querySelector('.player'),
      playBtn = document.querySelector('.play'),  
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next'),
      audio = document.querySelector('.audio'),  
      progressContainer = document.querySelector('.progress__container'),  
      progress = document.querySelector('.progress'),  
      title = document.querySelector('.song'),
      cover = document.querySelector('.cover__img'),
      imgSrc = document.querySelector('.img__src')

const songs = ['Shine Bird Space', 'Lovely Nature', 'Enigma']


let songIndex = 0

//init

function loadSong(song){
    title.innerHTML = song
    audio.src = `assets/music/${song}.mp3`
    cover.src = `assets/images/cover${songIndex + 1}.png`
}
loadSong(songs[songIndex])

//play
function playSong(){
    player.classList.add('play')
    cover.classList.add('active')
    imgSrc.src ='assets/images/pause.png'
    audio.play()
}

function pauseSong(){
    player.classList.remove('play')
    cover.classList.remove('active')
    imgSrc.src ='assets/images/play.png'
    audio.pause()
}

playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})

//Next song

function nextSong(){
    songIndex++

    if(songIndex > songs.length -1){
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}

nextBtn.addEventListener('click', nextSong)

//prev song
function prevSong(){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length -1
    }

    loadSong(songs[songIndex])
    playSong()
}

prevBtn.addEventListener('click', prevSong)

//progress bar

function updateProgress(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent =  (currentTime/duration) * 100
    progress.style.width = `${progressPercent}%`
}
audio.addEventListener('timeupdate' , updateProgress)


function setProgress(e){
    const width = this.clientWidth
    const clickCoordinateX = e.offsetX 
    const duration = audio.duration
    audio.currentTime = (clickCoordinateX / width) * duration
    console.log(clickCoordinateX)
}
progressContainer.addEventListener('click', setProgress)

//autoplay

audio.addEventListener('ended' , nextSong)
