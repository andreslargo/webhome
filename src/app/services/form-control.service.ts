import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  matAutoComplete(){
    return ['Andrés', 'Felipe', 'Largo', 'Rodriguez'];
  }

  checkBox(){
    return true;
  }

  date(){
    return new Date();
  }

  textArea(){
    return "Lorem Ipsum dolor amit sir";
  }

  radioButton(){
    return '1';
  }

  selectedOption(){
    return 'audi';
  }

  slider(){
    return 50;
  }

  check2(){
    return true;
  }
}

