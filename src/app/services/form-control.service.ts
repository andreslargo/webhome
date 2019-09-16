import { Injectable } from '@angular/core';
import Data from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  Data: Data[] = [
    {
      options: ['Andres', 'Largo'], 
      checkBox: true, 
      date: new Date("2019-01-16"), 
      textArea: 'Soy muy prooooooooo', 
      radioButton: '1', 
      selectedOption: 'audi', 
      slider: 60, 
      checkbox2: true, 
      input: 'Hola muundo'
    }
  ];
  
  constructor() { }

  info(){
    return this.Data;
  }

}

