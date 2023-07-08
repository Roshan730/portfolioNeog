import "../styles/aboutMenu.css";

const AboutMenuItem = ({ title, active, onClick }) => {
	return (
		<div className={`item ${active ? "active" : ""}`} onClick={onClick}>
			<h2 className="title">{title}</h2>
		</div>
	);
};

export default AboutMenuItem;
