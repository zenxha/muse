class Post {
    _postID: string;
    _timeStamp: Date; //unix_epoch
    _upvotes: number;
    _content: string;
    _commentIDs: string[];
    constructor(postID:string, ) {
        this._postID = postID;
    }

}

export default Post;