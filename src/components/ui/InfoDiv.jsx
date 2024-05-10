import { PhoneSvg, CalendarSvg, EmailSvg, LocationSvg } from "../../assets/svg";

const InfoDiv = ({ type, title, content, classes = null }) => {
	let svg;
	if (type === "phone") {
		svg = (
			<PhoneSvg classes="fill-[#E93B81] group-hover:fill-white-100 transition-all duration-300" />
		);
	} else if (type === "calendar") {
		svg = (
			<CalendarSvg classes="stroke-[#C17CEB] group-hover:stroke-white-100 transition-all duration-300" />
		);
	} else if (type === "email") {
		svg = (
			<EmailSvg classes="stroke-[#6AB5B9] group-hover:stroke-white-100 transition-all duration-300" />
		);
	} else if (type === "location") {
		svg = (
			<LocationSvg classes="fill-[#FD7590] group-hover:fill-white-100 transition-all duration-300" />
		);
	}
	return (
		<div className={`infoDiv ${classes}`}>
			<span className="group w-[44px] h-[44px]">{svg}</span>
			<div>
				<h5>{title}</h5>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default InfoDiv;
