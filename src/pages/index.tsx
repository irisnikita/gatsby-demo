// Libraries
import React, {useMemo} from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Img, {FixedObject, FluidObject} from 'gatsby-image';
import {Button, Divider, Icon} from 'vuisuper';

// Components
import Layout from 'Components/Layout/index';
import {Post, WrapPost, Sidebar} from 'Src/templates/blog-post';

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
    slug: string,
    featuredImage: FluidObject,
    description?: string,
    user: {
        name: string,
        avatar: FixedObject
    }
}

// Styled
const WrapperIntroduce = styled.div`
    padding: 0px 10px;
    display: flex;
    justify-content: center;
    width: 100%;
`;

const LeftMain = styled.section`
    display: flex;
    width: 70%;

`;

const MainPost = styled(Post)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    
    h2 {
        margin: 10px !important;
    }

    .post-description {
        padding: 0px 30px;
    }

    .d-flex {
        display: flex;
        align-items: center;
        gap: 5px;

        i {
            color: #08979c;
        }
    }

    .img {
        cursor: pointer;
        position: relative;
        width: 100%;
        height: 350px;
        border-radius: 10px;
        box-shadow: 0 3px 12px -1px rgba(7,10,25,0.2), 0 22px 27px -20px rgba(7,10,25,0.2);

        &:hover {
            &:before {
                background-color: rgba(0, 0, 0, 0.235);
            }
        }

        &:before{
            content: "";
            position: absolute;
            transition: all 200ms ease-in;
            z-index: 2;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
`;

const MainWrapPost = styled(WrapPost)`
    margin-top: 15px;
    justify-content: space-between;
    flex-wrap: nowrap wrap;
`;

const PostInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-size: 14px;
    margin-bottom: 10px;

    .avatar {
        width: 24px;
        height: 24px;
        background-color: #36cfc9;
        border-radius: 50%;
    }

`;

const Card = styled.div`
    /* background: #000000; */
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
        background-color: rgba(0, 0, 0, 0.393);
        width: 100%;
        height: 300px;
        position: absolute;
        top: 0;
    }

    h2 {
        color: #fff;
        margin: 10px 0px;
    }

    .img-carousel {
        overflow: hidden;
        z-index: -2;
        border-radius: 20px;
        height: 100%;
        width: 100%;
        position: absolute !important;
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

    const carouselPosts: Array<TPost> = useMemo(() => {
        let formatPosts: Array<TPost> = [];

        if (data.carousel && data.carousel.edges)
        {
            formatPosts = data.carousel.edges.map((item) => ({
                id: item.node.id,
                title: item.node.frontmatter.title,
                date: item.node.frontmatter.date,
                image: item.node.frontmatter.image,
                slug: item.node.fields.slug,
                featuredImage: item.node.frontmatter.featuredImage.childImageSharp.fluid
            }));
        }

        return formatPosts;

    }, [data.carousel.edges]);
    
    const posts: Array<TPost> = useMemo(() => {
        let formatPosts: Array<TPost> = [];

        if (data.posts && data.posts.edges)
        {
            formatPosts = data.posts.edges.map((item) => ({
                id: item.node.id,
                title: item.node.frontmatter.title,
                date: item.node.frontmatter.date,
                image: item.node.frontmatter.image,
                featuredImage: item.node.frontmatter.featuredImage.childImageSharp.fluid,
                slug: item.node.fields.slug,
                description: item.node.excerpt,
                user: {
                    name: item.node.frontmatter.user.name,
                    avatar: item.node.frontmatter.user.avatar.childImageSharp.fixed
                }
            }));
        }

        return formatPosts;

    }, [data.posts.edges]);
      
    return (
        <Layout>
            <SEO title={site.siteMetadata.title} description={site.siteMetadata.description} />
            <WrapperIntroduce>
                <section className='home-intro'>
                    <div className='wrapper-card'>
                        <Slider 
                            {...settings}
                        >
                            {carouselPosts.map(post => {
                                return (
                                    <div key={post.id} className='outline-none'>
                                        <Link to={post.slug} >
                                            <Card>
                                                <Img fluid={post.featuredImage} className="img-carousel" />
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
           
            <MainWrapPost>
                <LeftMain>
                    {posts.length ? posts.map(post => (
                        <MainPost key={post.id}>
                            <Img className='img' fluid={post.featuredImage} />
                            <div className='title-post'>
                                {post.title}
                            </div>
                            <PostInfo>
                                <div className='d-flex'>
                                    <Img className='avatar' fixed={post.user.avatar} />
                                    {post.user?.name}
                                </div>
                                <div className='d-flex'>
                                    <Icon type='icon-calendar_today' />
                                    {post.date}
                                </div>
                                <div className='d-flex'>
                                    <Icon type='icon-comment' />
                            2
                                </div>
                                <div className='d-flex'>
                                    <Icon type='icon-remove_red_eyevisibility' />
                            2000
                                </div>
                            </PostInfo>
                            <p className='post-description'>
                                {post.description}
                            </p>
                            <div className='d-flex j-c'>
                                <Link to={post.slug} >
                                    <Button size={'large'} type='primary' shape='round'>Continue Reading</Button>
                                </Link> 
                            </div>
                        </MainPost>
                    )) : null} 
                </LeftMain>
                <Sidebar className='w-40-pc'>
                    <div className='side-bar-card'>
                        <h2 style={{margin: 0}}>Popular Posts</h2>
                        <Divider />
                    </div>
                    <div className='side-bar-card'>
                        <h2 style={{margin: 0}}>Categories</h2>
                        <Divider />
                    </div>
                </Sidebar>
            </MainWrapPost>
        </Layout>
    );
};

export default Home;

export const query = graphql`
  query {
    file(relativePath: { eq: "assets/images/background.jpg" }) {
        childImageSharp {
            fluid(quality: 100) {
               ...GatsbyImageSharpFluid
             }
        }
    }
    site {
        siteMetadata {
          author
          description
          title
        }
    }
    carousel: allMarkdownRemark(filter: {frontmatter: {type: {eq: "carousel"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "LL")
            featuredImage {
                childImageSharp {
                    fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
          }
          fields {
            slug
          }
        }
      }
    }
    posts: allMarkdownRemark(filter: {frontmatter: {type: {ne: "carousel"}}}) {
    edges {
      node {
        id
        frontmatter {
            title
            date(formatString: "LL")
            featuredImage {
                childImageSharp {
                    fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            user {
                name
                avatar {
                    childImageSharp {
                        fixed(width: 24, height: 24) {
                        ...GatsbyImageSharpFixed
                        }
                }
                }
            }
        }
        fields {
            slug
        }
        excerpt(pruneLength: 170)
      }
    }
    }
  }
`;