import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor (private GifsService: GifsService) { }

  public clickableGifs: Gif[] = [];

  get tags(){
    return this.GifsService.tagHistory;
  }

  public searchTag(tag: string): void {
    this.GifsService.searchTag(tag);
  }

}
