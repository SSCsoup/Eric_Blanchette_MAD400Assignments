import { Component, OnInit } from '@angular/core';
import { IContent } from './models/icontent';
import { ShowService } from './service/show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  singleShow?: IContent;
  title = 'E_Blanchette_FavShows';
  

  constructor(private showList: ShowService) {
    
  }
  ngOnInit(): void{
    this.getTheNewItem("3");
  }
  getTheNewItem(newIdNumber: string): void {
    console.warn("Getting an item: ", newIdNumber);
    this.showList.getContentItem(Number(newIdNumber)).subscribe((show: IContent) => {
      console.warn("Got the item: ", show);
       this.singleShow = show;
    });

  }
}
