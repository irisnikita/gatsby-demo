// Libraries
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import {ThemeProvider} from 'styled-components';
import {defineCustomElements as deckDeckGoHighlightElement} from '@deckdeckgo/highlight-code/dist/loader';

deckDeckGoHighlightElement();

// Global theme
import {globalTheme} from '../../themes/globalTheme';

// Components
import Header from 'Components/Header/index';

// Styled Component
import {WrapperLayout} from './layout.styled';

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
    
    // Query gatsby
    const data = useStaticQuery(graphql`
     query {
         file(relativePath: { eq: "assets/images/background.jpg" }) {
           childImageSharp {
             fluid(quality: 100) {
               ...GatsbyImageSharpFluid
             }
           }
         }
       }
     `);

    // Props
    const {children} = props;

    return (
        <ThemeProvider theme={globalTheme}>
            <WrapperLayout {...props}>
                <Img
                    className='p-absolute'
                    fluid={data.file.childImageSharp.fluid}
                    alt="background image"
                />
                <Header />
                {children}
            </WrapperLayout>
        </ThemeProvider>
        
    );
};

export default Layout;