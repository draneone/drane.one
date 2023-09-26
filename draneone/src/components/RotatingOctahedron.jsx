import React, {useState} from "react";
import {useFrame} from "@react-three/fiber";
import {Center} from "@react-three/drei";

function RotatingOctahedron({clicked, click}) {

	const [lastRot, setLastRot] = useState(Math.PI * 0.1);
	const myMesh = React.useRef();

	function clickO() {
		click(!clicked);
		setLastRot(myMesh.current["rotation"].y);
	}

	useFrame(() => {
		myMesh.current["rotation"].y += 0.01;
	});

	return (
		<Center top>
			<mesh
				ref={myMesh}
				castShadow={true}
				rotation-y={lastRot}
				onClick={() => clickO()}
			>
				<octahedronGeometry/>
				<meshStandardMaterial
					color={clicked ? "hotpink" : "skyblue"}
					metalness={1}
					roughness={0.1}
				/>
			</mesh>
		</Center>
	);
}

export default RotatingOctahedron;