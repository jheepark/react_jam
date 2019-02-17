import React, {Fragment} from "react";
import {
  BlogMainStyled,
  TopWrapperStyled,
  TitleStyled,
  ProfileImageStyled,
  ContentStyled,
  DetailsSectionStyled,
  HeroStyled
} from './BlogMainStyled';
import jheezy from '../../assets/jhee.jpg';
import sambo from '../../assets/weirdo.jpg';
import fetchData from '../../helpers/fetch';

class BlogMain extends React.Component {
  state = {
    blogData: undefined
  };

  componentDidMount() {
    fetchData(`/articles/${this.props.match.params.blogId}`).then((res) =>
      this.setState({ blogData: res }),
    );
  }

  render() {
    const {
      blogData
    } = this.state;

    const createMarkup = (content) => {
      return {__html: content};
    }

    const MyComponent = (content) => {
      return <div dangerouslySetInnerHTML={createMarkup(content)} />;
    }
    return (
      <Fragment>
        {blogData && (
          <BlogMainStyled>
            <TopWrapperStyled>
              <TitleStyled>{blogData.title}</TitleStyled>
              <DetailsSectionStyled>
                <ProfileImageStyled img={blogData.user === 'Jae-Hee Park' ? jheezy : sambo}/>
                <div>
                  <h1>{blogData.user}</h1>
                  <p>{blogData.date}</p>
                </div>
              </DetailsSectionStyled>
            </TopWrapperStyled>
            <HeroStyled hero={blogData.image}/>
            <ContentStyled>
              {MyComponent(blogData.content)}
            </ContentStyled>
          </BlogMainStyled>
        )}
      </Fragment>
    )
  }
}

export default BlogMain;
