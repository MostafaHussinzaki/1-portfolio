import {
	LinkedInIcon,
	FacebookIcon,
	TwitterIcon,
	InstagramIcon,
	DownloadSvg,
} from "../assets/svg";

// test image
import personImg from "../assets/parson-img-1.webp";

import Button from "./ui/Button";
import InfoDiv from "./ui/InfoDiv";

const PersonalInfo = () => {
	return (
		<div className="w-full md:w-[30%] bg-white-100 dark:bg-black py-10 px-7 md:py-6 md:px-4 rounded-xl text-center relative md:sticky lg:top-[200px] md:top-[30px] h-fit">
			<img
				src={personImg}
				alt="Personal Image"
				className="rounded-lg mx-auto min-w-[130px] mb-4 lg:mt-[-180px]"
			/>
			<h2 className="dark:text-white-100 text-2xl md:text-lg font-roboto mb-2 font-medium">
				Mostafa Hussin
			</h2>
			<span className="font-poppin text-sm py-[4px] px-[15px] bg-white-300 dark:bg-gray-600 dark:text-gray-400 font-medium rounded-md text-nowrap mb-5 inline-block">
				Front-end Developer
			</span>
			<div className="flex gap-2 flex-nowrap mx-auto justify-center mb-5">
				<a
					href="#"
					className="icon group hover:bg-cyan transition-all duration-300"
				>
					<FacebookIcon classes="fill-[#4267b2] group-hover:fill-white-100 transition-all duration-300" />
				</a>
				<a
					href="#"
					className="icon group hover:bg-cyan transition-all duration-300"
				>
					<TwitterIcon classes="fill-[#1da1f2] group-hover:fill-white-100 transition-all duration-300" />
				</a>
				<a
					href="#"
					className="icon group hover:bg-cyan transition-all duration-300"
				>
					<InstagramIcon classes="fill-[#e4405f] group-hover:fill-white-100 transition-all duration-300" />
				</a>
				<a
					href="#"
					className="icon group hover:bg-cyan transition-all duration-300"
				>
					<LinkedInIcon classes="fill-[#0077b5] group-hover:fill-white-100 transition-all duration-300" />
				</a>
			</div>
			<div className="bg-white-300 dark:bg-gray-600 px-7 py-5 rounded-2xl mb-5">
				<InfoDiv type="phone" title="phone" content="20+1025653880" />
				<InfoDiv
					type="email"
					title="Email"
					content="Example@Mail.Com"
					classes="border-t-2 dark:border-[#333] break-all"
				/>
				<InfoDiv
					type="location"
					title="Location"
					content="Cairo Egypt"
					classes="border-t-2 dark:border-[#333]"
				/>
				<InfoDiv
					type="calendar"
					title="Birthday"
					content="May 4, 2006"
					classes="border-t-2 dark:border-[#333]"
				/>
			</div>
			<div className="flex justify-center w-fit m-auto">
				<Button>
					<DownloadSvg />
					Download Cv
				</Button>
			</div>
		</div>
	);
};

export default PersonalInfo;
