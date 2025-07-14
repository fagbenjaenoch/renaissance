import { useEffect, useRef } from "react";
import "./ticker.css";

export default function Ticker() {
	const containerRef = useRef<HTMLDivElement>(null);
	const tickerRef = useRef<HTMLDivElement>(null);
	
	useEffect(() => {
		if (!window.matchMedia("(prefer-reduced-motion: reduce)").matches) {
			addAnimation();
			duplicateTickerChildren()
		}

		function addAnimation() {
			if (!containerRef.current) {
				return;
			}
			containerRef.current.setAttribute("data-animated", "true");
		}

		function duplicateTickerChildren() {
			if (!tickerRef.current) {
				return;
			}

			const tickerChildren = Array.from(tickerRef.current.children) 
			tickerChildren.forEach(child => {
				const childClone = child.cloneNode(true)
				tickerRef.current?.appendChild(childClone)
			})
		}
	}, []);

	return (
		<div className="ticker-container" ref={containerRef}>
			<div className="ticker-inner" ref={tickerRef}>
				{/* Had to add 4 children here because anything lesser would create empty spaces */}
				<div className="ticker-item">Renaissance</div>
				<div className="ticker-item">Renaissance</div>
				<div className="ticker-item">Renaissance</div>
				<div className="ticker-item">Renaissance</div>
			</div>
		</div>
	);
}
