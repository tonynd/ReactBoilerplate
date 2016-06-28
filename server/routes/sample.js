const express = require('express');
const router = express.Router();
const userSchema = require('./mongo');
const storage = [];
var id = 0;

// if there are data send from the frontend via body, use req.body
// if there are data being send from the frontend via query string like, http://localhost:3000/api/v0/sample/?q=hi
// use req.query -> this would print {q: "hi"}

router.get('/', (req, res) => {
  userSchema.find({}, 'userName userAddress userQuote',
      function(err, infos){
        if (err){
          throw err;
        }
        res.send({
            response: infos
        });
    });
});

router.post('/', (req, res) => {
  let addUser = new userSchema();
  //addUser._id = id;
  //id++;
  addUser.userName = req.body.userName;
  addUser.userAddress = req.body.userAddress;
  addUser.userQuote = req.body.userQuote;
  addUser.save(function(err){
    if (err){
      throw err;
    }
    console.log("User's info sent to db");
    userSchema.find({}, 'userName userAddress userQuote',
      function(err, infos){
        if (err){
          throw err;
        }
        res.send({
            response: infos
        });
    });
  });
});

router.put('/', (req, res) => {
  res.send({
    response: storage
  });
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  userSchema.remove({"_id": id}, function(err, infos) {
    if (err){
      throw err;
    }
    console.log("User's info removed from db");

    res.send({
      response: infos
    });
    {/*userSchema.find({}, 'userName userAddress userQuote',
      function(err, infos){
        if (err){
          throw err;
        }

        console.log
        res.send({
          response: infos
        });
      });*/}
  });
});

module.exports = router;
