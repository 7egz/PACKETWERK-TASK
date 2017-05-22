import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-users-albums',
  templateUrl: './users-albums.component.html',
  styleUrls: ['./users-albums.component.css']
})
export class UsersAlbumsComponent implements OnInit {
  @Input() userAlbum:any;

  ngOnInit() {
  }

}
