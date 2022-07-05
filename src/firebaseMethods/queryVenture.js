import { Venture } from "../../smart_contract/contracts";
import { db } from "../firebase";

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
            managerAddress,
            listingTimestamp,
            targetAmount,
        } = await db
            .collection("ventures")
            .doc(ventureAddress)
            .get()
            .then((doc) => {
                if (doc.exists) {
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
            ventureAddress,
            listingTimestamp,
            venturerAddress,
            targetAmount,
            sharesOutstanding: parseInt(ventureDetails[2]),
            balance: parseInt(ventureDetails[5]),
            status: parseInt(ventureDetails[7]),
        };

        console.log("GET /venture/[ventureAddress] => ", result);
        return res.status(200).json(result);
    } catch (err) {
        console.error(err.message);
        return res.status(400).json({ error: err.message });
    }
};