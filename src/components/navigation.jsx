import React, { useState, useContext, useCallback } from "react";

import { Web3ModalContext } from '../contexts/Web3ModalProvider';
import { ellipseAddress } from "utils/blockchain";
import Mainlogo from '../assets/logo/logo.png';
import Discord from '../assets/logo/discord.png';
import Twitter from '../assets/logo/twitter.png';

const Navigation = () => {  
  const [btnState, setBtnState] = useState(false);

  const { connect, disconnect, account } = useContext(Web3ModalContext);

  const handleConnectWallet = useCallback(() => {
    connect();
  }, [connect]);

  const handleDisconnectWallet = useCallback(() => {
    setBtnState(false);
    disconnect();
  }, [disconnect]);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src={Mainlogo} alt="logo" className="logo" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <li>
              <a href="https://discord.gg/RNXeZkmyEk" target="_blank" rel="noopener noreferrer" className="page-scroll">
                <img src={Discord} alt="discord" className="discord-logo"/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/VenusNFT" target="_blank" rel="noopener noreferrer" className="page-scroll">
                <img src={Twitter} alt="twitter" className="twitter-logo"/>
              </a>
            </li>
            <li>
              <a href="#" className="page-scroll">
                MINT
              </a>
            </li>
            <li>
              <a href="#roadmap-title" className="page-scroll">
                ROAD MAP
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                TEAM
              </a>
            </li>
            <li>
              {!account ? (
                <a href="#" className="page-scroll">
                  <button className="connect-button" onClick={handleConnectWallet}>CONNECT</button>
                </a>
              ) : (
                <a href="#" className="page-scroll">
                  <button 
                    className="connect-button" 
                    onClick={handleConnectWallet}
                    onMouseOver={() => {
                      setBtnState(true);
                    }}
                  >
                    { ellipseAddress(account) }
                  </button>
                </a>
              )}
            </li>
            {/* {btnState &&
              <li>
                <a href="#" className="page-scroll">
                  <button 
                    className="connect-button" 
                    onClick={handleDisconnectWallet}
                    onMouseOver={() => {
                      setBtnState(true);
                    }}
                    onMouseLeave={() => {
                      setBtnState(false);
                    }}
                  >
                    DISCONNECT
                  </button>
                </a>
              </li>
            } */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
