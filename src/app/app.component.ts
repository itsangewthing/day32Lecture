import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'd32Lecture';

  items =[
    {name: 'Airpods', id:1, price:250 },
    {name: 'AirTags', id:2, price:150 },
    {name: 'Iphone Pro Max', id:3, price:2500 },
    {name: 'Ipad', id:4, price:1500 }
  ];


  selectedItem:any;
  // write a function here, to keep the data emitted from the child;
  // takes an argument in the form of a string and then adds that string to the items array.
  onItemReceived(item:any){
    this.selectedItem.push = item;
  }

}
