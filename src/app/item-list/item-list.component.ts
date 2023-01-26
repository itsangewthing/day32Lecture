import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  // receiving data from the parent 
  // decorate the property with @Input()
 @Input() itemList: any[] = [];
@Output() newItemEvent = new EventEmitter<string>();

//allows the item to be emitted back to the parent 
// The onItemClick() function uses the @Output(), 
// newItemEvent, to raise an event with the value the user types into the <input>.
onItemClick(item:any){
  this.newItemEvent.emit(item);
} 

}
