import React from 'react';

interface AboutProps {
    children?: React.ReactNode
}

const About: React.FC<AboutProps> = () => {
    return (
        <div>
            This is me
        </div>
    );
};

export default About;