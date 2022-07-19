import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import GlobalStyle from "../../globalStyles";
import ScrollToTop from "../../ScrollToTop";
import Navbar3 from "../../components/Navbar3/Navbar3";
import { 
  VentureWrapper,
  VentureContainer,
  VentureInformation,
  Heading,
  Poster,
  Description,
  VentureLabel,
  VentureLink
} from "./Ventures.styles";
import Footer3 from "../../components/Footer3/Footer3";

import { AccountContext, AccountContextProvider } from "../../components/Contexts/AccountContext";
import { ModalContextProvider } from "../../components/Contexts/ModalContext";

const Venture = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const account = React.useContext(AccountContext);
  const [ventureInformation, setVentureInformation] = React.useState({
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


  React.useEffect(() => {
    const ventureAddress = searchParams.get(ventureAddress);
    ventureAddress && fetchVentureInformation(ventureAddress);
  }, [searchParams, refreshData]); // refresh data when changes made

  // Data to be shown on page
  const {
    name,
    symbol,
    sharesOutstanding,
    balance,
    venturerAddress,
    listingTimestamp,
    description,
    ventureAddress,
    imageUrl
  } = ventureInformation;

  return (
    <>
      <AccountContextProvider>
        <ModalContextProvider>
          <GlobalStyle />
          <ScrollToTop />
          <Navbar3 />
          <VentureWrapper>
            <VentureContainer>
              <VentureInformation>
                <Heading>
                  {`${name}`}
                </Heading>
                <Poster src={imageUrl} />
                <Description>
                  {description}
                </Description>
                <VentureLabel>Venture Address</VentureLabel>
                <VentureLink href={`https://etherscan.io/address/${ventureInformation.ventureAddress}`}></VentureLink>
                <VentureLabel>Venturer Address</VentureLabel>
                <VentureLink href={`https://etherscan.io/address/${ventureInformation.venturerAddress}`}></VentureLink>
                <VentureLabel>Venture Balance</VentureLabel>
                <Description>{balance}</Description>
                <VentureLabel>Shares Outstanding</VentureLabel>
                <Description>{sharesOutstanding}</Description>
              </VentureInformation>
            </VentureContainer>
          </VentureWrapper>
          <Footer3 />
        </ModalContextProvider>
      </AccountContextProvider>
    </>
  )
}

export default Venture