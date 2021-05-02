const functions = require("firebase-functions");

exports.getSubCollections = functions.https.onCall(async (data, context) => {
  const docPath = data.docPath;

  const collections = await admin.firestore().doc(docPath).listCollections();
  const collectionIds = collections.map((col) => col.id);

  return { collections: collectionIds };
});
