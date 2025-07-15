import "./ticker.css";
import { useEffect, useRef } from "react";
import { Starburst } from "./icons";

export default function Ticker() {
	const containerRef = useRef<HTMLDivElement>(null);
	const tickerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!window.matchMedia("(prefer-reduced-motion: reduce)").matches) {
			addAnimation();
			duplicateTickerChildren();
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

			const tickerChildren = Array.from(tickerRef.current.children);
			tickerChildren.forEach((child) => {
				const childClone = child.cloneNode(true);
				tickerRef.current?.appendChild(childClone);
			});
		}
	}, []);

	return (
		<div className="ticker-container" ref={containerRef}>
			<div className="ticker-inner" ref={tickerRef}>
				{/* Had to add 8 children here because anything lesser would create empty spaces */}
				<div className="ticker-item">Renaissance</div>
				<Starburst />
				<div className="ticker-item">Renaissance</div>
				<Starburst />
				<div className="ticker-item">Renaissance</div>
				<Starburst />
				<div className="ticker-item">Renaissance</div>
				<Starburst />
			</div>
		</div>
	);
}
