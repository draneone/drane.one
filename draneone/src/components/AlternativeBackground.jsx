import {Depth, LayerMaterial, Noise} from "lamina";

function AlternativeBackground() {
	return (
		<mesh scale={100}>
			<boxGeometry args={[1, 1, 1]}/>
			<LayerMaterial side={THREE.BackSide}>
				<Depth
					colorB="red"
					colorA="skyblue"
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