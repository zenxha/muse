class User {
  _userID: string;
  _

    constructor(userID: string) {
      this._userID = userID;
      //query the userData
    }
  
    getArtistType() {
      throw new Error('getArtistType method must be implemented by subclasses');
    }
}

class UserData extends User {
    constructor()
}