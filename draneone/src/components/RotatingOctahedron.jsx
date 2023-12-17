import React, {useEffect, useState} from "react";
import {useFrame} from "@react-three/fiber";
import {Center} from "@react-three/drei";
import {state} from './../store.js';

function RotatingOctahedron({clicked, click, color, setCurrentColor}) {

	const [lastRot, setLastRot] = useState(Math.PI * 0.1);
	const myMesh = React.useRef();

	function clickO() {
		click(!clicked);
		state.intro = !state.intro;
		setCurrentColor(state.color);
		setLastRot(myMesh.current["rotation"].y);
	}

	useEffect(()=>{
		setCurrentColor(state.color);
	},[state.color])

	useFrame(() => {
		myMesh.current["rotation"].y += 0.01;
		setCurrentColor(state.color);
	});

	return (
		<Center top>
			<mesh
				ref={myMesh}
				castShadow={true}
				rotation-y={lastRot}
				onClick={() => clickO()}
				onPointerOver={() => document.body.style.cursor = 'pointer'}
				onPointerOut={() => document.body.style.cursor = 'default'}
			>
				<octahedronGeometry/>
				<meshStandardMaterial
					color={color}
					metalness={1}
					roughness={0.1}
				/>
			</mesh>
		</Center>
	);
}

export default RotatingOctahedron;