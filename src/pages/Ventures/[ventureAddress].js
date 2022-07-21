import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  KeyValueContainer,
  VentureLabel,
  VentureLink,
  VentureNumber
} from "./Ventures.styles";
import InvestorForm from "../../components/InvestorForm/InvestorForm";
import Footer3 from "../../components/Footer3/Footer3";

// Testing
import TestImage from '../../images/Pitch.png'

// Backend
import { AccountContext, AccountContextProvider } from "../../components/Contexts/AccountContext";
import { ModalContextProvider } from "../../components/Contexts/ModalContext";
import { Venture } from "smart_contract/contracts";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const VentureAdd = () => {

  const location = useLocation().pathname.split("/").pop();

  const account = React.useContext(AccountContext);
  const [ventureInformation, setVentureInformation] = React.useState({
    name: "CrowdETH",
    symbol: "#$%^",
    sharesOutstanding: 10,
    balance: 20,
    venturerAddress: "CrowdETHAdminWebsite",
    listingTimestamp: "20/7/2022",
    description: "Hi this is an Orbital Project",
    ventureAddress: "CrowdETHUserWebsite",
    imageUrl: TestImage
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
        targetCapital,
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
        ventureAddress,
        listingTimestamp,
        venturerAddress,
        targetCapital,
        sharesOutstanding: parseInt(ventureInformation[2]),
        balance: parseInt(ventureInformation[5]),
        status: parseInt(ventureInformation[7]),
      };
      setVentureInformation({ ventureAddress, ...result });
    } catch (err) {
      console.error(err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  React.useEffect(() => {
    const ventureAddress = location;
    fetchVentureInformation(ventureAddress);
  }, [location, refreshData]); // refresh data when changes made

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
                  {name}
                </Heading>
                <Poster src={imageUrl} />
                <Description>{description}</Description>
                <KeyValueContainer>
                  <VentureLabel>Venture Address: </VentureLabel>
                  <VentureLink href={`https://etherscan.io/address/${ventureInformation.ventureAddress}`}>{ventureAddress}</VentureLink>
                </KeyValueContainer>
                <KeyValueContainer>
                  <VentureLabel>Venturer Address: </VentureLabel>
                  <VentureLink href={`https://etherscan.io/address/${ventureInformation.venturerAddress}`}>{venturerAddress}</VentureLink>
                </KeyValueContainer>
                <KeyValueContainer>
                  <VentureLabel>Venture Balance: </VentureLabel>
                  <VentureNumber>{balance}</VentureNumber>
                </KeyValueContainer>
                <KeyValueContainer>
                  <VentureLabel>Shares Outstanding: </VentureLabel>
                  <VentureNumber>{sharesOutstanding}</VentureNumber>
                </KeyValueContainer>
              </VentureInformation>
              <InvestorForm />
            </VentureContainer>
          </VentureWrapper>
          <Footer3 />
        </ModalContextProvider>
      </AccountContextProvider>
    </>
  )
}

export default VentureAdd