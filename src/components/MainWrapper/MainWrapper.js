import React, {Fragment} from "react";
import Nav from './Nav/Nav.js'
import Footer from './Footer/Footer.js';

class MainWrapper extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
          {this.props.children}
        <Footer />
      </Fragment>
    )
  }
}

export default MainWrapper;
