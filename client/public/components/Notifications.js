// Notification management
// File name: notifications.js
// Functionality: This file will contain functions to manage notifications
//  for new properties that match the user's criteria.
//   Functions such as createNotification and getNotifications will be
//    included to create new notifications and retrieve the list of notifications.

// CRUD add these to server folder and add to server.js file

//const Notification = require('../models/notification');

function getNotifications () { 
  return new Promise((resolve, reject) => {
    Notification.find({}, (err, notifications) => {
      if (err) {
        reject(err);
      } else {
        resolve(notifications);
      }
    });
  });
}

function createNotification (notification) {
    return new Promise((resolve, reject) => {
        Notification.create(notification, (err, notification) => {
        if (err) {
            reject(err);
        } else {
            resolve(notification);
        }
        });
    });
    }

function deleteNotification (id) {
    return new Promise((resolve, reject) => {

    });
}

