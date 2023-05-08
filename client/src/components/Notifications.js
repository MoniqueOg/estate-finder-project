const notifications = [];

// function to create a new notification
function createNotification(propertyId, criteria) {
  const notification = {
    id: notifications.length + 1,
    propertyId: propertyId,
    criteria: criteria,
    date: new Date()
  };
  notifications.push(notification);
  return notification;
}

// function to get all notifications for a user
function getNotifications(userId) {
  return notifications.filter(notification => notification.userId === userId);
}

module.exports = {
  createNotification,
  getNotifications
};


// CRUD add these to server folder and add to server.js file

//const Notification = require('../models/notification');

// function getNotifications () { 
//   return new Promise((resolve, reject) => {
//     Notification.find({}, (err, notifications) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(notifications);
//       }
//     });
//   });
// }

// function createNotification (notification) {
//     return new Promise((resolve, reject) => {
//         Notification.create(notification, (err, notification) => {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(notification);
//         }
//         });
//     });
//     }

// function deleteNotification (id) {
//     return new Promise((resolve, reject) => {

//     });
// }

