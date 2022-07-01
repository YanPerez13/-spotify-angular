import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: any = {
    cover: 'https://media.resources.festicket.com/www/artists/AlanWalker.jpg',
    album: 'NOSE',
    name: 'Alone'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
