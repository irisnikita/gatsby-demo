// Libraries
import React from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby';
import Img from 'gatsby-image';

// Styled
import {WrapperHeader, MenuHeader} from './header.styled';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode
}

type ItemHeader = {
	key?: string | number,
	label?: string
}

const menuHeader: ItemHeader[] = [
    {key: 1, label: 'Home'},
    {key: 2, label: 'About me'},
    {key: 3, label: 'Contact'},
    {key: 4, label: 'Subscribe'}
];

const Header: React.FC<HeaderProps> = (props) => {
    // Query gatsby
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "assets/images/logo.png" }) {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `);

    const {childImageSharp} = data.file; 

    // Props
    const {children} = props;

    return (
        <WrapperHeader {...props}>
            <Link to={'/'}>
                <div className={'d-flex a-c'}>
                    <Img className='img-logo' fixed={childImageSharp.fixed} /> &nbsp;
                    <h3>Vuitech</h3>
                </div>
            </Link>
            <MenuHeader>
                {menuHeader.map(item => (
                    <div key={item.key} className={'menu-header-item'}>
                        {item.label}
                    </div>
                ))}
            </MenuHeader>
            {children}
        </WrapperHeader>
    );
};

export default Header;