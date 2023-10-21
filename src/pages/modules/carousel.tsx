import Image from "next/image";
import React from "react";

const images = [
	{
		alt: "Pepper Rabbit",
		src: "/assets/images/play.jpg",
		width: 400,
	},
	{
		alt: "Pepper Rabbit",
		src: "/assets/images/hand.jpg",
		width: 250,
	},

	{
		alt: "Pepper Rabbit",
		src: "/assets/images/litter.jpg",
		width: 250,
	},
	{
		alt: "Pepper Rabbit",
		src: "/assets/images/big.jpg",
		width: 250,
	},
];

const Carousel = () => (
	<section
		id="intro"
		className="flex flex-col justify-center text-center px-6 py-20 gap-y-16 min-h-screen w-100"
	>
		<h2 className="text-3xl md:text-5xl font-bold">{"Pepper's Gallery 🎨"}</h2>
		<div className="mx-auto relative" style={{ width: "100%" }}>
			<div
				className="carousel rounded-box mx-auto max-w-4xl"
				style={{ width: "100%" }}
			>
				{images.map((image, i) => (
					<div className="carousel-item mr-5 relative shadow-lg" key={i}>
						<Image
							src={image.src}
							alt={image.alt}
							height={300}
							width={image.width}
							placeholder="blur"
							blurDataURL={image.src}
							className="max-w-100"
						/>
					</div>
				))}
				<div className="carousel-item flex flex-col p-8 justify-center flex-wrap shadow-lg bg-pink-100">
					<p className="text-gray-700 text-3xl w-80">More coming soon...</p>
					<p className="mt-4 text-3xl">👀</p>
				</div>
			</div>
			<p className="italic">Pepper will age like a fine wine</p>
		</div>
	</section>
);

export default Carousel;
