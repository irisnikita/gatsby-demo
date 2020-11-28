import styled from 'styled-components';

const PostInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-size: 14px;
    margin-bottom: 10px;

    &.post__detail {
        margin: 20px 0px 0px 0px;
    }

    .d-flex {
        display: flex;
        align-items: center;
        gap: 5px;

        i {
            color: #08979c;
        }
    }
    .avatar {
        width: 30px;
        height: 30px;
        border: 1px solid #13c2c2;
        background-color: #36cfc9;
        border-radius: 50%;
    }

`;

const StyledPostCardCircle = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0px;

    .post-card__left {
        .avatar__img {
            border-radius: 50%;
            box-shadow: 0 3px 12px -1px rgba(7,10,25,0.2), 0 22px 27px -20px rgba(7,10,25,0.2);
        }
    }

    .post-card__right {
        .date--style {
            font-size: 12px;
        }

        h3 {
            margin: 10px 0px;
        }
    }
`;

export {PostInfo, StyledPostCardCircle};