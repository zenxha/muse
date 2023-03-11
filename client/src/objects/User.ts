class User {
  private _userID: string;

    constructor(userID: string) {
      this._userID = userID;
      //query the userData
    }
  
    getUser() {
      throw new Error('getUser method must be implemented by subclasses');
    }
}

class UserData extends User {
  private _userName: string;
  private _postIDs: string;
  private _dateCreated: Date;
  private _profileURL: string;
  private _email: string;
  private _age: number;
  private _isPremium: boolean;
  //Personal data
  private _interest: [string];
  

    constructor(userID: string, userName: string, postIDs: string, ) {
      super(userID);
      
    }
}