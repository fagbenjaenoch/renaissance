import "./App.css";
import GradFlow from "./components/GradFlow";
// import {
// 	CircleSegment,
// 	CogShape,
// 	Hand1,
// 	Hand2,
// 	QuadrantCircle,
// 	StarFlower,
// } from "./components/icons";
import Ticker from "./components/ticker";

function App() {
	return (
		<div className="main">
			<section className="hero">
				<GradFlow
					className="-z-10 absolute"
					config={{
						color1: { r: 40, g: 25, b: 118 },
						color2: { r: 241, g: 96, b: 59 },
						color3: { r: 255, g: 255, b: 255 },
						speed: 0.4,
						scale: 1.2,
						type: "animated",
						noise: 0.1,
					}}
				/>
				<div className="wrapper">
					<div className="body">
						<h1 className="heading-font">Renaissance!</h1>
						<p className="body-font">
							The re-emergence of something after a long time of obscurity
						</p>
					</div>
					{/* <div className="illustrations">
						<div className="hand1">
							<Hand1 width={"400px"} height={"400px"} />
						</div>
						<div className="hand2">
							<Hand2 width={"400px"} height={"400px"} />
						</div>
						<CogShape />
						<StarFlower />
						<CircleSegment />
						<QuadrantCircle />
					</div> */}
				</div>
			</section>
			<section className="ticker">
				<Ticker />
			</section>
			<section className="about">
				<div className="wrapper">
					<h2>Why does this page exist?</h2>
					<p>
						Nothing really serious. It's been almost 7 months I've written code
						and this was because I didn't have a personal computer after my
						previous semi-laptop(not kidding) was damaged.
					</p>
					<p>
						It was really tough for me. I lost my Job and lost a bit of
						confidence but I held on to hope--the hope that one day I will get a
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
						website to share my story. A website that would convey it
						accurately.
					</p>
					<p>
						And that was how I came up with the theme "Renaissance" just like
						how it was a revival of intellectualism after antiquity.
					</p>
				</div>
			</section>
			<section className="what-next">
				<div className="wrapper">
					<h2>What next?</h2>
					<p>
						Truth is--despite not having a personal computer, I didn't let my
						skills fade away. I kept on learning actively, finding clarity and
						consolidating past knowledge through little bits of practices when I
						get the opportunity.
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
			<section className="conclusion">
				<div className="wrapper">
					<div className="conclusion-inner">
						<p>
							Written by <a href=".">Enoch Fagbenja</a>
						</p>

						<a href="mailto:fagbenjaenoch73@gmail.com">Send me a mail</a>
						<a href="https://github.com/fagbenjaenoch">Check out my github</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
