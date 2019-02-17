import React from "react";
import { CardContainerStyled, HeaderStyled, LinkStyled, ProfileImageStyled, ContentStyled, TagStyled, FooterStyled } from './CardStyled';

class Card extends React.Component {
  render() {
    const {
      tag,
      img,
      id,
      headerImg,
      title,
      content,
      author,
      date
    } = this.props;
    return (
      <LinkStyled to={`/blog/${id}`}>
        <CardContainerStyled onClick={this.onClick}>
          {tag && <TagStyled>{tag}</TagStyled>}
          <HeaderStyled headerImg={headerImg}/>
          <ProfileImageStyled img={img}/>
          <ContentStyled>
            <h1>{title}</h1>
            <p>{content}</p>
          </ContentStyled>
          <FooterStyled>by {author} . {date}</FooterStyled>
        </CardContainerStyled>
      </LinkStyled>
    )
  }
}

export default Card;
