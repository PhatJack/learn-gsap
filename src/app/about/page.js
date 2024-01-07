'use client'
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import Avatar from '../assets/avatar2.jpg'
import gsap, { ScrollTrigger } from 'gsap/all'
const About = () => {
	const sectionRef = useRef(null)
	const refsOne = useRef([])
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.fromTo("#img", {
			opacity: 0,
			rotateZ: 180,
			scale: 0,
			translateY: 100,
			translateX: "-100%",
		}, {
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 50%",
				end: "bottom bottom",
				scrub: 1,
			},
			opacity: 1,
			rotateZ: 0,
			scale: 1,
			translateY: 0,
			translateX: 0,
		})
		gsap.from(refsOne.current, {
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 50%",
				end: "bottom bottom",
				scrub: 1,
			},
			y: "100%",
			opacity: 0,
			stagger: { each: 0.35 },
		})
		gsap.from("#downloadPdf", {
			scrollTrigger: {
				trigger: "#paragraph",
				start: "top bottom",
				end: "bottom bottom",
				// markers: true,
				scrub: 0.5,
			},
			y: "100%",
			opacity: 0,
		})
	}, [])
	const splitWords = (phrase) => {
		let body = [];
		phrase.split(" ").forEach((word, i) => {
			body.push(<span key={word + "_" + i} ref={el => { refsOne.current.push(el) }}>{word} </span>)
		})
		return body
	}
	const phraseOne = 'From a modest beginning, I embraced design with passion and relentless dedication. Despite a slower start, I pushed myself to work harder, continuously striving for improvement.'
	const phraseTwo = 'Fuelled by creativity, I aim to leave a lasting impact through my work, exceeding expectations along the way. My unwavering passion propels me forward on this design journey, shaping me into the designer I am today.'
	return (
		<section
			ref={sectionRef}
			id='about' className='w-full h-screen flex justify-center items-center'>
			<div className="w-full flex gap-32 justify-between p-4">
				<div id='img' className="flex gap-4 flex-col p-4 border-2 border-black">
					<div className="relative w-[420px] h-[620px] border-2 border-black">
						<Image
							src={Avatar}
							fill
							objectFit='cover'
							objectPosition='center'
							loading='lazy'
							alt='My Avatar'
						/>
					</div>
					<div className="flex flex-col items-end w-full">
						<span className='text-base'>Front-end Developer</span>
						<p className='font-bold text-2xl tracking-wide'>Nguyen Tien Phat</p>
					</div>
				</div>
				<div id='paragraph' className="w-full flex flex-col gap-10 self-end text-lg">
					<p>
						{
							splitWords(phraseOne)
						}
					</p>
					<p>
						{
							splitWords(phraseTwo)
						}
					</p>
					<button id='downloadPdf' className='w-fit flex gap-1 items-center border-2 px-4 py-2 border-black text-lg group hover:bg-black transition-all duration-700'>
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 24 24" fill="none">
							<path className='group-hover:stroke-white transition-all' d="M8 11L12 15M12 15L16 11M12 15V3M21 11V17.7992C21 18.9193 21 19.4794 20.782 19.9072C20.5903 20.2835 20.2843 20.5895 19.908 20.7812C19.4802 20.9992 18.9201 20.9992 17.8 20.9992H6.2C5.0799 20.9992 4.51984 20.9992 4.09202 20.7812C3.71569 20.5895 3.40973 20.2835 3.21799 19.9072C3 19.4794 3 18.9193 3 17.7992V11" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						<span className='group-hover:text-white transition-all'>Download CV</span>
					</button>
				</div>
			</div>
		</section>
	)
}

export default About