import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private _apiKey: string = 'pWUUk26KgZSRqLw4slQW47MCHAiqKlJy';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs'

  constructor( private http: HttpClient ) {
    this.getLocalStorage();
    this.searchTag(this.tagHistory[0] || '');
  }

  get tagHistory() {
    return [...this._tagsHistory];
  }

  private organizeTagsHistory(tag: string): void {
    tag.toLowerCase();
    if(this._tagsHistory.includes( tag )){
      this._tagsHistory = this._tagsHistory.filter( t => t !== tag );
    }
    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('tags', JSON.stringify(this._tagsHistory));
  }

  private getLocalStorage(): void {
    if(localStorage.getItem('tags')){
      this._tagsHistory = JSON.parse(localStorage.getItem('tags')!);
    }
  }

  searchTag( tag: string ) {
    if(tag.length === 0) return;
    this.organizeTagsHistory( tag );

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
      .subscribe( (resp) => {
        this.gifList = resp.data;
        console.log(this.gifList);
      })

  }
}
