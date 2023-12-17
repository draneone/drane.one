import {Depth, LayerMaterial, Noise} from "lamina";
import * as THREE from 'three';
import {useFrame} from "@react-three/fiber";
import {useState} from "react";
import {state} from "../store.js";

function AlternativeBackground() {
	const [colorB, setColorB] = useState(state.color);

	useFrame(()=>{
		setColorB(state.color);
	});

	return (
		<mesh scale={100}>
			<boxGeometry args={[1, 1, 1]}/>
			<LayerMaterial side={THREE.BackSide}>
				<Depth
					colorB={colorB}
					colorA={"skyblue"}
					alpha={1}
					mode="normal"
					near={130}
					far={200}
					origin={[100, 100, -100]}
				/>
				<Noise
					mapping="local"
					type="white"
					scale={1000}
					colorA="white"
					colorB="black"
					mode="subtract"
					alpha={0.2}
				/>
			</LayerMaterial>
		</mesh>
	);
}

export default AlternativeBackground;