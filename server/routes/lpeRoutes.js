// This isn't the database we're using it is just 
// a filler to show what type of content would be displayed


// const { ObjectId } = require('mongodb');
// // ! DO NOT DELETE THE COMMENT BLOCK BELOW
// /**
//  * @param {import('express').Express} app - The Express instance
//  * @param {import('mongodb').Db} db - The Db instance.
//  */
// const glossaryRoutes = (app, db) => {
//   /**
//    * Retrieves the profiles collection from Mongo db
//    * @returns Collection<Document>
//    */
//   const glossaryCollection = () => db.collection("terms");

//   /**
//    * Middleware handler for GET requests to /api/profile path
//    */
//   app.get(`/api/trading-glossary`, async (req, res) => {
//     // Waits for asynchronous `find()` operation to complete and converts results to array
//     const terms = await glossaryCollection().find({}).toArray();

//     return res.status(200).send(terms);
//   });

// /**
//  * Middleware handler for GET requests to /api/profile/:id path
//  */
//   app.get('/api/trading-glossary/:id', async (req, res) => {
//     const termId = req.params.id;
//     const term = await glossaryCollection().find({ _id: new ObjectId(termId) });
//     if (!term) {
//       return res.status(404).send('Term not found');
//     }
//     return res.status(200).send(term);
//   });

//   /**
//    * Middleware handler for POST requests to /api/profile path
//    */
//   app.post('/api/trading-glossary', async (req, res) => {
//     const newTerm = req.body;
//     const result = await glossaryCollection().insert(newTerm);
//     return res.status(201).send(result.ops[0]);
//   });

//   /**
//    * Middleware handler for PUT requests to /api/profile/:id path
//    */
//   app.put('/api/trading-glossary/:id', async (req, res) => {
//     const termId = req.params.id;
//     const updatedTerm = req.body;
//     const result = await glossaryCollection().update(
//       { _id: new ObjectId(termId) },
//       { $set: updatedTerm }
//     );
//     if (result.modifiedCount === 0) {
//       return res.status(404).send('Term not found');
//     }
//     return res.status(200).send('Term updated successfully');
//   });

//   /**
//    * Middleware handler for DELETE requests to /api/profile/:id path
//    */
//   app.delete('/api/trading-glossary/:id', async (req, res) => {
//     const termId = req.params.id;
//     const result = await glossaryCollection().deleteOne({ _id: new ObjectId(termId) });
//     if (result.deletedCount === 0) {
//       return res.status(404).send('Term not found');
//     }
//     return res.status(200).send('Term deleted successfully');
//   });
// }

// module.exports = glossaryRoutes;
