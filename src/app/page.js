"use client"
import About from './about/page'
import Project from './project/page'
import Contact from './contact/page'
import Hero from './components/hero'
import CounterLoader from './transition/CounterLoader'
import { useEffect, useState } from 'react'
export default function Home() {
	return (
		<>
			<CounterLoader />
			<main className="w-full min-h-screen bg-[#f5f4f3]">
				<Hero />
				<div className="w-full h-full px-[350px] py-10 relative border-b-2 border-black">
					<About />
				</div>
				<Project />
				<Contact />
			</main>
		</>
	)
}
