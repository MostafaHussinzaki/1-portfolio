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
							date="2021-2023"
							header="Ph.D In Horriblensess - University,"
							text="Los Angeles, CA"
							color="red"
						/>
						<ResumeInfo.Card
							date="2021-2023"
							header="Ph.D In Horriblensess - University,"
							text="Los Angeles, CA"
							color="blue"
						/>
						<ResumeInfo.Card
							date="2021-2023"
							header="Ph.D In Horriblensess - University,"
							text="Los Angeles, CA"
							color="red"
						/>
					</ResumeInfo>
					<ResumeInfo>
						<ResumeInfo.Title>
							<img src={expImage} alt="education-Image" />
							Experience
						</ResumeInfo.Title>
						<ResumeInfo.Card
							date="2021-2023"
							header="Ph.D In Horriblensess - University,"
							text="Los Angeles, CA"
							color="blue"
						/>
						<ResumeInfo.Card
							date="2021-2023"
							header="Ph.D In Horriblensess - University,"
							text="Los Angeles, CA"
							color="red"
						/>
						<ResumeInfo.Card
							date="2021-2023"
							header="Ph.D In Horriblensess - University,"
							text="Los Angeles, CA"
							color="blue"
						/>
					</ResumeInfo>
				</div>
			</div>
			<div className="pt-[70px] pb-[60px] bg-white-400 dark:bg-gray-500 | part-wrapper flex flex-col md:flex-row gap-5">
				<div className="grow-[1.3] shrink-0 basis-2">
					<h3 className="| subTitle">
						Working Skills
					</h3>
					<div>
						<ProgressBar title="javascript" percent={85} color="#ff6464" />
						<ProgressBar title="React" percent={55} color="#9272d4" />
						<ProgressBar title="tailwind" percent={90} color="#5185d4" />
						<ProgressBar title="Responsive" percent={70} color="#ca56f2" />
					</div>
				</div>
				<div className="grow-[1] basis-1">
					<h3 className="| subTitle">
						Knowledges
					</h3>
					<div className="wrap">
						<Tag>sass</Tag>
						<Tag>React</Tag>
						<Tag>nextJs</Tag>
						<Tag>Tailwind</Tag>
						<Tag>javascript</Tag>
						<Tag>css</Tag>
						<Tag>sass</Tag>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ResumePage;
