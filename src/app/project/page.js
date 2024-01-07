'use client'
import gsap, { ScrollToPlugin, ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import './index.css'
import Project1 from '../assets/project/project.jpg'
import Project2 from '../assets/project/project1.jpg'
import Project3 from '../assets/project/project2.jpg'
import Project4 from '../assets/project/project3.jpg'
import Project5 from '../assets/project/project4.jpg'

const Project = () => {
	const divRef = useRef(null)
	const projectRef = useRef(null)
	gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)
	useEffect(() => {
		let projects = gsap.utils.toArray(".project-item")
		const horizontalScroll = gsap.fromTo(projects, {
			translateX: 0,
		}, {
			translateX: "-400vw",
			ease: "none",
			duration: 1,
			scrollTrigger: {
				trigger: divRef.current,
				start: "top top",
				end: "+=4000",
				scrub: true,
				pin: true,
				snap: 1 / (projects.length - 1),
			}
		})
		return () => {
			horizontalScroll.kill()
		}
	}, [])
	const menu = [Project1, Project2, Project3, Project4, Project5]
	return (
		<div ref={projectRef} id='project' className="w-full h-full overflow-hidden">
			<p className='w-full text-center text-3xl py-5 border-b-2 border-black'>Project</p>
			<div ref={divRef} className="container-project w-[500vw] h-screen flex flex-nowrap ">
				{
					...Array(5).fill(0).map((_, index) => (
						<div key={index} className="project-item w-screen h-screen flex border border-black border-collapse">
							<div className="w-full h-auto flex flex-col border-r-2 border-black p-5">
								<Image
									src={menu[index]}
									alt={`image-${index}`}
									loading='lazy'
									className='mb-5 border-2 border-black'
								/>
								<button className='slideHoverButton w-fit px-5 py-3 border-2 border-black font-medium'>View Website</button>
							</div>
							<div className="w-full h-full p-5">
								<div className="border-2 border-black mb-5">
									<p className='p-4 border-b-2 border-black font-semibold'>Description</p>
									<div className="w-full p-2 flex flex-col gap-2">
										<p>Fugiat sit est qui nulla do voluptate tempor aliqua cupidatat cupidatat. In incididunt amet laboris voluptate ut tempor et ut anim cupidatat. Lorem dolore incididunt ad deserunt aliquip mollit irure aute consequat incididunt proident quis reprehenderit magna. Quis aliquip enim quis id enim aliqua nisi magna fugiat. Dolor est Lorem duis et commodo adipisicing commodo eiusmod veniam ullamco id in elit.</p>
										<p>Fugiat sit est qui nulla do voluptate tempor aliqua cupidatat cupidatat. In incididunt amet laboris voluptate ut tempor et ut anim cupidatat. Lorem dolore incididunt ad deserunt aliquip mollit irure aute consequat incididunt proident quis reprehenderit magna. Quis aliquip enim quis id enim aliqua nisi magna fugiat. Dolor est Lorem duis et commodo adipisicing commodo eiusmod veniam ullamco id in elit.</p>
										<p>Fugiat sit est qui nulla do voluptate tempor aliqua cupidatat cupidatat. In incididunt amet laboris voluptate ut tempor et ut anim cupidatat. Lorem dolore incididunt ad deserunt aliquip mollit irure aute consequat incididunt proident quis reprehenderit magna. Quis aliquip enim quis id enim aliqua nisi magna fugiat. Dolor est Lorem duis et commodo adipisicing commodo eiusmod veniam ullamco id in elit.</p>
										<p>Fugiat sit est qui nulla do voluptate tempor aliqua cupidatat cupidatat. In incididunt amet laboris voluptate ut tempor et ut anim cupidatat. Lorem dolore incididunt ad deserunt aliquip mollit irure aute consequat incididunt proident quis reprehenderit magna. Quis aliquip enim quis id enim aliqua nisi magna fugiat. Dolor est Lorem duis et commodo adipisicing commodo eiusmod veniam ullamco id in elit.</p>
									</div>
								</div>
								<p className='p-2 border-x-2 border-t-2 border-black font-semibold'>Information</p>
								<table className='w-full flex border-2 border-black'>
									<thead className='w-full max-w-[20%]'>
										<tr className='flex flex-col'>
											<th className='text-left border-b-2 border-black border-r-2 p-2'>Name</th>
											<th className='text-left border-b-2 border-black border-r-2 p-2'>Category</th>
											<th className='text-left border-b-2 border-black border-r-2 p-2'>Language</th>
											<th className='text-left p-2 border-r-2 border-black'>Year</th>
										</tr>
									</thead>
									<tbody className='w-full'>
										<tr className='flex flex-col'>
											<td className='text-left border-b-2 border-black p-2'>Aute eiusmod Lorem ad aliquip.</td>
											<td className='text-left border-b-2 border-black p-2'>Dolore Lorem cupidatat sint culpa quis.</td>
											<td className='text-left border-b-2 border-black p-2'>Laborum dolore cupidatat id deserunt nostrud officia reprehenderit eu.</td>
											<td className='text-left p-2'>2023</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Project