import React from "react";
import Heart from "@/assets/icons/heart.svg";
import Sparkle from "@/assets/icons/sparkle.svg";
import Education from "@/assets/icons/education.svg";
const content = [
	{
		heading: "Loving Demeanor",
		text: "Pepper is a cuddle expert, wrapping everyone they meet in warm, fuzzy affection. \nTheir gentle nature makes them a perfect companion for families and individuals alike.",
		svg: <Heart className="h-12 w-12 m-auto text-primary" />,
	},
	{
		heading: "Playful Nature",
		text: "Despite their early challenges, Pepper bounds with energy. \nWhether it's chasing toys or exploring their surroundings, Pepper is always up for an adventure.",
		svg: <Sparkle className="h-12 w-12 m-auto text-primary" />,
	},
	{
		heading: "Easy to Care For",
		text: "Pepper comes lovelingly potty-trained. \nPepper's adaptability and friendly disposition make them a delightful addition to any home.",
		svg: <Education className="h-12 w-12 m-auto text-primary" />,
	},
];

const Card = () => (
	<section className="bg-fuchsia-100 min-h-screen flex flex-col justify-center">
		<div className="container py-52 m-auto">
			<h2 className="text-center mb-16 text-5xl font-bold">
				What makes Pepper the perfect pet?
			</h2>
			<div className="flex flex-row gap-4 flex-wrap justify-center">
				{content.map((item, i) => (
					<div
						key={i}
						className="rounded-lg py-8 px-6 flex flex-col w-3/12 gap-y-6 glass border-2 border-primary text-center shadow-lg"
					>
						{item.svg}

						<h3 className="text-2xl">{item.heading}</h3>
						<p>{item.text}</p>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Card;
