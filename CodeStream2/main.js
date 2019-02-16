var userDataBase = [
  {
    username: 'user0',
    password: 'pword0'
  },
  {
    username: 'user1',
    password: 'pword1'
  },
  {
    username: 'user2',
    password: 'pword2'
  },
  {
    username: 'user3',
    password: 'pword3'
  },
  {
    username: 'user4',
    password: 'pword4'
  }
];

$(document).ready(function() {
    //capture when login button is clicked
    $('#login-submit').on('click', function() {
      //grab the input values and pass them the login function
      var uname = $('#username1').val();
      var pword = $('#password1').val();

      var result = login(uname, pword);
      alert(result);
    });
});

function login(_username, _password) {
  //iterate over the userdatabase to see if the supplied usernamd and password match any of the username/password in our database
  // if(_username == username && _password == password) {
  //   return true;
  // } else {
  //   return false;
  // }
  var result = false;

  for(var x = 0; x < userDataBase.length; x++) {
    var username = userDataBase[x].username;
    var password = userDataBase[x].password;

    // username = user0
    // password = pword0
    // username = user1
    // password = pword1
    // username = user2

    if(_username == username && _password == password)
    {
      result = true;
      break;
    }
    else
    {
      result = false;
    }
  }

  return result;
}
