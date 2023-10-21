import React from "react";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { differenceInWeeks, startOfToday } from "date-fns";

const Hero = () => (
	<div className="hero min-h-screen bg-fuchsia-100 py-20 p-x-6">
		<div className="hero-content flex-col lg:flex-row gap-x-10 max-w-5xl">
			<div className="flex flex-col gap-y-4">
				<h1 className="text-5xl font-bold">
					<span className="text-secondary">Pepper:</span> Your New Best Friend!
				</h1>
				<p className="italic">Located in Potts Point, Sydney</p>
				<p className="py-6 text-2xl">
					Meet Pepper, the adorable
					{" " + differenceInWeeks(startOfToday(), new Date(2023, 7, 31))}
					-week-old rabbit with a heart as big as the park she was found in
					(Hyde Park).
				</p>
				<p className="py-6 text-2xl">
					Rescued from abandonment, Pepper has transformed hardship into a
					joyful, loving spirit.
				</p>
				<a
					href="#intro"
					className="btn btn-secondary btn-outline animate-bounce self-start"
				>
					Hop to it
					<ArrowDown className="h-6 w-6" />
				</a>
			</div>
			<Image
				src="/assets/images/hand.jpg"
				alt="Pepper at 4 weeks in Hyde park"
				width={500}
				height={500}
				className="mask mask-heart max-w-100"
			/>
		</div>
	</div>
);

export default Hero;
