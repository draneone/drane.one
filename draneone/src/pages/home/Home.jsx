import React, {useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {AccumulativeShadows, Environment, Html, RandomizedLight} from "@react-three/drei";
import Typist from "react-typist-component";
import RotatingOctahedron from "../../components/RotatingOctahedron.jsx";
import AlternativeBackground from "../../components/AlternativeBackground.jsx";
import sunset from '../../assets/venice_sunset_1k.hdr';
import {state} from "../../store.js";

function Home() {
	const [clicked, click] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const [currentColor, setCurrentColor] = useState(state.color);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
		setIsMobile(width <= 768);
		state.mobile = width <= 768;
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);

		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		}

	}, []);

	useEffect(() => {
		state.mobile = width <= 768;
		setIsMobile(state.mobile);
	}, [width]);


	return (
		<Canvas
			shadows="basic"
			eventSource={document.getElementById("root")}
			eventPrefix="client"
			camera={{position: [0, 0, isMobile ? 5: 3], fov: 60, near: 0.5, far: 100}}
		>
			<group position={isMobile ? [0, -0.3, 0] : [1, -0.4, 0]} >
				<RotatingOctahedron clicked={clicked} click={click} color={currentColor} setCurrentColor={setCurrentColor}/>

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

				<Environment files={sunset} background blur={0.4}/>
				<AlternativeBackground colorA={state.color} colorB={"skyblue"}/>

				{isMobile &&
					<>
						<Html position={[-1, -1.5, -2]}>
							<Typist startDelay={100}>
								<div className={"flex-list"}>
									<a href={"https://x.com/drane_one"}>twitter</a>
									<a href={"https://github.com/draneone"}>github</a>
									<a href={"https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D1%82%D0%B0%D1%85%D0%BC%D0%B0%D0%B7%D1%8F%D0%BD-087988180/"}>linkedIn</a>
								</div>
							</Typist>
						</Html>

						<Html position={[0.5, -1.5, -2]}>
							<Typist startDelay={600}>
								<div className={"flex-list"}>
									<a href={"https://reddit.com/u/drane_one"}>reddit</a>
									<a href={"https://t.me/drane_one"}>telegram</a>
									<a href={"mailto:dranegq@gmail.com"}>email</a>
								</div>
							</Typist>
						</Html>
					</>
				}
			</group>
		</Canvas>
	);
}

export default Home
