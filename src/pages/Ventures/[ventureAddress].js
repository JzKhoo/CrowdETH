import React from "react";
import { AccountContext } from "../../components/Contexts/AccountContext";
import { useRouter } from 'next/router';

function Venture() {
const account = React.useContext(AccountContext);
  const [ventureDetails, setVentureInformation] = React.useState({
    name: "",
    symbol: "",
    sharesOutstanding: 0,
    balance: 0,
    venturerAddress: "",
    listingTimestamp: "",
    description: "",
    ventureAddress: "",
  });
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [refreshData, setRefreshData] = React.useState({});

  const toggleRefreshData = () => {
    setRefreshData({});
  };

  const fetchVentureInformation = async (ventureAddress) => {
    try {
      setLoading(true);
      const ventureDetails = await fetch(
        `/../api/ventures/${ventureAddress}`
      ).then((res) => res.json());
      setVentureInformation({ ventureAddress, ...ventureInformation });
    } catch (err) {
      console.error(err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const router = useRouter();

  React.useEffect(() => {
    const ventureAddress = router.query.ventureAddress;
    ventureAddress && fetchVentureInformation(ventureAddress);
  }, [router.query, refreshData]); // refresh data when changes made

  return {}
}

export default Venture