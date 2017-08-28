import { Component, OnInit} from '@angular/core';
import {CurrentAlbum} from '../../app-shared/current-album';
import { Album } from '../../model/album.model';
import { Song } from '../../model/song.model';
// import {CurrentSong} from '../../app-shared/current-album';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
  private songDurationInterval;


  albums:Album[];
  songs:Song[];
  album:Album;
  songPlayed:Song;
  isPlayed:boolean;
  player:YT.Player;
  private id: string;
  indexPlayed:number;
  currTime:number=0;

  constructor(private currentAlbum:CurrentAlbum) { 
      this.albums=this.currentAlbum.getValue();
      // console.log(`PlayerComponent-> constructor()-> ${this.albums[0].albumName}`);
      this.album=this.albums[0];
      this.songs=this.currentAlbum.getSongs();
      this.songPlayed=this.songs[0];
      this.id=this.songPlayed.youtubeID;
      this.indexPlayed=0;
      this.isPlayed=true;
  }

  ngOnInit() {
  }


  savePlayer(player) {
      this.player = player;
      this.player.loadVideoById(this.id);
  }

  onStateChange(event) {
    if (event.data == YT.PlayerState.ENDED){
      this.indexPlayed++;
      this.songPlayed=this.songs[this.indexPlayed];
      this.id=this.songPlayed.youtubeID;
      this.player.loadVideoById(this.id);
    }
  }

  onPlayClick(){
    this.isPlayed=true;
    this.player.playVideo();
  }

  onPuseClick(){
    this.isPlayed=false;
    this.player.pauseVideo();
  }

  onForwardClick(){
    if(this.indexPlayed < this.songs.length-1){
        this.player.pauseVideo();
        this.songPlayed=this.songs[this.indexPlayed+1];
        this.id=this.songPlayed.youtubeID;
        this.player.loadVideoById(this.id);
        this.indexPlayed++;     
    }

  }

  onBackwardClick(){
    if(this.indexPlayed >= this.songs.length-1){
        this.player.pauseVideo();
        this.songPlayed=this.songs[this.indexPlayed-1];
        this.id=this.songPlayed.youtubeID;
        this.player.loadVideoById(this.id);
        this.indexPlayed--;
    }
  }

  // jumpTo(event) {
  //       let progress = $('progress');
  //       let x = event.pageX - progress.offset().left;
  //       let clickedValue = x * 100 / progress.outerWidth();
  //       progress.val(Math.round(Math.floor(clickedValue)));

  //       let jumping = this.player.getDuration() * (clickedValue/100);
  //       this.player.seekTo(jumping,true);
  //   }


// startInterval() {
//         let progress = $('progress');
//         this.songDurationInterval = setInterval(
//             () => {
//                 if(this.player) {
//                     if (this.player.getCurrentTime() <= this.player.getDuration()) {
//                         this.currTime = this.player.getCurrentTime();
//                         progress.val(Math.floor(Math.round(
//                             (this.currTime / (this.player.getDuration() === 0 ? 1 : this.player.getDuration()
//                             ))*100)));
//                     }
//                     // if(this.player.getCurrentTime() === this.player.getDuration() && this.player.getDuration() !== 0) {
//                     //     if(!this.musicService.isPlaylistEmpty()) {
//                     //         this.onForwardClick();
//                     //     }
//                         /*Happens once, don't worry. clearInterval is not possible
//                           inside setInterval (in Angular)
//                          */
//                         for (let i = 1; i < 99999; i++)
//                             window.clearInterval(i);
//                     }
//                 }

//             },1020);
//     }






}
