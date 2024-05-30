import ResumeInfo from "../components/ResumeInfo";
import ProgressBar from "../components/ui/ProgressBar";
import Tag from "../components/ui/Tag";
import Title from "../components/ui/Title";

import eduImage from "../assets/edu-icon.webp";
import expImage from "../assets/exper-icon.webp";

const ResumePage = () => {
	return (
		<section className="py-14">
			<div className="mb-5 | part-wrapper">
				<Title>Resume</Title>
				<div className="flex flex-col md:flex-row gap-4">
					<ResumeInfo>
						<ResumeInfo.Title>
							<img src={eduImage} alt="education-Image" />
							Education
						</ResumeInfo.Title>
						<ResumeInfo.Card
							date="2022-2023"
							header="Harvard cs50x certificate"
							text="Egypt, cairo"
							color="red"
						/>
						<ResumeInfo.Card
							date="2023-2023"
							header="JavaScript course on udemy"
							text="
							The Complete JavaScript Course 2023"
							color="blue"
						/>
						<ResumeInfo.Card
							date="2023-2024"
							header="React course on udemy"
							text="React - The Complete Guide 2024 (incl. Next.js, Redux)"
							color="red"
						/>
					</ResumeInfo>
					<ResumeInfo>
						<ResumeInfo.Title>
							<img src={expImage} alt="education-Image" />
							Experience
						</ResumeInfo.Title>
						<ResumeInfo.Card
							date="2023-2023"
							header="Movie website"
							text="Project with MVC structure"
							color="blue"
						/>
						<ResumeInfo.Card
							date="2023-2024"
							header="ecommerce store"
							text="With React"
							color="red"
						/>
						<ResumeInfo.Card
							date="2024-2024"
							header="Contributed to open-source projects on GitHub"
							text="collaborating with other developers and improving codebases"
							color="blue"
						/>
					</ResumeInfo>
				</div>
			</div>
			<div className="pt-[70px] pb-[60px] bg-white-400 dark:bg-gray-500 | part-wrapper flex flex-col md:flex-row gap-5">
				<div className="grow-[1.3] shrink-0 basis-2">
					<h3 className="| subTitle">Working Skills</h3>
					<div>
						<ProgressBar title="JavaScript" percent={90} color="#ff6464" />
						<ProgressBar title="React" percent={80} color="#9272d4" />
						<ProgressBar title="nextJs" percent={65} color="#5185d4" />
						<ProgressBar title="TypeScript" percent={70} color="#ca56f2" />
					</div>
				</div>
				<div className="grow-[1] basis-1">
					<h3 className="| subTitle">Knowledges</h3>
					<div className="wrap">
						<Tag>HTML5</Tag>
						<Tag>CSS3</Tag>
						<Tag>Sass (scss)</Tag>
						<Tag>JavaScript (ES6+)</Tag>
						<Tag>TypeScript</Tag>
						<Tag>ReactJs</Tag>
						<Tag>Redux</Tag>
						<Tag>Routing</Tag>
						<Tag>nextJs</Tag>
						<Tag>Framer motion</Tag>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ResumePage;
