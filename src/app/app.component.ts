import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControlService} from './services/form-control.service';
export interface User {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  myControl = new FormControl();
  options: string[];
  filteredOptions: Observable<string[]>;
  checked;
  date;
  text;
  favoriteSeason;
  selectedOption;
  value;
  checked2;

  constructor(private service: FormControlService){
    this.options =  this.service.matAutoComplete(); 
    this.checked = this.service.checkBox();
    this.date =  new FormControl(this.service.date());
    this.text = this.service.textArea();
    this.favoriteSeason = this.service.radioButton();
    this.selectedOption = this.service.selectedOption();
    this.value = this.service.slider(); 
    this.checked2 = this.service.check2();
  }

  async ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }}
