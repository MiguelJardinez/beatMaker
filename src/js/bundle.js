class Drumkit{constructor(){this.pads=document.querySelectorAll("div.pad"),this.playBtn=document.querySelector("button.play"),this.currentKick="../public/assets/sound/kick-classic.wav",this.currentSnare="../public/assets/sound/snare-acounstic01.wav",this.currentHihat="../public/assets/sound/hihat-acounstic01.wav",this.kickAudio=document.querySelector("audio.kick-sound"),this.snareAudio=document.querySelector("audio.snare-sound"),this.hithatAudio=document.querySelector("audio.hihat-sound"),this.index=0,this.bpm=150,this.isPlaying=null,this.selects=document.querySelectorAll("select"),this.muteBtns=document.querySelectorAll("button.mute"),this.bpmSlider=document.querySelector("input.bpm-slider")}activePad(){this.classList.toggle("active")}repeat(){let a=this.index%8;const b=document.querySelectorAll(`div.b${a}`);b.forEach(a=>{a.classList.contains("active")?(a.style.animation=`playTrack 350ms alternate cubic-bezier(0.48, 0.88, 0.43, 0.86)`,a.classList.contains("kick-pad")&&(this.kickAudio.currentTime=0,this.kickAudio.play()),a.classList.contains("snare-pad")&&(this.snareAudio.currentTime=0,this.snareAudio.play()),a.classList.contains("hihat-pad")&&(this.hithatAudio.currentTime=0,this.hithatAudio.play())):a.style.animation=`shines 500ms reverse linear forwards`}),this.index++}start(){const a=1e3*(60/this.bpm);this.isPlaying?(clearInterval(this.isPlaying),this.isPlaying=null):this.isPlaying=setInterval(()=>{this.repeat()},a)}updateBtn(){this.isPlaying?(this.playBtn.innerText="Play",this.playBtn.classList.remove("active")):(this.playBtn.innerText="Stop",this.playBtn.classList.add("active"))}changeSound(a){const b=a.target.name,c=a.target.value;"kick-select"===b?this.kickAudio.src=c:"snare-select"===b?this.snareAudio.src=c:"hihat-select"===b?this.hithatAudio.src=c:void 0}mute(a){const b=a.target.getAttribute("data-track");let c;a.target.classList.toggle("active")?(a.target.firstElementChild.innerText="volume_off",c=0):(a.target.firstElementChild.innerText="volume_up",c=1);"0"===b?this.kickAudio.volume=c:"1"===b?this.snareAudio.volume=c:"2"===b?this.hithatAudio.volume=c:void 0}changeBpm(a){const b=document.querySelector(".bpm-value");this.bpm=a.target.value,b.innerText=a.target.value}updateInterval(){clearInterval(this.isPlaying),this.isPlaying=null;const a=document.querySelector("button.play");a.classList.contains("active")&&this.start()}}const drumKit=new Drumkit;drumKit.pads.forEach(a=>{a.addEventListener("click",drumKit.activePad),a.addEventListener("animationend",function(){this.style.animation=""})}),drumKit.playBtn.addEventListener("click",()=>{drumKit.updateBtn(),drumKit.start()}),drumKit.selects.forEach(a=>{a.addEventListener("change",function(){drumKit.changeSound(event)})}),drumKit.muteBtns.forEach(a=>{a.addEventListener("click",function(a){drumKit.mute(a)})}),drumKit.bpmSlider.addEventListener("input",function(a){drumKit.changeBpm(a)}),drumKit.bpmSlider.addEventListener("change",function(a){drumKit.updateInterval(a)});