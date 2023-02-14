import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INVALIDSHOW, SHOWS } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor() { }

  getContent(): Observable<IContent[]> {
    return of(SHOWS);
  }

  getContentItem(index: number): Observable<IContent> {
    console.warn("Got to get content item");
    let showFound: IContent | undefined;
    for (let i = 0; i < SHOWS.length; i++){
      if (SHOWS[i].id == index) {
        showFound = SHOWS[i];
        break;
      }
    }
    if (!showFound) { 
      return of(INVALIDSHOW);
    }
    console.warn("Got the item", showFound);
    return of(showFound);
  }

  addContentItem(item: IContent): Observable<IContent[]>{
    if (SHOWS.find((show: IContent) => show.id === item.id) == undefined)
    {
      SHOWS.push(item);
    }
    return of(SHOWS);
  }

  updateContentItem(item: IContent): Observable<IContent[]>{
    let indexOfShowToUpdate = SHOWS.findIndex((show: IContent) => {
      return show.id === item.id;
    });
    if (indexOfShowToUpdate !== -1) {
      SHOWS[indexOfShowToUpdate] = item;
    }
    return of(SHOWS);
  }

  deleteContentItem(index: number): Observable<IContent> {
    let showFound: IContent | undefined;
    for (let i = 0; i < SHOWS.length; i++){
      if (SHOWS[i].id === index) {
        showFound = SHOWS[i];
        delete SHOWS[i];
        console.log("Did the show get deleted? ", SHOWS);
        break;
      }
    }
    if (!showFound) { 
      return of(INVALIDSHOW);
    }
    return of(showFound);
  }


}
