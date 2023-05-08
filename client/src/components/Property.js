import React from 'react';
import { getProperties } from './property';

const Property = require('./models/property');

// function to get all properties
async function getProperties() {
  try {
    const properties = await Property.find();
    return properties;
  } catch (error) {
    throw new Error(`Failed to get properties: ${error.message}`);
  }
}

// function to get a property by ID
async function getPropertyById(id) {
  try {
    const property = await Property.findById(id);
    return property;
  } catch (error) {
    throw new Error(`Failed to get property by ID: ${error.message}`);
  }
}

// function to search for properties that match the given criteria
async function searchProperties(criteria) {
  try {
    const properties = await Property.find(criteria);
    return properties;
  } catch (error) {
    throw new Error(`Failed to search for properties: ${error.message}`);
  }
}

module.exports = {
  getProperties,
  getPropertyById,
  searchProperties
};


// // CRUD add these to server folder and add to server.js file
// function getProperties() {
//     return new Promise((resolve, reject) => {
//         Property.find({}, (err, properties) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(properties);
//             }
//         });
//     }
//     );
// }

// function getPropertyById(id) {
//     return new Promise((resolve, reject) => {
//         Property.findById(id, (err, property) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(property);
//             }
//         });
//     }
//     );
// }

// function getPropertyByCriteria(criteria) {
//     return new Promise((resolve, reject) => {
//         Property.find(criteria, (err, property) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(property);
//             }
//         });
//     }
//     );
// }

// function getPropertyByLocation(location) {
//     return new Promise((resolve, reject) => {
//         Property.find({ location: location }, (err, property) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(property);
//             }
//         });
//     }
//     );
// }

// function getPropertyByPrice(price) {
//     return new Promise((resolve, reject) => {
//         Property.find({ price: price }, (err, property) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(property);
//             }
//         });
//     }
//     );
// }

// function getPropertyByType(type) {
//     return new Promise((resolve, reject) => {
//         Property.find({ type: type }, (err, property) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(property);
//             }
//         });
//     }
//     );
// }

// function getPropertyByBedrooms(bedrooms) {



// }
