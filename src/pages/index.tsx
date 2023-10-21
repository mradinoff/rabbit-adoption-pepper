import Card from "./modules/card";
import Carousel from "./modules/carousel";
import Hero from "./modules/hero";
import Form from "./modules/form";

const Index = () => {
	return (
		<main>
			<div className="flex flex-col w-100">
				<Hero />
				<Carousel />
				<Card />
				<Form />
			</div>
		</main>
	);
};

export default Index;
