'use client'
import { useRef, useState } from "react";
import Item from "./components/Item";

const carousel = ['a','b','c','d','e','f','g'];

export default function Home() {

	let interval = useRef(null);
	const [indexCarousel, setIndexCarousel] = useState(0);
	const [currentItem, setCurrentItem] = useState(carousel[indexCarousel]);


	const moveCarousel = () => {
		stopCarousel();
		interval.current = setInterval(() => {
			setIndexCarousel(current => {
				let newValue = current+1;
				if(newValue>=carousel.length)
					newValue = 0;
				setCurrentItem(carousel[newValue]);
				return newValue;
			});
			
		}, 1000);
	}

	const handleStep = (movement) => {
		stopCarousel();
		let newValue = indexCarousel;
		if(movement === 'prev')
			newValue--;
		else if(movement === 'next')
			newValue++;
		if(newValue>=carousel.length)
			newValue = 0;
		else if(newValue <0)
			newValue = carousel.length-1;

		setIndexCarousel(newValue);
		setCurrentItem(carousel[newValue]);
		moveCarousel();
		
	}

	const stopCarousel = () => {
		if(interval.current != null)
			clearInterval(interval.current);
	}

	moveCarousel();
    return (
		<>
		<div className='container flex min-w-full justify-center min-h-screen items-center flex-col gap-4 bg-white'>
			<div className='flex gap-4'>
				<button className='rounded-full bg-violet-600 px-5 py-1' onClick={moveCarousel}>
					Play!
				</button>
				<button className='rounded-full bg-violet-600 px-5 py-1' onClick={stopCarousel}>
					Stop!
				</button>
			</div>
			<div className='container bg-slate-500 text-white w-11 py-5 rounded'>
				<Item content={currentItem} />
			</div>
			<div className='flex gap-4'>
				<button className='rounded-full bg-violet-600 px-5 py-1' onClick={() => {handleStep('prev')}}>{`<<`}</button>
				<button className='rounded-full bg-violet-600 px-5 py-1' onClick={() => {handleStep('next')}}> {`>>`} </button>
			</div>
		</div>
		</>
	);
}
