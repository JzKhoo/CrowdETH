import { db } from "../../../firebase";

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const ventureSummaries = await db
        .collection("ventures")
        .get()
        .then((querySnapshot) => {
          const results = [];
          querySnapshot.forEach((doc) => {
            results.push({
              ventureAddress: doc.id,
              ...doc.data(),
            });
          });
          return results;
        });
      console.log("GET /ventures => ", ventureSummaries);
      return res.status(200).json(ventureSummaries);
    } catch (err) {
      console.error(err.message);
      return res.status(400).json({ error: err.message });
    }
  } else if (req.method === "POST") {
    try {
      const {
        ventureAddress,
        name,
        symbol,
        description,
        imageUrl,
        venturerAddress,
        listingTimestamp,
        targetCapital,
      } = req.body;

      console.log("POST /ventures => ", req.body);

      await db.collection("ventures").doc(ventureAddress).set({
        name,
        symbol,
        description,
        imageUrl,
        venturerAddress,
        listingTimestamp,
        targetCapital,
      });
      return res.status(200).json({});
    } catch (err) {
      console.error(err.message);
      return res.status(400).json({ error: err.message });
    }
  } else {
    return res.status(405).json({});
  }
};