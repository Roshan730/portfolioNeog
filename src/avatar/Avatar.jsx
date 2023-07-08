import avatar from "../assets/avatar-image.png";
import "../styles/avatar.css";

const Avatar = ({ page }) => {
	const avatarClass = `avatar ${page}`;
	const spanClass = `shadow-overlay-${page}`;
	return (
		<div>
			<span className={spanClass}></span>
			<img src={avatar} className={avatarClass} alt="avatar" />
		</div>
	);
};

export default Avatar;
