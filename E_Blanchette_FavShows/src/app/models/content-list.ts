import { IContent } from "./icontent";

export class ContentList {
  private _shows: IContent[];
  constructor() {
    this._shows = [];
  }
  get shows(): IContent[]{
    return this._shows;
  }

  addContent(newShows: IContent) {
    this._shows.push(newShows);
  }

  arrayLength(): number{
    return this._shows.length;
  }

  toString(index: number): string{
    const show: IContent = this._shows[index];
    let prettyHtmlOutput = `
      <h2>${show.title}</h2>
      <img src="${show.imgSrc}">
      <p>${show.description}</p>
      <div class="meta-data">
        <span class="author">${show.author}</span>
        <span class="type">${show.type}</span>
      </div>`; 

    if (show.tags) 
    {
      prettyHtmlOutput += '<div class="tags">'; 

      
      show.tags?.forEach((tag) => {
        prettyHtmlOutput += `<span>${tag}</span>`; 
      });

      prettyHtmlOutput += "</div>"; 
    }
    return prettyHtmlOutput;
  }
}

