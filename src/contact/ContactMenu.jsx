import "../styles/contact.css";

const ContactMenu = () => {
	return (
		<div className="contact-menu">
			<form action="https://formspree.io/f/xgejekdb" method="POST">
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Name"
						className="input-field"
						autoComplete="off"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						className="input-field"
						autoComplete="off"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="message">Message:</label>
					<textarea
						id="message"
						name="message"
						placeholder="Message"
						className="textarea-field"
						autoComplete="off"
					/>
				</div>
				<button className="submit-button">SUBMIT</button>
			</form>
		</div>
	);
};

export default ContactMenu;
