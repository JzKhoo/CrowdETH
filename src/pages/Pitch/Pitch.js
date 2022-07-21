import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
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
import { 
  Layout,
  BoxUpLoad,
  ImagePreview
} from './UploadImg.styles'
import FolderIcon from '../../images/FolderIcon.png';
import CloseIcon from '../../images/CloseIcon.svg';
import Footer3 from '../../components/Footer3/Footer3'
import UploadImg from '../../components/UploadImg/UploadImg';
import { VentureContractFactory } from "smart_contract/contracts";
import Web3 from 'web3';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";
import { getDocs, collection, query, setDoc, doc } from "firebase/firestore";
import { AccountContext, AccountContextProvider } from "../../components/Contexts/AccountContext";
import { ModalContext, ModalContextProvider } from "../../components/Contexts/ModalContext";

function Pitch() {

  const navigate = useNavigate();

  // Constants for Image uploading
  const [image, setImage] = useState('')
  const [isUploaded, setIsUploaded] = useState('')

  // Function to handle Image submission
  function handleImageChange(e) {
      if (e.target.files && e.target.files[0]) {
          let reader = new FileReader()

          reader.onload = function(e) {
              setImage(e.target.result)
              setIsUploaded(true)
          }

          reader.readAsDataURL(e.target.files[0])
      }
  }

  const [fields, setFields] = useState({
    name: "",
    symbol: "",
    description: "",
    targetCapital: "",
  });

  const [loading, setLoading] = React.useState(false);
  const account = React.useContext(AccountContext);

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

        // Create Child Reference
        const storageRef = ref(storage, `images/${ventureAddress}`);
        const metadata = {
          contentType: 'image/png',
        };
        const uploadTask = uploadBytesResumable(storageRef, image, metadata);

        uploadTask.on(
          "state_changed",
          // Next Action
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          },
          // Error Action
          async (err) => {

            const imageUrl =  "https://d33wubrfki0l68.cloudfront.net/13ca0c32ffd56bcfaf861b9a8acb212d0f6482e3/d8df6/static/c3bcc8c47890ffd2a2c329972c73d0fd/e018d/ethereum-logo-portrait-black-gray.png";
            const name = fields.name;
            const symbol = fields.symbol;
            const description = fields.description;
            const listingTimestamp = parseInt(Date.now() / 1000);
            const targetCapital = fields.targetCapital;

            await setDoc(doc(db, "ventures", ventureAddress), {
              name,
              symbol,
              description,
              imageUrl,
              venturerAddress,
              listingTimestamp,
              targetCapital,
            }); 

            navigate(`../Ventures/${ventureAddress}`);
            console.log("pushed ROUTE with ERR");
          },
          // Complete Action
          async () => {

            const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
            const name = fields.name;
            const symbol = fields.symbol;
            const description = fields.description;
            const listingTimestamp = parseInt(Date.now() / 1000);
            const targetCapital = fields.targetCapital;

            await setDoc(doc(db, "ventures", ventureAddress), {
              name,
              symbol,
              description,
              imageUrl,
              venturerAddress,
              listingTimestamp,
              targetCapital,
            });

            navigate(`../Ventures/${ventureAddress}`);
            console.log("pushed ROUTE");
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
                  name: event.target.value.substring(0, 31),
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
              <Layout>
                <BoxUpLoad>
                  <div className='image-upload'>
                    {
                      !isUploaded ? (
                        <>
                          <label htmlFor='upload-input'>
                            <img src={FolderIcon} alt='placeholder' style={{ width: 100, height: 100 }} draggable='false' />
                            <p>
                              Click to upload image
                            </p>
                          </label>
                          <input
                            id='upload-input'
                            type='file'
                            accept='.jpg, .jpeg, .gif, .png, .mov, .mp4'
                            onChange={handleImageChange}
                          />
                        </>
                      ) : (
                        <ImagePreview>
                          <img
                            className='close-icon'
                            src={CloseIcon}
                            alt='CloseIcon'
                            onClick={() => {
                              setIsUploaded(false)
                              setImage(null)
                            }}
                          />
                          <img
                            id='uploaded-image'
                            src={image}
                            alt='uploaded-img'
                            draggable={false}
                          />
                        </ImagePreview>
                      )
                    }
                  </div>
                </BoxUpLoad>
              </Layout>
              <FormLabel htmlFor='for'>Capital to be Raised (ETH)</FormLabel>
              <FormInput
                value={fields.targetCapital}
                onChange={(event) => {
                  setFields({
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
