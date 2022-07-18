import { Venture } from "../../../../smart_contract/contracts";
import { db } from "../../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default async (req, res) => {
  const ventureAddress = req.query.ventureAddress;

  if (req.method !== "GET") {
    return res.status(405).json({});
  }
  try {
    const ventureContract = Venture(ventureAddress);
    const ventureInformation = await ventureContract.methods
      .getVentureInformation()
      .call();

    const {
      name,
      symbol,
      description,
      imageUrl,
      venturerAddress,
      listingTimestamp,
      targetAmount,
    } = await getDoc(doc(db, "ventures", ventureAddress))
      .then((doc) => {
        if (doc.exists()) {
          return doc.data();
        } else {
          throw new Error("Venture does not exist");
        }
      });
    
    const result = {
      name,
      symbol,
      description,
      imageUrl,
      campaignAddress,
      listingTimestamp,
      managerAddress,
      targetAmount,
      sharesOutstanding: parseInt(ventureInformation[2]),
      balance: parseInt(ventureInformation[5]),
      status: parseInt(ventureInformation[7]),
    };

    console.log("GET /ventures/[ventureAddress] => ", result);
    return res.status(200).json(result);
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({ error: err.message });
  }
};