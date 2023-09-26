import React, {useState} from "react";
import {Canvas} from "@react-three/fiber";
import {AccumulativeShadows, Environment, Html, RandomizedLight,} from "@react-three/drei";
import Typist from "react-typist-component";
import RotatingOctahedron from "./components/RotatingOctahedron.jsx";
import AlternativeBackground from "./components/AlternativeBackground.jsx";

function App() {
	const [clicked, click] = useState(false);

	return (
		<Canvas
			shadows="basic"
			eventSource={document.getElementById("root")}
			eventPrefix="client"
			camera={{position: [0, 0, 5], fov: 50}}
		>
			<group position={[0, -0.3, 0]}>
				<RotatingOctahedron clicked={clicked} click={click}/>

				<AccumulativeShadows
					position={[0, -0.2, 0]}
					temporal
					frames={100}
					alphaTest={0.8}
					scale={12}
				>
					<RandomizedLight
						amount={8}
						radius={4}
						ambient={0.5}
						intensity={1}
						position={[2.5, 5, -10]}
					/>

				</AccumulativeShadows>

				<Environment preset={"sunset"} background blur={0.4}/>

				{clicked ? (
					<>
						<Html position={[-1.15, -0.5, -2]}>
							<Typist startDelay={122}>
								<div className="hello">
									Hi, I&apos;m Drane,
									a senior web developer, game dev enthusiast,
									dreamer and tinkerer.<br/> <br/>
									I do code as an art and art as a code.<br/>
									Contact me in any meaningful way and
									let&apos;s make cool, but serious stuff and inspire each other.
								</div>
							</Typist>
						</Html>
						<AlternativeBackground/>
					</>
				) : null}

				<Html position={[-1, -2, -2]}>
					<Typist startDelay={100}>
						<div className={"flex-list"}>
							<a href={"https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D1%82%D0%B0%D1%85%D0%BC%D0%B0%D0%B7%D1%8F%D0%BD-087988180/"}>LinkedIn</a>
							<a href={"https://github.com/draneone"}>GitHub</a>
							<a href={"https://drane.itch.io"}>itch.io</a>
						</div>
					</Typist>
				</Html>

				<Html position={[0.5, -2, -2]}>
					<Typist startDelay={600}>
						<div className={"flex-list"}>
							<a href={"https://steamcommunity.com/id/ghfhbvnvm"}>Steam</a>
							<a href={"https://t.me/drane_one"}>Telegram</a>
							<a href={"https://reddit.com/u/drane_one"}>Reddit</a>
						</div>
					</Typist>
				</Html>
			</group>
		</Canvas>
	);
}

export default App
