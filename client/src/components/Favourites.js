// Add this file to the server folder and add to server.js file

import { ObjectId } from "mongodb";
import { getDb } from "./mongo";

// Retrieve the user's list of favorite properties
export async function getFavorites(userId) {
  const db = await getDb();
  const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
  return user.favorites;
}

// Add a property to the user's list of favorite properties
export async function addFavorite(userId, propertyId) {
  const db = await getDb();
  const result = await db.collection("users").updateOne(
    { _id: new ObjectId(userId) },
    { $addToSet: { favorites: new ObjectId(propertyId) } }
  );
  return result.modifiedCount > 0;
}

// CRUD add these to server folder and add to server.js file
// const Favorite = require('../models/favorite');

// function getFavorites () {
//   return new Promise((resolve, reject) => {
//     Favorite.find({}, (err, favorites) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(favorites);
//       }
//     });
//   });
// }

// function addFavorite (favorite) {
//   return new Promise((resolve, reject) => {
//     Favorite.create(favorite, (err, favorite) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(favorite);
//       }
//     });
//   });
// }

// function deleteFavorite (id) {
//   return new Promise((resolve, reject) => {
//     Favorite.findByIdAndRemove(id, (err, favorite) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(favorite);
//       }
//     });
//   });
// }

// function getFavoriteById (id) {
//   return new Promise((resolve, reject) => {
//     Favorite.findById(id, (err, favorite) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(favorite);
//       }
//     });
//   });
// }

// function getFavoriteByCriteria (criteria) {
//   return new Promise((resolve, reject) => {
//     Favorite.find(criteria, (err, favorite) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(favorite);
//       }
//     });
//   });
// }

// function getFavoriteByLocation (location) {
//     return new Promise((resolve, reject) => {
//         Favorite.find({ location: location }, (err, favorite) => {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(favorite);
//         }
//         });
//     });
//     }

// module.exports = {
//     getFavorites,
//     addFavorite,
//     deleteFavorite,
//     getFavoriteById,
//     getFavoriteByCriteria,
//     getFavoriteByLocation
// };

// // Compare this snippet from client/public/components/Property.js: