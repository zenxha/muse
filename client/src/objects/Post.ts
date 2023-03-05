class Post {
    _postID: string;
    _timeStamp: Date; //unix_epoch
    _upvotes: number;
    _content: string;
    _commentIDs: string[];
    constructor(postID) {
        this._postID = postID;
    }

}