// Libraries
import React, {useMemo} from 'react';
import {useStaticQuery, graphql} from 'gatsby';

// Constant
import {categories} from 'Src/constant';

// Styled Components
import {StyledComponents} from 'StyledComponents/Categories';

interface CategoriesProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode
}

const Categories: React.FC<CategoriesProps> = () => {
    // Query gatsby
    const data = useStaticQuery(graphql`
     query {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    type
                }
            }
        }
       }
     `);

    const {nodes = []} = data.allMarkdownRemark || [];

    const newCategories = useMemo(() => {
        const nCategories = categories.map(category => {
            let totalCount = 0;

            nodes.forEach(node => {
                if (node.frontmatter.type === category.id) {totalCount += 1}
            });

            return {
                ...category,
                totalCount
            };
        });

        return nCategories;
    }, [categories, data]);

    return (
        <StyledComponents>
            {
                newCategories.length && newCategories.map((category) => {
                    return (
                        <li key={category.id}>
                            <div className='label__title'>{category.label}</div>
                            <span className='count__right'>{category.totalCount}</span>
                        </li>
                    );
                })
            }
        </StyledComponents>
    );
};

export default Categories;