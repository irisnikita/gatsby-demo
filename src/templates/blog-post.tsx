// Libraries
import React from 'react';
import Layout from 'Components/Layout/index';
import {graphql} from 'gatsby';
import styled from 'styled-components';

// Components
import SEO from 'Components/Seo/index';

interface IBlogPost {
    data: any
}

export const Post = styled.section`
	background-color: #fff;
	border-radius: ${props => props.theme.borderRadius};
    padding: 30px;
`;

const BackgroundImage = styled.div`
	border-radius: ${props => props.theme.borderRadius};
	width: 100%;
	height: 400px;
	background-position: center;
    background-size: cover;
`;

export const Sidebar = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;

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

    return (
        <Layout>
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <WrapPost>
                <Post>
                    <BackgroundImage style={{backgroundImage: `url(${post.frontmatter.imageBackground})`}} />
                    <h1>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: post.html}} />
                </Post>
                <Sidebar>
                    <div className='side-bar-card'>
                        <h1>tooi la awwwwwwwwwwwwwwwwwwwwwwwwi</h1>
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
      }
    }
  }
`;