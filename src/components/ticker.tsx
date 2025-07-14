import { useEffect, useRef } from "react";
import "./ticker.css";

export default function Ticker() {
	const containerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!window.matchMedia("(prefer-reduced-motion: reduce)").matches) {
			addAnimation();
		}

		function addAnimation() {
			if (!containerRef.current) {
				return;
			}
			containerRef.current.setAttribute("data-animation", "true");
		}
	}, []);

	return (
		<div className="ticker-container" ref={containerRef}>
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
