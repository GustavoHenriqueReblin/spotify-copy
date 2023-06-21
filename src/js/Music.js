export class Music {
    constructor(title, artist, duration, isFavorite, image, src) {
      this._title = title;
      this._artist = artist;
      this._duration = duration;
      this._isFavorite = isFavorite;
      this._image = image;
      this._src = src;
    }
  
    get title() {
      return this._title;
    }
  
    set title(newTitle) {
      this._title = newTitle;
    }
  
    get artist() {
      return this._artist;
    }
  
    set artist(newArtist) {
      this._artist = newArtist;
    }
  
    get duration() {
      return this._duration;
    }
  
    set duration(newDuration) {
      this._duration = newDuration;
    }

    get isFavorite() {
        return this._isFavorite;
    }
    
    set isFavorite(newIsFavorite) {
        this._isFavorite = newIsFavorite;
    }

    get image() {
        return this._image;
    }
    
    set image(newImage) {
        this._image = newImage;
    }

    get src() {
        return this._src;
    }
    
    set src(newSrc) {
        this._src = newSrc;
    }
  }