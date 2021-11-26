import React, { Component } from 'react'
import FooterImage from '../assets/Website/footer.png';
import Discord from '../assets/logo/discord.png';
import Twitter from '../assets/logo/twitter.png';

export class footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="footer">
          <img src={FooterImage} alt="" className="footer-image" />
        </div>
        <div className="footer-footer">
          <div className="footer-right">
            <div className="social social-icons">
              <a href="https://discord.gg/RNXeZkmyEk" target="_blank" rel="noopener noreferrer" className="dicord">
                <img src={Discord} alt="" />
              </a>
              <a href="https://twitter.com/VenusNFT" target="_blank" rel="noopener noreferrer" className="twitter">
                <img src={Twitter} alt="" />
              </a>
            </div>
            <p className="terms">Terms</p>
            <p className="copyright">Ⓒ 2021 Venus</p>
          </div>
        </div>
      </div>
    )
  }
}

export default footer
