import "../styles/skillsMenu.css";
import skills from "./skillsData";
import frontendIcon from "../assets/eagle-emblem.png";

const SkillsMenu = () => {
	return (
		<div className="skill-menu">
			<h2 className="skill-title">FRONT - END</h2>
			<img className="skill-icon" src={frontendIcon} alt="current skill" />
			<div className="skill-sub-container">
				{skills[1].map((skill, index) => (
					<div key={index} className="skill-sub-container">
						<h3>{skill.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillsMenu;
