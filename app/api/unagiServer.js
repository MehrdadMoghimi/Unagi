// require("es6-promise").preact-olyfill();
// require("isomorphic-fetch");
// var NativeModules = require("react-native");
// var AES = require("./nativeAES");
var Buffer = require("buffer").Buffer;
// constants
const IP = "138.197.114.83";
// const IP = "localhost";
const PORT = "3000";
const POST_LIMIT = "20";
const API_VERSION = 3;
const postURL = "http://" + IP + ":" + PORT + "/api/v" + API_VERSION + "/post";
const eventURL =
  "http://" + IP + ":" + PORT + "/api/v" + API_VERSION + "/event";
const userURL = "http://" + IP + ":" + PORT + "/api/v" + API_VERSION + "/user";
//-----------------------------------
// utils
var queryMaker = function(objects) {
  query = "?";
  for (var key in objects) {
    if (key == "location") {
      query += key + "=" + JSON.stringify(objects[key]) + "&";
    } else if (objects[key]) query += key + "=" + objects[key] + "&";
  }
  return query;
};
var fetchAndResponse = function(url, method, body) {
  var header = new Headers();
  header.set("Content-Type", "application/json");
  var request = {
    method,
    headers: header
  };
  if (method === "POST") request["body"] = JSON.stringify(body);
  return new Promise(function(resolve, reject) {
    fetch(url, request)
      .then(function(res) {
        if (res.status === 200) {
          return res.json();
        } else reject(res.status);
      })
      .then(function(res) {
        resolve(res);
      })
      .catch(function(error) {
        reject(error);
      });
  });
};
//-----------------------------------

//api functions

//authentication related functions================================
var signup = function(
  username,
  password,
  uuid,
  optionals = { name: "", surname: "", email: "", phone: "" }
) {
  var uid = new Buffer(uuid + username).toString("base64");
  //optionals
  var name = optionals.name;
  var surname = optionals.surname;
  var email = optionals.email;
  var phone = optionals.phone;
  //-----------------------
  var url = userURL + "/signup";
  var body = {
    username,
    password,
    userId: uid,
    name,
    surname,
    email,
    phone
  };
  return fetchAndResponse(url, "POST", body);
};

var signin = function(username, password, uuid) {
  var uid = new Buffer(uuid + username).toString("base64");
  var url = userURL + "/login";
  var body = {
    username,
    password,
    userId: uid
  };
  return fetchAndResponse(url, "POST", body);
};

var signupAndGetAccessToken = function(
  location,
  username,
  password,
  uuid,
  optionals = { name: "", surname: "", email: "", phone: "" }
) {
  return new Promise(function(resolve, reject) {
    var refreshToken, accessToken;
    signup(username, password, uuid, optionals)
      .then(function(res) {
        refreshToken = res.refreshToken;
        getAccessToken(location, refreshToken, uuid)
          .then(function(res2) {
            accessToken = res2.accessToken;
            resolve({ accessToken, refreshToken });
          })
          .catch(function(err) {
            reject("internal catch! " + err);
          });
      })
      .catch(function(err) {
        reject("outer catch!" + err);
      });
  });
};

var signinAndGetAccessToken = function(location, username, password, uuid) {
  return new Promise(function(resolve, reject) {
    var refreshToken, accessToken;
    signin(username, password, uuid)
      .then(function(res) {
        refreshToken = res.refreshToken;
        getAccessToken(location, refreshToken, uuid)
          .then(function(res2) {
            accessToken = res2.accessToken;
            resolve({ accessToken, refreshToken });
          })
          .catch(function(err) {
            reject("sign in internal catch! " + err);
          });
      })
      .catch(function(err) {
        reject("sign in outer catch!" + err);
      });
  });
};

var getAccessToken = function(location, refreshToken, uuid) {
  var url =
    userURL +
    "/access" +
    queryMaker({
      location,
      refreshToken,
      uuid
    });
  return fetchAndResponse(url, "GET", null);
};
//end of authentication field

//post related functions

var getAllPosts = function(location, accessToken, postLimit, before, hot) {
  var query = queryMaker({ location, accessToken, before, postLimit, hot });
  var url = postURL + query;
  return fetchAndResponse(url, "GET", null);
};

var submitPost = function(
  location,
  accessToken,
  content,
  parentId,
  name,
  parentName
) {
  var url =
    postURL +
    queryMaker({
      location,
      accessToken
    });
  var body = {
    content: content,
    parentId: parentId,
    name: name,
    parentName: parentName
  };
  return fetchAndResponse(url, "POST", body);
};

var getPostswithTag = function(location, accessToken, postLimit, before, tag) {
  var query = queryMaker({ location, accessToken, before, postLimit, tag });
  var url = postURL + +query;
  return fetchAndResponse(url, "GET", null);
};
//post field ends

//event related functions
var postEvent = function(location, accessToken, postId, type) {
  var url =
    eventURL +
    queryMaker({
      location,
      accessToken
    });

  var body = {
    type,
    userId: "12345678",
    postId
  };
  return fetchAndResponse(url, "POST", body);
};

var likePost = function(location, accessToken, postId) {
  return postEvent(location, accessToken, postId, "like");
};
var unlikePost = function(location, accessToken, postId) {
  return postEvent(location, accessToken, postId, "unlike");
};

var getReplies = function(location, accessToken, postId, before) {
  var url =
    postURL +
    "/replies" +
    queryMaker({
      location,
      accessToken,
      postId,
      before
    });
  return fetchAndResponse(url, "GET", null);
};
//event field ends

//user related functions
var getMyPosts = function(location, accessToken, postLimit, before) {
  var query = queryMaker({
    location,
    accessToken,
    before,
    postLimit,
    my: true
  });
  var url = postURL + query;
  return fetchAndResponse(url, "GET", null);
};
var getMyLikes = function(location, accessToken, postLimit, before) {
  var query = queryMaker({
    location,
    accessToken,
    postLimit,
    before
  });
  var url = postURL + "/mylikes" + query;
  return fetchAndResponse(url, "GET", null);
};
var getUser = function(location, accessToken) {
  var query = queryMaker({
    location,
    accessToken
  });
  var url = userURL + "/profile" + query;
  return fetchAndResponse(url, "GET", null);
};
var updateUser = function(location, accessToken, changes) {
  var body = {};
  var user = {};
  for (key in changes) {
    if (changes[key]) user[key] = changes[key];
  }
  body["user"] = user;
  var query = queryMaker({
    location,
    accessToken
  });
  var url = userURL + "/update" + query;
  return fetchAndResponse(url, "POST", body);
};
//user field ends

//end to end encryption----------------------------

//--------------------------------------------------

module.exports = {
  signup,
  signin,
  signinAndGetAccessToken,
  signupAndGetAccessToken,
  getAccessToken,
  getAllPosts,
  getReplies,
  submitPost,
  likePost,
  unlikePost,
  getMyLikes,
  getMyPosts,
  getUser,
  updateUser
};
