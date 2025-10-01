import { useEffect, useRef } from "react";
import { Starburst } from "./Icons.tsx";

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
		<div
			className="max-w-[800px] border-y border-black text-[2rem] mx-auto data-[animated=true]:overflow-hidden data-[animated=true]:[mask-image:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)] data-[animated=true]:[-webkit-mask-image:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)]"
			ref={containerRef}
			data-animated={true}
		>
			<div
				className="flex items-center gap-[20px] py-4 flex-wrap animate-scroll data-[animated=true]:flex-nowrap data-[animated=true]:w-max data-[animated=true]:hover:[animation-play-state:paused]"
				ref={tickerRef}
				data-animated={true}
			>
				{/* Had to add 8 children here because anything lesser would create empty spaces */}
				<div>Renaissance</div>
				<Starburst />
				<div>Renaissance</div>
				<Starburst />
				<div>Renaissance</div>
				<Starburst />
				<div>Renaissance</div>
				<Starburst />
			</div>
		</div>
	);
}
