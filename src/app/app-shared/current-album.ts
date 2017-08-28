import { Injectable, EventEmitter, Output } from '@angular/core';
import { Album } from '../model/album.model';
import { Song } from '../model/song.model';


@Injectable()
export class CurrentAlbum{
    @Output() currentAlbum : EventEmitter<Album[]> = new EventEmitter();
    albums:Album[];
    songs:Song[];
    constructor(){}

    change(album:Album[]){
        this.currentAlbum.emit(album);
        this.albums = album;
        this.songs=this.albums[0].song;
        console.log(`CurrentAlbum ID(${album[0]._id}) change click`);
    }

    getValue(){
        console.log(`CurrentAlbum-> getValue() -> ${this.albums[0]._id}`);
        // return this.currentAlbum;
        return this.albums;
    }

    getSongs(){
        return this.songs;
    }
}


export class CurrentSong{
    CurrentSong = new EventEmitter<Song>();

    constructor(){}

    change(song:Song){
        this.CurrentSong.next(song);
        console.log(`CurrentSong ID(${song._id}) change click`);
    }

    getValue(){
        return this.CurrentSong;
    }
}