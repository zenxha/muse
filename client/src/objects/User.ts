import Post from './Post'

enum Language {English, Korean, Japanese}

export class User {
  private _userID: string;
  private _userName: string;
  private _posts: [Post];
  private _dateCreated: Date;
  private _profileURL: string;
  private _email: string;
  private _age: number;
  private _isPremium: boolean;
  //Personal data
  private _interest: [string];
  private _language: Language;
  private _languageOfInterest: [Language];
  //Login method
  private _password: string;

  constructor(userID: string) {
    this._userID = userID;
    //query the userData
  }
  
  

  //Public functions
  public getUser() {
    throw new Error('getUser method must be implemented by subclasses');
  }

  public set userID(id: string) { this._userID = id; }
  public set userName(name: string) { this._userName = name; }
  //public set posts(posts: [Post]) { this._posts = posts; }
  public set dateCreated(date: Date) { this._dateCreated = date; }
  public set profileURL(url: string) { this._profileURL = url; }
  public set email(email: string) { this._email = email; }
  public set age(age: number) {
    if(0 <= age || age <= 200) { this._age = age; }
    else { this._age = 0; }
  }
  public set isPremium(premium: boolean) { this.isPremium = premium; }
  public set language(lan: Language) { this._language = lan; }
  public set lanOfInterest(loi: [Language]) { this._languageOfInterest = loi; }
  public set password(pwd: string) { this._password = pwd; }
}

export class UserData extends User {
    constructor(
      userID: string, 
      userName: string, 
      dateCreated: Date, 
      profileURL: string, 
      email: string, 
      age: number,
      premium: boolean,
      langauge: Language,
      lanOfInterest: [Language],
      password: string
    ) {
      super(userID);
      this.userID = userID;
      this.dateCreated = dateCreated;
      this.userName = userName;
      this.profileURL = profileURL;
      this.email = email;
      this.age = age;
      this.isPremium = premium;
      this.language = langauge;
      this.lanOfInterest = lanOfInterest;
      this.password = password;
    }
}

