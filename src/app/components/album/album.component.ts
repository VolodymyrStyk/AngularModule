import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../models/Album";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input('album')
  album: Album;

  constructor() {
  }

  ngOnInit(): void {
  }

}
