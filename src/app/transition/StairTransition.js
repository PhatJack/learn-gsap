import locomotiveScroll from 'locomotive-scroll';
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap';


const StairTransition = () => {
	useEffect(() => {
		// Initialize Locomotive Scroll
		const scroll = new locomotiveScroll({
			el: document.querySelector('#scroll-container'),
			smooth: true,
		});

		// Function to start the counter animation
		const startLoader = () => {
			let counterElement = document.querySelector("#scrolling-count");
			let currentValue = 0;

			const updateCounter = () => {
				if (currentValue === 100) {
					// Start the bar animation when currentValue reaches 100
					gsap.to(".bar", {
						duration: 1.5,
						delay: 0.75,
						height: 0,
						stagger: {
							amount: 0.5,
						},
						ease: "power4.inOut",
					});
					return;
				}
				currentValue += Math.floor(Math.random() * 10) + 1;
				if (currentValue > 100) {
					currentValue = 100;
				}

				if (counterElement) {
					counterElement.textContent = currentValue;
				}

				let delay = Math.floor(Math.random() * 200) + 50;
				setTimeout(updateCounter, delay);
			};

			updateCounter();

			gsap.to("#scrolling-count", {
				delay: 3,
				duration: 0.25,
				opacity: 0,
			});
		};

		// Call the startLoader function to initiate the animation
		startLoader();

		// Cleanup
		return () => {
			scroll.destroy();
		};
	}, []);

	return (
		<div id='scroll-container'
			className='fixed w-full h-full z-30'
		>
			<h1
				id='scrolling-count'
				className='fixed w-full h-full flex justify-end items-end z-[1000] text-[#bcbcc4] p-[0.2em_0.4em] text-[20vw] font-mono'>0</h1>
			<div className="fixed w-screen h-screen z-20 flex">
				{
					[...Array(5)].map((_, index) => (
						<div className="bar w-[20vw] h-[105vh] bg-[#1a1a1a]"></div>
					))
				}
			</div>
		</div>
	)
}

export default StairTransition