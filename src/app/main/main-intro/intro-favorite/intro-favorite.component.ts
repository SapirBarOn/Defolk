import { Component, Input, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { AlbumService } from '../../../app.AlbumService';
import { Album } from '../../../model/Album.model';
import {CurrentUser} from '../../../app-shared/current-user';
import { User } from '../../../model/user.model';
import { CurrentAlbum} from '../../../app-shared/current-album';

@Component({
  selector: 'app-intro-favorite',
  templateUrl: './intro-favorite.component.html',
  styleUrls: ['./intro-favorite.component.css']
})

@Injectable()
export class IntroFavoriteComponent implements OnInit {
  @Output() albumSelected  = new EventEmitter<Album>();
  user : User;
  @Input() albums : Album[] ;

  constructor(private AlbumService:AlbumService,
      private currentUserService : CurrentUser,
       private currentAlbums:CurrentAlbum) {
    this.currentAlbums = currentAlbums;
    this.albums = this.currentAlbums.getValue();
    this.user = this.currentUserService.getCurrentUser();

    // // this.currentAlbums.getValue()
    // //   .subscribe(album=>{
    //     console.log(`IntroFavoriteComponent -> ngOnInit() -> ${this.albums} `);
    // //     this.albums = album;
    // //   });
    // console.log(`after getValue()`);

    // this.currentAlbums.getValue()
    //     .subscribe(album=>{
    //       console.log(`IntroFavoriteComponent -> constructor() -> ${album} `);
    //       this.albums = album;
    //     });
  }

  ngOnInit() {
    // this.user = this.currentUserService.getCurrentUser();
    // console.log(`IntroFavoriteComponent -> ngOnInit() -> this.user -> ${this.user.getUserName()}`);

    // this.AlbumService.getSignUpUser(this.user,result=>{
    //   console.log(`IntroFavoriteComponent -> ngOnInit() -> AFTER -> ${result}`);
    // });

    // console.log(`before getValue()`);
    // this.albums = this.currentAlbums.getValue();
    // // this.currentAlbums.getValue()
    // //   .subscribe(album=>{
    //     console.log(`IntroFavoriteComponent -> ngOnInit() -> ${this.albums} `);
    // //     this.albums = album;
    // //   });
    // console.log(`after getValue()`);



    //   this.AlbumService.getAlbums(result=>{
    //   this.albums=result;
    //   console.log(this.albums);
    // });
  }

  onAlbumClick(album:Album){
    console.log(`IntroFavoriteComponent -> onAlbumClick(${album._id})`);
    this.albumSelected.emit(album);
  }
}
