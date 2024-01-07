import React, { useEffect, useState } from 'react'
import '../css/CounterLoader.css'
import gsap from 'gsap'
const CounterLoader = () => {
	useEffect(() => {
		const loading = () => {
			gsap.to(".percent", {
				duration: 4.5,
				innerText: 100,
				snap: {
					innerText: 1,
					duration: {
						min: 1,
						max: 2
					}
				},
			})
			gsap.to(".percent", {
				delay: 4.5,
				opacity: 0,
			})
			gsap.to(".left-window", {
				delay: 5,
				left: "-100%",
				duration: 2.5,
				ease: "power2.inOut",
			})
			gsap.to(".right-window", {
				delay: 5,
				right: "-100%",
				duration: 2.5,
				ease: "power2.inOut"
			})
			gsap.to(".loader", {
				delay: 7.25,
				display: "none"
			})
			gsap.to(".line", {
				top: 0,
				duration: 4.75,
			})
			gsap.to(".line", {
				delay: 4.75,
				display: "none"
			})
		}
		loading()
	}, [])

	return (
		<div className="loader">
			<div className='progress'>
				<div id="bar">
					<div className="left-window"></div>
					<div className="right-window"></div>
				</div>
				<div className="percent"></div>
				<div className="line w-px h-screen bg-white fixed left-0 right-0 -top-full m-auto "></div>
			</div>
		</div>
	)
}

export default CounterLoader