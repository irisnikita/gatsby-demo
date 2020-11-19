import styled from 'styled-components';

export const WrapperHeader = styled.div`
    margin: 0px 50px;
    background-color: transparent;
    color: #434343;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${props => props.theme.size.header.height};
    border-bottom: 3px solid #8c8c8c;

    h3 {
        margin: 0px ;
        color: #434343;
    }

    i {
        color: grey;
        font-size: 20px;
        cursor: pointer;
    }

`;

export const MenuHeader = styled.div`
    margin-left: 100px;
    display: flex;
    align-items: center;

    .menu-header-item {
        font-size: 18px;
        cursor: pointer;
        margin: 0 20px;
    }
`;