// import { useEffect, useRef } from "react";
import "./ticker.css";

export default function Ticker() {
	// const containerRef = useRef(null)
	// useEffect(() => {
	// 	if(!window.matchMedia("(prefer-reduced-motion: reduce)").matches) {
	// 		addAnimation()
	// 	}

	// 	function addAnimation() {
	// 		containerRef.current.setAttribute("data-animated", true)
	// 	}
	// }, [])

	return (
		<div className="ticker-container">
			<div className="ticker-inner">
				<div className="ticker-item">Renaissance</div>
				<div className="ticker-item">Renaissance</div>
				<div className="ticker-item">Renaissance</div>
				<div className="ticker-item">Renaissance</div>
				<div className="ticker-item">Renaissance</div>
				<div className="ticker-item">Renaissance</div>
				<div className="ticker-item">Renaissance</div>
				<div className="ticker-item">Renaissance</div>
				<div className="ticker-item">Renaissance</div>
			</div>
		</div>
	);
}
