import "./App.css";
import {
	CircleSegment,
	CogShape,
	Hand1,
	Hand2,
	QuadrantCircle,
	StarFlower,
} from "./components/icons";

function App() {
	return (
		<div className="main">
			<div className="wrapper">
				<div className="body">
					<h1 className="heading-font">Renaissance!</h1>
					<p className="body-font">
						The re-emergence of something after a long time of obscurity
					</p>
				</div>
				<div className="illustrations">
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
				</div>
			</div>
		</div>
	);
}

export default App;
