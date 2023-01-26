import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { animal } from '../models/animal';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent {
  
  form: animal ={
    id:0,
    name: '',
    lifespan: 0,
  }

  //handles submission button 
  onSubmit(_t4: any) {
    throw new Error('Method not implemented.');
    }

}
