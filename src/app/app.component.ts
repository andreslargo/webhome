import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControlService} from './services/form-control.service';
import Data from './models/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  myControl = new FormControl();
  options: string[];
  filteredOptions: Observable<string[]>;
  req: Data[];
  date;

  constructor(private service: FormControlService){
    this.req = this.service.info();
    this.date =  new FormControl(this.req[0].date);    
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

    return this.req['options'].filter(option => option.toLowerCase().includes(filterValue));
  }}
