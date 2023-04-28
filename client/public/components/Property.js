// Property search and retrieval
// Property search and retrieval
// File name: property.js
// Functionality: This file will contain functions to search for 
// and retrieve properties from the database. 
// Functions such as getProperties and getPropertyById will be included
//  to retrieve a list of properties and a single property by its ID.

// CRUD add these to server folder and add to server.js file
function getProperties() {
    return new Promise((resolve, reject) => {
        Property.find({}, (err, properties) => {
            if (err) {
                reject(err);
            } else {
                resolve(properties);
            }
        });
    }
    );
}

function getPropertyById(id) {
    return new Promise((resolve, reject) => {
        Property.findById(id, (err, property) => {
            if (err) {
                reject(err);
            } else {
                resolve(property);
            }
        });
    }
    );
}

function getPropertyByCriteria(criteria) {
    return new Promise((resolve, reject) => {
        Property.find(criteria, (err, property) => {
            if (err) {
                reject(err);
            } else {
                resolve(property);
            }
        });
    }
    );
}

function getPropertyByLocation(location) {
    return new Promise((resolve, reject) => {
        Property.find({ location: location }, (err, property) => {
            if (err) {
                reject(err);
            } else {
                resolve(property);
            }
        });
    }
    );
}

function getPropertyByPrice(price) {
    return new Promise((resolve, reject) => {
        Property.find({ price: price }, (err, property) => {
            if (err) {
                reject(err);
            } else {
                resolve(property);
            }
        });
    }
    );
}

function getPropertyByType(type) {
    return new Promise((resolve, reject) => {
        Property.find({ type: type }, (err, property) => {
            if (err) {
                reject(err);
            } else {
                resolve(property);
            }
        });
    }
    );
}

function getPropertyByBedrooms(bedrooms) {



}
