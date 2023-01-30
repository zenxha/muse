class Fan {
    constructor(username) {
      this.username = username;
    }
  }
  
  class Artist extends Fan {
    constructor(username, type) {
      super(username);
      this.type = type;
    }
  
    getArtistType() {
      throw new Error('getArtistType method must be implemented by subclasses');
    }
  }
  
  class Singer extends Artist {
    constructor(username) {
      super(username, 'singer');
    }
  
    getArtistType() {
      return this.type;
    }
  }
  
  class Dancer extends Artist {
    constructor(username) {
      super(username, 'dancer');
    }
  
    getArtistType() {
      return this.type;
    }
  }
  