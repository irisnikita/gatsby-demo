// Libraries
import React from 'react';
import Img, {FixedObject} from 'gatsby-image';
import {Link} from 'gatsby';

// Styled Components
import {StyledPostCardCircle} from 'StyledComponents/Post/index';

interface PostCardCircleProps extends React.HTMLAttributes<HTMLElement> {
    postInfo: {
        title: string,
        image: FixedObject,
        date: string,
        slug: string
    }
}

const PostCardCircle: React.FC<PostCardCircleProps> = (props) => {
    // Props
    const {postInfo} = props;

    return (
        <Link to={postInfo.slug}>
            <StyledPostCardCircle>
                <div className="post-card__left">
                    <Img fixed={postInfo.image} className='avatar__img' />
                </div>
                <div className="post-card__right">
                    <div className="date--style">
                        {postInfo.date}
                    </div>
                    <h3 className='box-2'>
                        {postInfo.title}
                    </h3>
                </div>
            </StyledPostCardCircle>
        </Link>
    );
};

PostCardCircle.defaultProps = {
}; 

export default PostCardCircle;