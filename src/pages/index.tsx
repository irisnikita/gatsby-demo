// Libraries
import React, {useMemo} from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Img from 'gatsby-image';
import {Button, Icon} from 'vuisuper';
import firebase from 'gatsby-plugin-firebase';
import {useCollectionData} from 'react-firebase-hooks/firestore';

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
    slug: string
}

// Styled
const WrapperIntroduce = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const firestore = firebase.firestore();

const MainPost = styled(Post)`
    text-align: center;
    
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
    background: #000000;
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
    // Firebase
    const postRef = firestore.collection('posts');
    const query = postRef.orderBy('cTime').limit(25);
    const [firebasePosts] = useCollectionData(query, {idField: 'id'});
    
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
            {
                firebasePosts?.map((post, index) => (
                    <div key={index}>{post.title}</div>
                ))
            }
            <MainWrapPost>
                <MainPost>
                    <Img fixed={data.file.childImageSharp.fixed} />
                    <h2>Làm thế nào để  khám phá ra những cái mới</h2>
                    <PostInfo>
                        <div className='d-flex'>
                            <div className='avatar' />
                            Nguyễn Hùng
                        </div>
                        <div className='d-flex'>
                            <Icon type='icon-calendar_today' />
                            Jun, 05, 2019
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quasi praesentium dolore possimus eos dignissimos deleniti harum ad rerum itaque.
                    </p>
                    <div className='d-flex j-c'> 
                        <Button size={'large'} type='primary' shape='round'>Continue Reading</Button>
                    </div>
                </MainPost>
                <Sidebar className='w-40-pc'>
                    <div className='side-bar-card'>
                        <h1>tooi la awwwwwwwwwwwwwwwwwwwwwwwwi</h1>
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
            fixed(width: 750, height: 350, quality: 100) {
                ...GatsbyImageSharpFixed
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