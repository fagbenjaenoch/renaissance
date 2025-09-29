import "./index.css";
import GradFlow from "./components/GradFlow";
// import {
// 	CircleSegment,
// 	CogShape,
// 	Hand1,
// 	Hand2,
// 	QuadrantCircle,
// 	StarFlower,
// } from "./components/icons";
import Ticker from "./components/Ticker";

function App() {
	return (
		<div className="space-y-16">
			<section id="hero" className="h-dvh flex items-center overflow-hidden">
				<GradFlow
					className="-z-10 absolute"
					config={{
						color1: { r: 163, g: 106, b: 242 },
						color2: { r: 0, g: 0, b: 0 },
						color3: { r: 234, g: 130, b: 106 },
						speed: 0.6,
						scale: 1.2,
						type: "silk",
						noise: 0.18,
					}}
				/>
				<div className="relative px-4 max-w-[700px] mx-auto">
					<div className="leading-[0.9] flex flex-col items-center justify-center relative z-[2] text-[var(--clr-primary)]">
						<h1>Renaissance!</h1>
						<p className="text-sm md:text-[1.2rem]">
							The re-emergence of a thing after a long time of obscurity
						</p>
					</div>
					{/* <div className="text-[var(--illustration-color)] ">
						<div className="w-[20rem] h-[20rem] -rotate-[13deg] absolute top-[-93px] left-[-160px] animate-[touch_5s_infinite_alternate_linear] absolute top-0 z-[3]">
							<Hand1 width={"400px"} height={"400px"} />
						</div>
						<div className="w-[20rem] h-[20rem] -rotate-[12deg] absolute top-[-140px] right-[-164px] absolute top-0 z-[3]">
							<Hand2 width={"400px"} height={"400px"} />
						</div>
						<CogShape />
						<StarFlower />
						<CircleSegment />
						<QuadrantCircle />
					</div> */}
				</div>
			</section>
			<section id="ticker">
				<Ticker />
			</section>
			<section id="content">
				<div className="relative px-4 max-w-[700px] mx-auto">
					<h2>Why does this page exist?</h2>
					<p>
						Nothing really serious. It's been almost 7 months I've last written
						code and this was because I didn't have a personal computer after my
						previous semi-laptop(not kidding) was damaged.
					</p>
					<p>
						It was really tough for me. I lost my Job and lost a bit of
						confidence but I held on to hope—the hope that one day I will get a
						new laptop. I had to be delusional a bit, always searching for a new
						laptop to buy but I didn't have the money.
					</p>
					<p>
						Not until I broke out of my silence and reached out to a good uncle
						of mine who decided to sponsor me and provide me with a new laptop.
					</p>
					<p>
						I've gotten what I wanted for months, what can I build? Why not
						build a simple website to check if I still got it in me? A simple
						website to share my story. A website that would convey it in a
						subtle way.
					</p>
					<p>
						And that was how I came up with the theme "Renaissance" just like
						how it was a revival of intellectualism after antiquity.
					</p>
				</div>
			</section>
			<section>
				<div className="relative px-4 max-w-[700px] mx-auto">
					<h2>What next?</h2>
					<p>
						Truth is—despite not having a personal computer, I didn't let my
						skills fade away. I kept on learning actively, finding clarity and
						consolidating past knowledge through little bits of practices when I
						get the opportunity to use a computer.
					</p>
					<p>
						Since we entered the AI vogue, access to information has
						proliferated more and massive shifts have been occurring in the tech
						industry. Massive layoffs have been occurring and getting a job
						would require above average effort than what was required pre-date.
					</p>
					<p>
						I won't let that discourage me. I would keep building and honing my
						skills.
					</p>
					<p>Thank you for reading this far.</p>
				</div>
			</section>
			<section id="conclusion">
				<div className="relative px-4 max-w-[700px] mx-auto">
					<div className="py-8 flex flex-wrap items-center justify-between border-t border-current text-sm md:text-base">
						Built with react
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
