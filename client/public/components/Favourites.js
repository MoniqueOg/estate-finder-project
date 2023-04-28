// Favorites management
// File name: favorites.js
// Functionality: This file will contain functions 
// to manage the user's list of favorite properties. 
// Functions such as getFavorites and addFavorite will be included to 
// retrieve the list of favorite properties and add new properties to the list.

// CRUD add these to server folder and add to server.js file
const Favorite = require('../models/favorite');

function getFavorites () {
  return new Promise((resolve, reject) => {
    Favorite.find({}, (err, favorites) => {
      if (err) {
        reject(err);
      } else {
        resolve(favorites);
      }
    });
  });
}

function addFavorite (favorite) {
  return new Promise((resolve, reject) => {
    Favorite.create(favorite, (err, favorite) => {
      if (err) {
        reject(err);
      } else {
        resolve(favorite);
      }
    });
  });
}

function deleteFavorite (id) {
  return new Promise((resolve, reject) => {
    Favorite.findByIdAndRemove(id, (err, favorite) => {
      if (err) {
        reject(err);
      } else {
        resolve(favorite);
      }
    });
  });
}

function getFavoriteById (id) {
  return new Promise((resolve, reject) => {
    Favorite.findById(id, (err, favorite) => {
      if (err) {
        reject(err);
      } else {
        resolve(favorite);
      }
    });
  });
}

function getFavoriteByCriteria (criteria) {
  return new Promise((resolve, reject) => {
    Favorite.find(criteria, (err, favorite) => {
      if (err) {
        reject(err);
      } else {
        resolve(favorite);
      }
    });
  });
}

function getFavoriteByLocation (location) {
    return new Promise((resolve, reject) => {
        Favorite.find({ location: location }, (err, favorite) => {
        if (err) {
            reject(err);
        } else {
            resolve(favorite);
        }
        });
    });
    }

module.exports = {
    getFavorites,
    addFavorite,
    deleteFavorite,
    getFavoriteById,
    getFavoriteByCriteria,
    getFavoriteByLocation
};

// Compare this snippet from client/public/components/Property.js: