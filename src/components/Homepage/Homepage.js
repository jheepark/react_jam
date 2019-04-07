import React, {Fragment} from "react";
import Wave from '../Wave/Wave.js'
import { TitleStyled, PageStyled, ContentStyled, ContainerStyled } from './HomepageStyled';
import BlogSection from '../BlogSection/BlogSection';
import fetchData from '../../helpers/fetch';
import { ThemeProvider } from 'styled-components';

class Homepage extends React.Component {
  state = {
    blogData: undefined
  };

  componentDidMount() {
    fetchData(`/articles`).then((res) =>
      this.setState({ blogData: res }),
    );
  }

  render() {
    const theme = {
      color: "black"
    }
    return (
      <Fragment>
        <PageStyled>
          <ContainerStyled>
            <ContentStyled>
              <TitleStyled>Brb... We're writing a huge line of <span>CODE</span></TitleStyled>
              <p>A collaborative blog project by Sam Scheding and Jae-Hee Park</p>
            </ContentStyled>
          </ContainerStyled>
          <Wave/>
        </PageStyled>
        <BlogSection blogs={this.state.blogData}/>
      </Fragment>
    )
  }
}

export default Homepage;
