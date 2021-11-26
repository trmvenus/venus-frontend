import 'react-notifications/lib/notifications.css';

import React, { Component } from 'react'
import { NotificationContainer } from 'react-notifications';

import Navigation from './components/navigation';
// import Features from './components/features';
import About from './components/about';
import Home from './components/home';
import Features from './components/features';
// import VenusWork from './components/venuswork';
import Roadmap from './components/roadmap';
// import Testimonials from './components/testimonials';
import Team from './components/team';
// import Contact from './components/contact';
import JsonData from './data/data.json';
import Footer from './components/footer';
import Web3ModalProvider from "./contexts/Web3ModalProvider";
import Web3WrapperProvider from "./contexts/Web3WrapperProvider";

const Provider = ({children}) => (
  <Web3ModalProvider>
    <Web3WrapperProvider>
      {children}
    </Web3WrapperProvider>
  </Web3ModalProvider>
)

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <Provider>
        <Navigation />
        <Home />
        <About data={this.state.landingPageData.About} />
        <Features />
        {/* <VenusWork /> */}
        <Roadmap />
        <Team data={this.state.landingPageData.Team} />
        <Footer />
        <NotificationContainer />
      </Provider>
    )
  }
}

export default App;
