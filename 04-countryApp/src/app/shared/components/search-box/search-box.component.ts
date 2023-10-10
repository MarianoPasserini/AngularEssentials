import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placerHolder: string = 'Search...';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  public emitValue( term: string ): void {
    this.onValue.emit(term);
  }
}
