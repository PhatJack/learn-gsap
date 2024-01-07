import gsap, { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
import React, { useEffect, useLayoutEffect, useRef } from 'react'

const Contact = () => {

	const bubbleRef = useRef(null)
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.from("#text p", {
			scrollTrigger: {
				trigger: "#contact",
				start: "top 30%",
				end: "bottom bottom",
				// markers: true,
				scrub: 1,
			},
			stagger: 0.5,
			x: "-40%",
			opacity: 0,
		})
	}, [])

	return (
		<div id='contact' className='w-full h-screen flex justify-between items-center border-t-2 border-black'>
			<div id='text' className="w-full flex-1 h-full flex flex-col justify-center items-center uppercase">
				<p className='text-[100px] leading-[0.75]'>Contact</p>
				<p className='pl-[150px] text-[100px]'>with me</p>
			</div>
			<div ref={bubbleRef} id='contact-ball' className="w-full flex-[2] h-full relative">
				<div id='bubbleScale' className="w-[400px] h-[400px] absolute bottom-0 right-0">
					<Link
						id="contactBallon" className="w-full h-full flex flex-col justify-center items-center rounded-full border-2 border-black transition-all hover:border-[#ea4335]"
						href={"mailto:tienphat.ng693@gmail.com"}>
						<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none">
							<path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ea4335" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<rect x="3" y="5" width="18" height="14" rx="2" stroke="#ea4335" stroke-width="2" stroke-linecap="round" />
						</svg>
						<span className='text-3xl tracking-wide font-medium'>Email</span>
					</Link>
				</div>
				<div id='bubbleScale' className="w-[270px] h-[270px] absolute top-[18.55em] right-[0]">
					<Link
						id="contactBallon" className="w-full h-full flex flex-col justify-center items-center rounded-full border-2 border-black transition-all hover:border-[#4460a0]"
						href={"https://www.facebook.com/jack.willam2003"} target='_blank'>
						<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none">
							<path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" fill="#4460a0" />
						</svg>
						<span className='text-3xl leading-[0.75] tracking-wide font-medium'>Facebook</span>
					</Link>
				</div>
				<div id='bubbleScale' className="w-[350px] h-[350px] absolute top-[18.75em] right-[16.75em]">
					<Link
						id="contactBallon" className="w-full h-full flex flex-col justify-center items-center rounded-full border-2 border-black transition-all hover:border-[#e1317a]"
						href={"https://www.instagram.com/tuila_tien_phat/"} target='_blank'>
						<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#e1317a" />
							<path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#e1317a" />
							<path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#e1317a" />
						</svg>
						<span className='text-3xl tracking-wide font-medium'>Instagram</span>
					</Link>
				</div>
				<div id='bubbleScale' className="w-[335px] h-[335px] absolute bottom-0 right-[24.9em]">
					<Link
						id="contactBallon" className="w-full h-full flex flex-col justify-center items-center transition-all hover:border-[#0a66c2] rounded-full border-2 border-black"
						href={"mailto:tienphat.ng693@gmail.com"}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="#0a66c2" width="50" height="50" viewBox="0 0 32 32">
							<title />
							<g id="Linkedln">
								<path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM9.11,11.39a2.22,2.22,0,0,0,1.6-.58,1.83,1.83,0,0,0,.6-1.38A2.09,2.09,0,0,0,10.68,8a2.14,2.14,0,0,0-1.51-.55A2.3,2.3,0,0,0,7.57,8,1.87,1.87,0,0,0,7,9.43a1.88,1.88,0,0,0,.57,1.38A2.1,2.1,0,0,0,9.11,11.39ZM11,13H7.19V24.54H11Zm13.85,4.94a5.49,5.49,0,0,0-1.24-4,4.22,4.22,0,0,0-3.15-1.27,3.44,3.44,0,0,0-2.34.66A6,6,0,0,0,17,14.64V13H13.19V24.54H17V17.59a.83.83,0,0,1,.1-.43,2.73,2.73,0,0,1,.7-1,1.81,1.81,0,0,1,1.28-.44,1.59,1.59,0,0,1,1.49.75,3.68,3.68,0,0,1,.44,1.9v6.15h3.85ZM17,14.7a.05.05,0,0,1,.06-.06v.06Z" />
							</g>
						</svg>
						<span className='text-3xl tracking-wide font-medium'>Linkedln</span>
					</Link>
				</div>
				<div id='bubbleScale' className="w-[220px] h-[220px] absolute bottom-0 left-[20.25em]">
					<Link
						id="contactBallon" className="w-full h-full flex flex-col justify-center items-center rounded-full border-2 border-black transition-all hover:border-gray-700"
						href={"mailto:tienphat.ng693@gmail.com"}>
						<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="50" width="50" version="1.1" id="Layer_1" viewBox="-143 145 512 512" xmlSpace="preserve">
							<g>
								<path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7   c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4   c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8   c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4   c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z" />
								<path d="M224.5,351.2c0.9-20.1-1.8-39.6-8.6-58.6c-0.9-2.4-2-3.3-4.5-2.6c-5.6,1.7-11.4,3-16.9,5c-15.2,5.5-29.1,13.5-42.6,22.2   c-1.4,0.9-3.5,1.5-5.2,1.2c-22.1-3.9-44.3-3.7-66.5-0.3c-2.2,0.3-5-0.2-6.8-1.3c-15.7-10.2-31.7-20.2-50-25   c-15.1-4-12-4.8-16.3,8.9c-5.1,16.4-7.1,33.4-6,50.6c0.1,1.2-0.8,2.7-1.6,3.8c-6.6,7.9-11.7,16.6-14.8,26.4c-6,19-4.8,38.2-1,57.3   c7.5,37.5,32.8,63.8,70.2,70.3c19.3,3.4,39.2,3.7,57.3,5.2c20.2-1.5,38.9-1.6,57.1-4.5c31.8-5.1,55.8-22,67.8-52.7   c4.2-10.7,6.5-22.4,7.9-33.8c3.1-25.2-1.2-48.8-18.4-68.7C225,353.8,224.5,352.4,224.5,351.2z M208.1,459.1   c-3.3,15.6-12.4,26.3-27.6,31.8c-14.7,5.4-29.9,7.6-45.4,8.6c-7.5,0.5-15,0.1-22.5,0.1c-20.2,0.4-40.4-0.4-59.9-6.2   c-24.5-7.3-35.5-21.9-36.2-47.5c-0.3-9.1,0.7-17.9,5-26.1c8.5-16.5,23.2-22.3,40.6-22.6c9.5-0.1,19.1,0.7,28.7,1.6   c20.1,1.8,40-0.1,60-1.2c8.8-0.5,17.8-0.7,26.4,0.8c18.5,3.2,32.5,21.6,32.8,42.3C210,446.8,209.3,453.1,208.1,459.1z" />
								<path d="M56.1,424.8c-5.5,5.7-7.4,12.9-7.7,19.3c0,9.6,2.8,17.3,7.7,22.3c6.8,6.9,16.1,6.7,22.6-0.3c9.8-10.6,9.7-30.5,0-41   C72.2,418,62.7,417.9,56.1,424.8z" />
								<path d="M148.2,424c-11.2,10.3-11.2,33,0,43.2c6.5,5.9,15.3,5.6,21.4-0.7c5.6-5.8,7.6-13.1,7.8-21c-0.2-7.9-2.2-15.1-7.9-20.9   C163.4,418.3,154.6,418.1,148.2,424z" />
							</g>
						</svg>
						<span className='text-3xl tracking-wide font-medium'>Github</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Contact