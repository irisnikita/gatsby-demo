// Libraries
import React, {useMemo} from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

// Components
import Layout from 'Components/Layout/index';

import {graphql, Link} from 'gatsby';
import SEO from 'Components/Seo';

interface IHome {
   data: any
}

type TPost = {
    title: string,
    id: string | number,
    date: string,
    image: string ,
    slug: string
}

// Styled
const WrapperIntroduce = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Card = styled.div`
    background: #fff;
    color: #fff;
    top: 0px;
    background-size: 450px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: ${props => props.theme.borderRadius};
    height: 300px;
    margin: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    z-index: 2;
    padding: 20px;
    transition: all 300ms;
    cursor: pointer;

    &:hover {
        top: -5px;
    }

    &::before {
        content: "";
        z-index: -1;
        border-radius: ${props => props.theme.borderRadius};
        background-color: rgba(0, 0, 0, 0.214);
        width: 100%;
        height: 300px;
        position: absolute;
        top: 0;
    }

    h2 {
        color: #fff;
        margin: 10px 0px;
    }

`;

const Home: React.FC<IHome> = (props) => {
    // Props
    const {data} = props;
    const {site} = data;

    // Setting slick
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    const posts: Array<TPost> = useMemo(() => {
        let formatPosts: Array<TPost> = [];

        if (data.allMarkdownRemark && data.allMarkdownRemark.edges)
        {
            formatPosts = data.allMarkdownRemark.edges.map((item) => ({
                id: item.node.id,
                title: item.node.frontmatter.title,
                date: item.node.frontmatter.date,
                image: item.node.frontmatter.image,
                slug: item.node.fields.slug
            }));
        }

        return formatPosts;

    }, [data.allMarkdownRemark.edges]);
      
    return (
        <Layout>
            <SEO title={site.siteMetadata.title} description={site.siteMetadata.description} />
            <WrapperIntroduce>
                <section className='home-intro'>
                    <div className='wrapper-card'>
                        <Slider 
                            {...settings}
                        >
                            {posts.map(post => {
                                return (
                                    <div key={post.id} className='outline-none'>
                                        <Link to={post.slug} >
                                            <Card style={{backgroundImage: `url(${post.image})`}}>
                                                <div>{post.date}</div>
                                                <h2>{post.title}</h2>
                                            </Card> 
                                        </Link>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </section>
            </WrapperIntroduce>
        </Layout>
    );
};

export default Home;

export const query = graphql`
  query {
    site {
        siteMetadata {
          author
          description
          title
        }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "LL")
            image
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;