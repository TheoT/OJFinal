
<<<<<<< HEAD
// /*
//  * GET home page.
//  */

exports.index = function(req, res){
	
  // res.render('index', { title: 'Follow.js', available_rooms:  });
=======
/*
 * GET home page.
 */
// var models = require('../models/models');

exports.index = function(req, res){
    // models.Room.find({ available: true }).exec(function (err, rooms) {
    //  if (err)
    //      return console.log("error looking up available rooms ", err);
    //  console.log(rooms)
        
    //  res.render('index', { title: 'Follow.js', rooms: rooms });
    // });
    res.render('index', {title: 'Follow.js'});
>>>>>>> d3608399c99068809eb8807821f41004926229af
};