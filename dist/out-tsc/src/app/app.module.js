"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var ng2_youtube_player_1 = require("ng2-youtube-player");
var app_component_1 = require("./app.component");
var app_SongService_1 = require("./app.SongService");
var app_AlbumService_1 = require("./app.AlbumService");
var comments_component_1 = require("./comments/comments.component");
var app_CommentService_1 = require("./app.CommentService");
var main_component_1 = require("./main/main.component");
var header_component_1 = require("./main/header/header.component");
var player_component_1 = require("./main/player/player.component");
var footer_component_1 = require("./main/footer/footer.component");
var main_intro_component_1 = require("./main/main-intro/main-intro.component");
var intro_nav_component_1 = require("./main/main-intro/intro-nav/intro-nav.component");
var intro_favorite_component_1 = require("./main/main-intro/intro-favorite/intro-favorite.component");
var intro_albums_component_1 = require("./main/main-intro/intro-albums/intro-albums.component");
var intro_popular_component_1 = require("./main/main-intro/intro-popular/intro-popular.component");
var album_item_component_1 = require("./app-shared/album-item/album-item.component");
var enter_component_1 = require("./enter/enter.component");
var enter_header_component_1 = require("./enter/enter-header/enter-header.component");
var enter_main_component_1 = require("./enter/enter-main/enter-main.component");
var auth_component_1 = require("./enter/enter-main/auth/auth.component");
var era_component_1 = require("./enter/enter-main/era/era.component");
var instrument_component_1 = require("./enter/enter-main/instrument/instrument.component");
var environment_component_1 = require("./enter/enter-main/environment/environment.component");
var ryhtm_component_1 = require("./enter/enter-main/ryhtm/ryhtm.component");
var intro_playlist_component_1 = require("./main/main-intro/intro-playlist/intro-playlist.component");
var intro_songs_component_1 = require("./main/main-intro/intro-playlist/intro-songs/intro-songs.component");
var intro_comments_component_1 = require("./main/main-intro/intro-playlist/intro-comments/intro-comments.component");
var intro_content_component_1 = require("./main/main-intro/intro-content/intro-content.component");
var intro_content2_component_1 = require("./main/main-intro/intro-content2/intro-content2.component");
var current_album_1 = require("./app-shared/current-album");
var current_user_1 = require("./app-shared/current-user");
var login_component_1 = require("./enter/enter-main/login/login.component");
var app_UserService_1 = require("./app.UserService");
var enter_footer_component_1 = require("./enter/enter-footer/enter-footer.component");
var appRoutes = [
    { path: '', redirectTo: '/signUp', pathMatch: 'full' },
    // {
    //   path:'enter',
    //     component: EnterComponent,
    //     children:[
    //       {path: 'signUp', component: AuthComponent, outlet:'signUp'}
    //     ]
    // },
    { path: 'signUp', component: auth_component_1.AuthComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'years', component: era_component_1.EraComponent },
    { path: 'instrument', component: instrument_component_1.InstrumentComponent },
    { path: 'environment', component: environment_component_1.EnvironmentComponent },
    { path: 'ryhtm', component: ryhtm_component_1.RyhtmComponent },
    { path: 'content2/:id', component: intro_content2_component_1.IntroContent2Component },
    { path: 'main', component: main_intro_component_1.MainIntroComponent },
    { path: 'favorite', component: intro_content_component_1.IntroContentComponent },
    { path: 'home', component: intro_content_component_1.IntroContentComponent },
    { path: 'content2/:id/favorite', component: intro_content_component_1.IntroContentComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            comments_component_1.CommentsComponent,
            main_component_1.MainComponent,
            header_component_1.HeaderComponent,
            player_component_1.PlayerComponent,
            footer_component_1.FooterComponent,
            main_intro_component_1.MainIntroComponent,
            intro_nav_component_1.IntroNavComponent,
            intro_favorite_component_1.IntroFavoriteComponent,
            intro_albums_component_1.IntroAlbumsComponent,
            intro_popular_component_1.IntroPopularComponent,
            album_item_component_1.AlbumItemComponent,
            enter_component_1.EnterComponent,
            enter_header_component_1.EnterHeaderComponent,
            enter_main_component_1.EnterMainComponent,
            auth_component_1.AuthComponent,
            era_component_1.EraComponent,
            instrument_component_1.InstrumentComponent,
            environment_component_1.EnvironmentComponent,
            ryhtm_component_1.RyhtmComponent,
            intro_playlist_component_1.IntroPlaylistComponent,
            intro_songs_component_1.IntroSongsComponent,
            intro_comments_component_1.IntroCommentsComponent,
            intro_content_component_1.IntroContentComponent,
            intro_content2_component_1.IntroContent2Component,
            login_component_1.LoginComponent,
            enter_footer_component_1.EnterFooterComponent,
        ],
        imports: [
            router_1.RouterModule.forRoot(appRoutes),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng2_youtube_player_1.YoutubePlayerModule,
        ],
        exports: [router_1.RouterModule],
        providers: [
            app_SongService_1.SongService,
            app_AlbumService_1.AlbumService,
            app_CommentService_1.CommentService,
            current_album_1.CurrentAlbum,
            current_user_1.CurrentUser,
            app_component_1.AppComponent,
            app_UserService_1.UserService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map