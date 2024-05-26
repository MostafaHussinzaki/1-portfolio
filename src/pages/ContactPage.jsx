import Title from "../components/ui/Title";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";
import Message from "../components/ui/Message";

const ContactPage = () => {
	const form = useRef();
	const [isSent, setIsSent] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [Error, setError] = useState({ isError: false, message: "" });

	const sendEmail = (e) => {
		e.preventDefault();
		setIsLoading(true);
		emailjs
			.sendForm("service_mktjk7r", "template_t8st79a", form.current, {
				publicKey: "nWi48RCnvb4sPWhRm",
			})
			.then(
				() => {
					setIsLoading(false);
					setIsSent(true);
				},
				(error) => {
					setError({ isError: true, message: error.text });
				}
			);
	};

	return (
		<section className="py-14">
			<div className="| part-wrapper">
				<Title>Contact</Title>
				<div className="bg-white-400 dark:bg-gray-500 py-[60px] px-[30px] xd:px-[45px] rounded-[20px] mb-4">
					<h4 className="font-poppin text-[25px] mb-3 text-gray-300 dark:text-gray-400">
						I'm Always Open To Contact With You
					</h4>
					<p className="font-poppin text-[23px] mb-[45px] font-bold text-black dark:text-white-100">
						design work or partnerships.
					</p>
					<form ref={form} onSubmit={sendEmail}>
						<Input color="red" type="text" title="Name" name="user_name" />
						<Input color="blue" type="email" title="Email" name="email" />
						<Input
							color="violet"
							type="textarea"
							title="Message"
							name="message"
						/>
						<Button type="submit">{isLoading ? "Sending..." : "Submit"}</Button>
					</form>

					{isSent && <Message type>Email sent successfully</Message>}
					{Error.isError && <Message>Failed sending: {Error.message}</Message>}
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
