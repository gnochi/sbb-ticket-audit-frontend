import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() settingsSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.settingsSelected.emit(feature);
  }

}
