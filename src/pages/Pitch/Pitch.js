import React, { useState } from 'react';
import { useRouter } from 'next/router';
import GlobalStyle from '../../globalStyles';
import ScrollToTop from '../../ScrollToTop';
import Navbar3 from '../../components/Navbar3/Navbar3';
import {
  PitchWrapper,
  Form,
  Heading,
  Subtitle,
  FormLabel,
  FormInput,
  FormInputDescription,
  FormButton
} from './Pitch.styles';
import Footer3 from '../../components/Footer3/Footer3'
import UploadImg from '../../components/UploadImg/UploadImg';

import { VentureContractFactory } from "smart_contract/contracts";
import Web3 from 'web3';
import { ref } from "firebase/storage";
import { storage } from "../../firebase";
import { AccountContext, AccountContextProvider } from "../../components/Contexts/AccountContext";
import { ModalContext, ModalContextProvider } from "../../components/Contexts/ModalContext";

function Pitch() {

  const [fields, setFields] = useState({
    name: "",
    symbol: "",
    description: "",
    targetCapital: "",
  });

  const [image, setImage] = useState('')
  const [loading, setLoading] = React.useState(false);
  const popup = React.useContext(ModalContext);
  const account = React.useContext(AccountContext);
  
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    if (!accounts[0]) {
      alert("Please Connect Metamask Wallet First!");
      return;
    }

    setLoading(true);

    try {
      // const accounts = await web3.eth.getAccounts();
      const venturerAddress = accounts[0];

      await VentureContractFactory.methods.listVenture(
        fields.name,
        fields.symbol,
        Web3.utils.toWei(fields.targetCapital, "ether")
      ).send({
        from: venturerAddress
      }).on("receipt", (receipt) => {
        const ventureAddress = receipt.events.ListVenture.returnValues.ventureAddress;
        console.log("Venture Address:", ventureAddress);

        const uploadJob = ref(storage).child(`images/${ventureAddress}`).put(image);
        console.log(uploadJob);
        uploadJob.on(
          "state_changed",
          (snapshot) => {
            console.log(snapshot);
          },
          async (err) => {
            await fetch(`../api/Ventures`, {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify({
                ...fields,
                targetCapital: fields.targetCapital,
                imageUrl: "https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png",
                venturerAddress,
                ventureAddress,
                listingTimestamp: parseInt(Date.now() / 1000),
              }),
            });
            router.push(`/${ventureAddress}`);
          },
          async () => {
            const imageUrl = await uploadJob.snapshot.ref.getDownloadURL();
            await fetch(`../api/Ventures`, {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify({
                ...fields,
                targetCapital: fields.targetCapital,
                imageUrl: "https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png",
                venturerAddress,
                ventureAddress,
                listingTimestamp: parseInt(Date.now() / 1000),
              }),
            });
            router.push(`/${ventureAddress}`);
            console.log("pushed ROUTE")
          });
      });
    } catch (err) {
      alert(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <AccountContextProvider>
        <ModalContextProvider>
          <GlobalStyle />
          <ScrollToTop />
          <Navbar3 />
          <PitchWrapper>
            <Form>
              <Heading>Pitch Your IdeaETH</Heading>
              <Subtitle>Got an Idea? Pitch it now to gain the hearts of everyone! Start your IdeaETH by filling the template below!</Subtitle>
              <FormLabel htmlFor='for'>Project Title</FormLabel>
              <FormInput 
                value={fields.name}
                onChange={(event) => setFields({
                  ...fields,
                  name: event.target.value.substring(0,31),
                })}
              />
              <FormLabel htmlFor='for'>Project Description</FormLabel>
              <FormInputDescription 
                value={fields.description}
                onChange={(event) => setFields({
                  ...fields,
                  description: event.target.value,
                })}
              />
              <FormLabel htmlFor='for'>Project Website/Link</FormLabel>
              <FormInput
                value={fields.symbol}
                onChange={(event) => setFields({
                  ...fields,
                  symbol: event.target.value,
                })}               
              />
              <FormLabel htmlFor='for'>Project Poster</FormLabel>
              <UploadImg />
              <FormLabel htmlFor='for'>Capital to be Raised (ETH)</FormLabel>
              <FormInput 
                value={fields.targetCapital}
                onChange={(event) => {setFields({
                  ...fields,
                  targetCapital: event.target.value,
                });
              }}
              error={!!fields.targetCapital && fields.targetCapital <= 0}        
              />
              <FormButton
                onClick={handleSubmit}
              >Pitch It!</FormButton>
            </Form>
          </PitchWrapper>
          <Footer3 />
        </ModalContextProvider>
      </AccountContextProvider>
    </>
  )
}

export default Pitch
