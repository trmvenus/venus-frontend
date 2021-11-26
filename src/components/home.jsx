import React, { useState, useContext } from "react";
import { NotificationManager } from 'react-notifications';
import Carousel from 'react-simply-carousel';

import Homegif from '../assets/homegif.gif';
import Image1 from '../assets/Carousel/Carousel1.jpg';
import Image2 from '../assets/Carousel/Carousel2.jpg';
import Image3 from '../assets/Carousel/Carousel3.jpg';
import Image4 from '../assets/Carousel/Carousel4.jpg';
import Image5 from '../assets/Carousel/Carousel5.jpg';
import Image6 from '../assets/Carousel/Carousel6.jpg';
import background from '../assets/Website/heartbackground1.png';
import useAccountData from '../hooks/useAccountData';
import useVenusData from '../hooks/useVenusData';
import { Web3WrapperContext } from '../contexts/Web3WrapperProvider';
import { Web3ModalContext } from '../contexts/Web3ModalProvider';

const Home = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { web3Wrapper: wrapper } = useContext(Web3WrapperContext);
  const { account } = useContext(Web3ModalContext);
  const [mintRequested, setMintRequested] = useState(false);
  const [amount, setAmount] = useState(0);
  const accountData = useAccountData();
  const venusData = useVenusData();

  const handleChangeAmount = (event) => {
    const nextUserInput = event.target.value.replace(/[^\d]+/g,'');

    if (nextUserInput <= 3) {
      setAmount(nextUserInput);
    }   
  }

  const handleMint = async () => {
    if (!accountData) {
      NotificationManager.error("Connect wallet to mint!");
      return;
    }
    if (!(amount > 0 && amount <= 3)) {
      NotificationManager.error("Maximum amount is 3 in pre-mint stage");
      return;
    }
    if (parseInt(amount) + parseInt(accountData.venusBalance) > 3) {
      NotificationManager.error("Maximum amount is 3 in pre-mint stage");
      return;
    }
    if (amount * 0.08 > accountData.ethBalance) {
      NotificationManager.error("Insufficient ETH balance!");
      return;
    }

    fetch('/data/white.dat')
    .then((r) => r.text())
    .then(async (text)  => {
      const presaleAddresses = text.toString().replace(/\r\n/g,'\n').split("\n");

      for (let i = 0; i < presaleAddresses.length; i ++) {
        if (account.toLowerCase().localeCompare(presaleAddresses[i].toLowerCase()) == 0) {
          setMintRequested(true);
          const txHash = await wrapper?.mint(amount);
          setMintRequested(false);
      
          if (!txHash) {
            NotificationManager.error('Mint Transaction Error');
            return;
          }
      
          if (amount > 1) {
            NotificationManager.success(`${amount} venus are minted successfully`, 'Mint Success');
          } else {
            NotificationManager.success(`${amount} venus is minted successfully`, 'Mint Success');
          }
      
          setAmount(0);
          return;
        }
      }

      NotificationManager.error("You can't early-mint with this account");
      return;
    });
  }

  return (
    <div id="home" className="text-center">
      <div className="intro" style={{ 
        backgroundImage: `url(${background})` 
      }}>
        <div className="home-container" >
          <div className="home-left">
            <div className="main-title">
              <p className="big-title">Welcome to venus!</p>
              {accountData ? (
                <p className="subtitle">Your whitelisted mints : </p>
              ) : (
                <p className="subtitle">Can I take your order?</p>
              )}
            </div>
            <div className="mint-form">
              {accountData && (
                <div className="venus-balance">
                  <span className="subtitle balance">{accountData.venusBalance} + </span>
                  <div className="input-form">
                    <input 
                      className="amount-input" 
                      placeholder="Amount" 
                      type="number" 
                      min={0}
                      value={amount}
                      onChange={handleChangeAmount}
                    />
                    {amount > 0 && (
                      <span className="eth-price">{(amount * 0.08).toFixed(2)} ETH</span>
                    )}
                  </div>
                  <span className="subtitle balance">/ 3</span>
                </div>
              )}
              <div>
                <button
                  className="mint-button"
                  onClick={handleMint}
                >
                  {mintRequested ? "MINTING ..." : "MINT"}
                </button>
              </div>
            </div>
            <p className="minted">{venusData?.totalSupply ?? 0}/3333 Genesis Venus Minted</p>
          </div>
          <div className="home-right">
            <img src={Homegif} alt="homegif" className="home-gif" />
          </div>
        </div>
        <div className="parent-carousel">
          <Carousel
            className={'childcarousel'}
            updateOnItemClick
            containerProps={{
              style: {
                width: "100%",
                justifyContent: "space-between"
              }
            }}
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={4}
            speed={4000}
            autoplay={true}
            infinite={true}
            forwardBtnProps={{
              children: "",
              style: {
                width: 0,
                height: 0,
                minWidth: 0,
                display: 'none'
              }
            }}
            backwardBtnProps={{
              children: "<",
              style: {
                width: 0,
                height: 0,
                minWidth: 0,
                alignSelf: "center",
                display: "none"
              }
            }}
          >
            <img src={Image1} alt="image1" />
            <img src={Image2} alt="image1" />
            <img src={Image3} alt="image1" />
            <img src={Image4} alt="image1" />
            <img src={Image5} alt="image1" />
            <img src={Image6} alt="image1" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
