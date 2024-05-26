import Title from "../components/ui/Title";
import WhatIDoCard from "../components/WhatIDoCard";

const HomePage = () => {
	return (
		<section className="py-14">
			<div className="part-wrapper">
				<Title>About</Title>
				<p className="max-w-[500px] mb-4 | paragraph">
					I'm a Front-End Web Developer from Cairo, Egypt. With a passion for
					crafting seamless digital experiences, I specialize in bringing
					designs to life through code. Whether it's building responsive
					layouts, optimizing user interfaces, or enhancing user interactions.
				</p>
				<p className="my-4 max-w-[500px] | paragraph ">
					My journey is all about transforming intricate concepts into visually
					stunning and user-friendly interfaces. Let's collaborate to turn your
					ideas into captivating online experiences.
				</p>
			</div>
			<div className="part-wrapper">
				<h2 className="font-poppin font-medium text-black dark:text-white-100 text-2xl mb-6">
					What I Do!
				</h2>
				<div className="flex flex-wrap md:gap-5">
					<WhatIDoCard
						color="red"
						title="Web Devlopment"
						breif="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam sed modi temporibus"
					/>
					<WhatIDoCard
						color="blue"
						title="Web Devlopment"
						breif="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam sed modi temporibus"
					/>
					<WhatIDoCard
						color="blue"
						title="Web Devlopment"
						breif="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam sed modi temporibus"
					/>
					<WhatIDoCard
						color="red"
						title="Web Devlopment"
						breif="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magnam sed modi temporibus"
					/>
				</div>
			</div>
		</section>
	);
};

export default HomePage;
