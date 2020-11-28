import styled from 'styled-components';

const StyledComponents = styled.ul`
    list-style: none;
    margin: 0px;

    li {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0px;

        .label__title {
            color: #262626;
            transition: all 200ms;

            &:hover {
                color: #13c2c2;
            }
        }   

        .count__right {
            text-align: center;
            line-height: 25px;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            background-color: #08979c;
            color: #fff;
        }
    }
`;

export {StyledComponents};