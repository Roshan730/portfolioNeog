import "../styles/aboutMenu.css";

const AboutSubheading = ({ title, content, active, onClick, menuItem }) => {
	const subContainerClass = `sub-container-${menuItem}`;

	return (
		<div
			className={
				active ? `${subContainerClass} active-subheading` : subContainerClass
			}
		>
			<h3 onClick={onClick}>{title}</h3>
			<div className="p-container">{content}</div>
		</div>
	);
};

export default AboutSubheading;
