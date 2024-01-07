'use client'
import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

const variants = {
	open: {
		width: 480,
		height: 400,
		zIndex: 1,
		opacity: 1,
		transition: {
			duration: 0.75,
			ease: [0.22, 1, 0.36, 1]
		}
	},
	closed: {
		width: 144,
		height: 50,
		zIndex: -1,
		opacity: 0,
		transition: {
			duration: 0.45,
			delay: 0.2,
		}
	}
}
const slideText = {
	initial: {
		opacity: 0,
		rotateX: 90,
	},
	enter: (i) => ({
		opacity: 1,
		rotateX: 0,
		transition: {
			duration: 0.2,
			delay: 0.1 + (i * 0.1),
			opacity: { duration: 0.15 },
			ease: [.215, .61, .351, 1]
		}
	}),
	exit: (i) => ({
		opacity: 0,
	})
}
const Index = () => {
	const [isOpen, setIsOpen] = useState(false)
	const modalRef = useRef(null)
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				setIsOpen(false)
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	return (
		<header className='w-full fixed top-0 flex justify-between items-center p-6 text-black z-10'>
			<p className='uppercase text-2xl py-3'><span className='font-bold'>jack </span>Phat</p>
			<div
				onClick={() => setIsOpen(!isOpen)}
				className={`navigate w-fit flex items-center gap-2 border-2 border-black px-4 py-3 rounded-sm cursor-pointer ${isOpen ? "hidden" : ""}`}>
				<span className={`inline-block uppercase`}>navigate</span>
				<div className={`burger relative flex flex-col gap-1 transition-all`}>
					<span className={`h-0.5 w-6 bg-black rounded-md`}></span>
					<span className={`h-0.5 w-6 bg-black rounded-md`}></span>
					<span className={`h-0.5 w-6 bg-black rounded-md`}></span>
				</div>
			</div>
			<motion.div
				ref={modalRef}
				variants={variants}
				animate={isOpen ? 'open' : 'closed'}
				initial={'closed'}
				className={`expand-menu`}>
				<div
					onClick={() => setIsOpen(false)}
					className="expand-menu-header w-full flex items-center gap-2 border-2 py-3 px-4 border-black bg-black cursor-pointer">
					<div className={`close-burger relative flex flex-col gap-1`}>
						<span className={`h-0.5 w-6 bg-white rounded-md relative`}></span>
						<span className={`h-0.5 w-6 bg-white rounded-md relative`}></span>
					</div>
					<motion.span
						initial={{
							opacity: 0,
							textAlign: 'right',
						}}
						animate={{
							opacity: 1,
							textAlign: 'left',
						}}
						className={`inline-block relative uppercase h-fit text-white`}>close</motion.span>
				</div>
				<AnimatePresence>
					{
						isOpen && (
							<ul className="w-full h-full flex flex-col px-4 py-5 gap-4 box-border">
								{
									["Home", "About", "Project", "Contact"].map((item, index) => (
										<li>
											<Link
												href={`/#${item.toLowerCase()}`}>
												<motion.div
													variants={slideText}
													initial={"initial"}
													animate={"enter"}
													exit={"exit"}
													custom={index}
													key={index}
													className={`w-full flex justify-between items-center border-b py-3 group transition-all hover:bg-black hover:rounded-md`}>

													<span className='uppercase text-lg group-hover:pl-5 group-hover:text-white transition-all tracking-wide'>
														{item}
													</span>
													<div className="border rounded-full border-[#1b1b1b] group-hover:mr-3 py-1 transition-all group-hover:bg-white group-hover:border-[#607274] ">
														<svg xmlns="http://www.w3.org/2000/svg" width="65" height="30" viewBox="0 0 24 24" fill="none">
															<path className='group-hover:stroke-black duration-300' d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" strokeLinejoin='round' />
														</svg>
													</div>
												</motion.div>
											</Link>
										</li>
									))
								}
							</ul>
						)
					}
				</AnimatePresence>
			</motion.div>
		</header>
	)
}

export default Index