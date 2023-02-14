import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { ShowService } from '../service/show.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{
  showList: IContent[];

  constructor(private showService: ShowService) {
    this.showList = [];
  }

  ngOnInit(): void {
    this.showList.getContent().subscribe((shows: IContent[]) => {
      console.log("Getting the game list");
      this.showList = shows;
    });

    this.showList.getContentItem(1).subscribe((show: IContent) => {
      console.log("Testing getting a single content item: ", show);
    });

    let testShowToUpdate: IContent = {
      id: 1, 
      title: "",
      description: "",
      author: "",
      imgSrc: "",
      type: "",
    };

    this.showList.addContentItem(testShowToAdd).subscribe((shows: IContent[]) => {
         console.log("Testing adding a game to the array: ", shows);
       });

    this.showList.updateContentItem(testShowToUpdate).subscribe((shows: IContent[]) => {
      console.log("Testing updating a show in the array - Attack on Titan should be replaced: ", shows);
    });


    this.showList.deleteContentItem(2).subscribe((show: IContent) => {
      console.log("Testing deleting a single item: ", show);
    });


  }
  
}
