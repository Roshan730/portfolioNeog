import "../styles/background.css";
// import video from "../assets/video.mp4";
import fallbackImage from "../assets/fallback-image.jpg";

const Background = () => {
	return (
		<div>
			<div className="shadow-overlay"></div>
			<video
				playsInline
				autoPlay
				muted
				loop
				preload="auto"
				id="bg"
				poster={fallbackImage}
			></video>
		</div>
	);
};

export default Background;
