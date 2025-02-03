import React from 'react';

const ShiningTextAnimation = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
            <div className="container">
                <h2 className="lg:text-6xl text-white text-4xl mb-5 lg:mb-10 text-center">Shining Text Animation</h2>
                <h3 className="text-7xl text-center font-extrabold relative pt-10 uppercase tracking-[4px] overflow-hidden bg-gradient-to-r from-black via-white to-black bg-[length:80%] bg-no-repeat animate-shine text-transparent bg-clip-text">
                    Radial code
                </h3>
            </div>
        </div>
    );
};

export default ShiningTextAnimation;
