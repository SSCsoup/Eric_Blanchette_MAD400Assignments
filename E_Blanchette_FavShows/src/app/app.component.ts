import { Component } from '@angular/core';
import { ContentList } from './models/content-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E_Blanchette_FavShows';
  showList: ContentList;

  constructor() {
    this.showList = new ContentList(); // calls the constructor from the ContentList object definition we wrote
    this.showList.addContent({
      id: 0,
      title: "Attack on Titan",
      description: "anime about kid who wants to fight titans",
      author: "Hajime Isayama",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg",
      type: "Shonen",
      tags: ["Horror", "Anime", "Drama"]
    });
    this.showList.addContent({
      id: 1,
      title: "One Peice",
      description: "anime about a kid who wants to become the king of pirates",
      author: "Eiichiro Oda",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
      type: "Shonen",
      tags: ["Anime", "Fantasy", "Comedy"]
    });
    this.showList.addContent({
      id: 2,
      title: "Demon Slayer",
      description: "a kid who slays demons",
      author: "Koyoharu Gotouge",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg/220px-Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg",
      type: "Shonen",
      tags: ["Anime", "Adventure", "Fantasy"]
    });
    this.showList.addContent({
      id: 3,
      title: "Toradora",
      description: "two teenagers fall in love",
      author: "Yuyuko Takemiya",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Toradora%21_light_novel_volume_1_cover.jpg/220px-Toradora%21_light_novel_volume_1_cover.jpg",
      type: "Drama",
      tags: ["Slice of life", "Drama", "Comedy"]
    });
  }
}
