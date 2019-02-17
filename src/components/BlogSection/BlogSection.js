import React from "react";
import Card from './Card/Card.js'
import weirdo from '../../assets/weirdo.jpg';
import jheezy from '../../assets/jhee.jpg';
import { BlogSectionStyled } from './BlogSectionStyled';

const BlogSection = ({ blogs }) => {
return (
    <BlogSectionStyled>
    {blogs && blogs.map((blog, index) => (
      <Card
        key={index}
        tag={blog.tags}
        headerImg={blog.image}
        img={blog.author === 'Sam Scheding' ? weirdo : jheezy}
        title={blog.title}
        content={blog.subtitle}
        author={blog.author}
        id={blog.id}
        date={blog.date}
      />
    ))}
    </BlogSectionStyled>
  );
}

export default BlogSection;
