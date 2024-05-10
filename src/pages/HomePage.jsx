import Title from "../components/ui/Title";

const HomePage = () => {
	return (
		<section className="py-14">
			<div className="part-wrapper">
				<Title>About</Title>
				<p className="max-w-[500px] mb-4 | paragraph">
					I'm a Front-End Web Developer from Cairo,
					Egypt. With a passion for crafting seamless digital experiences, I
					specialize in bringing designs to life through code. Whether it's
					building responsive layouts, optimizing user interfaces, or enhancing
					user interactions.
				</p>
				<p className="mt-4 max-w-[500px] | paragraph ">
					My journey is all about transforming intricate concepts into visually
					stunning and user-friendly interfaces. Let's collaborate to turn your
					ideas into captivating online experiences.
				</p>
			</div>
		</section>
	);
};

export default HomePage;
