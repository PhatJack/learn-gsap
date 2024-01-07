import React, { useEffect, useRef } from 'react'
import gsap from 'gsap/all';
import Image from 'next/image';
import KageYama from '../../assets/img/kageyama.png'
import Saitama from '../../assets/img/saitama.png'
import OnePiece from '../../assets/img/onepiece.png'
import Panda from '../../assets/img/panda.png'
import Sato from '../../assets/img/sato.png'
import PolarBear from '../../assets/img/polarbear.png'
import ZoroLuffy from '../../assets/img/zoroluffy.png'
import Totoro from '../../assets/img/totoro.png'
import Cat from '../../assets/img/cat.png'
import Duck from '../../assets/img/duck.png'
const Index = () => {
	const plane = useRef(null)
	const plane1 = useRef(null)
	const plane2 = useRef(null)
	let requestAnimationFrameId = null;
	let xForce = 0;
	let yForce = 0;
	const easing = 0.08;
	const speed = 0.01;
	const manageMouseMove = (e) => {
		const { movementX, movementY } = e
		xForce += movementX * speed;
		yForce += movementY * speed;

		if (requestAnimationFrameId == null) {
			requestAnimationFrameId = requestAnimationFrame(animate);
		}
	}
	const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

	const animate = () => {
		xForce = lerp(xForce, 0, easing);
		yForce = lerp(yForce, 0, easing);
		gsap.set(plane.current, { x: `+=${xForce}`, y: `+=${yForce}` })
		gsap.set(plane1.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })
		gsap.set(plane2.current, { x: `+=${xForce * 0.75}`, y: `+=${yForce * 0.75}` })

		if (Math.abs(xForce) < 0.01) xForce = 0;
		if (Math.abs(yForce) < 0.01) yForce = 0;

		if (xForce != 0 || yForce != 0) {
			requestAnimationFrame(animate);
		}
		else {
			cancelAnimationFrame(requestAnimationFrameId)
			requestAnimationFrameId = null;
		}
	}
	useEffect(() => {
		const tl = gsap.timeline()
		tl.from(".absolute",{
			scale: 0,
			stagger: 0.2,
			duration: 0.5,
			delay: 6
		})
		gsap.from(".font-regular p",{
			delay: 8,
			translateY: "100%",
			opacity: 0,
			ease: "power1.in",
			stagger: 0.2
		})
	}, [])
	return (
		<div
			onMouseMove={(e) => {
				manageMouseMove(e)
			}}
			id='home'
			className='w-full h-screen flex justify-center items-center relative overflow-hidden border-b border-black'>
			<div
				className="flex flex-col text-[3.8vw] leading-[4.5vw] text-center text-white font-regular font-normal w-full z-[1] uppercase pointer-events-none mix-blend-difference overflow-hidden">
				<p>
					<span className='!font-italic mr-4'>J</span>ack
					<span className='!font-italic mr-1'>P</span>hat
				</p>
				<p>front-end developer</p>
				<p> <span className='font-pixel !text-[4vw]'>☼Developer☀</span> </p>
				<p> <span className='font-italic mr-2'>E</span>njoy your day</p>
				<p>Based in Vietnam</p>
			</div>
			<div ref={plane} className="absolute w-full h-full">
				<Image
					className='absolute left-[90%] top-[70%]'
					src={KageYama}
					width={150}
					alt='image'
				/>
				<Image
					className='absolute left-[5%] top-[75%]'
					src={Saitama}
					width={150}
					alt='image'
				/>
				<Image
					className='absolute left-[35%] top-[5%]'
					src={Sato}
					width={150}
					alt='image'
				/>
			</div>
			<div ref={plane1} className="absolute w-full h-full">
				<Image
					className='absolute left-[5%] top-[20%]'
					src={Panda}
					width={150}
					alt='image'
				/>
				<Image
					className='absolute left-[80%] top-[15%]'
					src={PolarBear}
					width={150}
					alt='image'
				/>
				<Image
					className='absolute left-[70%] top-[50%]'
					src={OnePiece}
					width={150}
					alt='image'
				/>
			</div>
			<div ref={plane2} className="absolute w-full h-full">
				<Image
					className='absolute left-[20%] top-[50%]'
					src={ZoroLuffy}
					width={150}
					alt='image'
				/>
				<Image
					className='absolute left-[85%] top-[35%]'
					src={Totoro}
					width={150}
					alt='image'
				/>
				<Image
					className='absolute left-[55%] top-[75%]'
					src={Cat}
					width={150}
					alt='image'
				/>
			</div>
		</div>
	)
}

export default Index