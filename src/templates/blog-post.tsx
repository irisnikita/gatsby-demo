// Libraries
import React, {useMemo} from 'react';
import Layout from 'Components/Layout/index';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {Icon, Divider} from 'vuisuper';

// Components
import SEO from 'Components/Seo/index';
import Categories from 'Components/Post/Categories';

// Styled Components
import {PostInfo} from 'StyledComponents/Post/index';

interface IBlogPost {
    data: any
}

export const Post = styled.section`
	background-color: #fff;
	border-radius: ${props => props.theme.borderRadius};
    padding: 30px;
    width: 70%;

    .featured__image {
        border-radius: ${props => props.theme.borderRadius};
        width: 100%;
	    height: 400px;
    }
`;

export const Sidebar = styled.div`
	width: 30%;
	display: flex;
    flex-direction: column;
    gap: 20px;

	.side-bar-card {
		background-color: #fff;
		border-radius: ${props => props.theme.borderRadius};
		padding: 20px;
	}
`;

export const WrapPost = styled.section`
	margin: 50px;
	display: flex;
	gap: 30px;
`;

const BlogPost: React.FC<IBlogPost> = ({data}) => {
    const post = data.markdownRemark;

    const newPost = useMemo(() => {
        const nPost = {
            title: post.frontmatter.title,
            featuredImage: post.frontmatter.featuredImage.childImageSharp.fluid,
            date: post.frontmatter.date,
            user: {
                name: post.frontmatter.user.name,
                avatar: post.frontmatter.user.avatar.childImageSharp.fixed
            },
            excerpt: post.excerpt,
            html: post.html
        };

        return nPost;
    }, [post]);

    return (
        <Layout>
            <SEO title={newPost.title} description={newPost.excerpt} />
            <WrapPost>
                <Post>
                    <Img fluid={newPost.featuredImage} className='featured__image' />
                    <PostInfo style={{justifyContent: 'flex-start'}} className='post__detail'>
                        <div className='d-flex'>
                            <Img className='avatar' fixed={newPost.user.avatar} />
                            {newPost.user?.name}
                        </div>
                        <div className='d-flex'>
                            <Icon type='icon-calendar_today' />
                            {newPost.date}
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
                    <h1>{newPost.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: newPost.html}} />
                </Post>
                <Sidebar>
                    <div className='side-bar-card'>
                        <h2 style={{margin: 0}}>Categories</h2>
                        <Divider />
                        <Categories />
                    </div>
                </Sidebar>
            </WrapPost>
        </Layout>
    );
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
		imageBackground
		image
		title
        date(formatString: "LL")
        user {
                name
                avatar {
                    childImageSharp {
                        fixed(width: 30, height: 30, quality: 100) {
                        ...GatsbyImageSharpFixed
                        }
                }
                }
        }
        featuredImage {
                childImageSharp {
                    fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
      }
    }
  }
`;