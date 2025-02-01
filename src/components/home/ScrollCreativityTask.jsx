import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Flip, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(Flip, ScrollTrigger);

const ScrollCreativityTask = () => {
    useEffect(() => {
        let flipCtx;

        const createTimeline = () => {
            flipCtx && flipCtx.revert();

            flipCtx = gsap.context(() => {
                const secondState = Flip.getState('.second .marker');
                const thirdState = Flip.getState('.third .marker');
                const flipConfig = {
                    ease: 'none',
                    duration: 3000,
                };

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.container.initial',
                        start: 'clamp(top center)',
                        endTrigger: '.final',
                        end: 'clamp(top center)',
                        scrub: 1,
                    },
                });

                tl.add(Flip.fit('.box', secondState, flipConfig)).add(
                    Flip.fit('.box', thirdState, flipConfig),
                    '+=0.5'
                );
            });
        };

        createTimeline();

        window.addEventListener('resize', createTimeline);

        return () => {
            window.removeEventListener('resize', createTimeline);
        };
    }, []);

    return (
        <div className='bg-black py-5'>
            <div className="spacer text-center">
                <h2 className="lg:text-6xl text-white text-4xl mb-5 lg:mb-10 text-center font-semibold">Scroll Trigger Gsap Animation</h2>
            </div>
            <div className="main relative min-h-screen">
                <div className="initial absolute sm:size-[140px] size-24 flex items-center justify-center border-2 border-dashed border-white rounded-lg left-[60%] top-[10%]">
                    <div className="box bg-gradient-to-r from-blue-500 to-purple-600 sm:size-[100px] size-[70px] relative rounded-lg z-10" />
                </div>
                <div className="second absolute sm:size-[140px] size-24 flex items-center justify-center border-2 border-dashed border-white rounded-lg left-[10%] top-[50%]">
                    <div className="marker sm:size-[100px] size-[70px] bg-gradient-to-r from-green-400 to-blue-500 rounded-lg" />
                </div>
                <div className="third absolute sm:size-[140px] size-24 flex items-center justify-center border-2 border-dashed border-white rounded-lg right-[10%] bottom-[3rem]">
                    <div className="marker sm:size-[100px] size-[70px] bg-gradient-to-r from-yellow-400 to-orange-600 rounded-lg" />
                </div>
            </div>
            <div className="spacer final"></div>
        </div>
    );
};

export default ScrollCreativityTask;
