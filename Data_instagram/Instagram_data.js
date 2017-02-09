var posts = [{
    id: 0,
    avatar: "img/adam.jpg",
    username: "Adam Levin",
    picture: "img/adam.jpg",
    like : 100,
    caption: [],
    commenter: "Ben",
    comment: "You are handsome!!!",
    number_of_comment: 100,
    time_of_comment: 10
  }, {
    id: 1,
    avatar: "img/trump.jpg",
    username: "Trump",
    picture: "img/trump.jpg",
    like : 65,
    caption: [],
    commenter: "Hillary",
    comment: "speechless!!!",
    number_of_comment: 90,
    time_of_comment: 5
  }];
exports.AllPosts = function(){
    return posts;
}
