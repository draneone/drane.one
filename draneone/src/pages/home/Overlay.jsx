import {AnimatePresence, motion} from 'framer-motion'
import {useSnapshot} from 'valtio'
import {state} from '../../store.js'
import Typist from "react-typist-component";

export default function MainOverlay() {
	const snap = useSnapshot(state);

	const randomPhrases = [
		<a key={1} href="https://www.youtube.com/watch?v=Vfs8Fag006Y">Warping Spells</a>,
		<a key={2} href="https://www.youtube.com/watch?v=2MHhLDCJ57E">No Love, Deep Web</a>,
		<a key={3} href="https://www.youtube.com/watch?v=KNN93zAmBU4">Black Panther Is Online</a>,
		<a key={4} href="https://www.youtube.com/watch?v=3GM3cpbWnXc">Blossom</a>,
		<a key={5} href="https://youtu.be/elo3GwQbB8U">Go Go Killer</a>,
		<a key={6} href="https://www.youtube.com/watch?v=ZhIQdJDXBzc">Who&apos;s Mad @ Who?</a>,
		<a key={7} href="https://youtu.be/T-dKsuKQKb8">Пусси-джусси на тусе</a>,
		<a key={8} href="https://www.youtube.com/watch?v=geOg6S5SXrs">все умрут в бензине, а я останусь есть облака</a>,
		<a key={9} href="https://youtu.be/65mNS3PYXlA">Дзен и искусство ухода за АК 47</a>,
		<a key={10} href="https://plato.stanford.edu/archives/sum2020/entries/libertarianism/">Libertarianism without Inequality</a>,
	]

	const transition = {type: 'spring', duration: 0.8}
	const config = {
		initial: {x: -100, opacity: 0, transition: {...transition, delay: 0.5}},
		animate: {x: 0, opacity: 1, transition: {...transition, delay: 0}},
		exit: {x: -100, opacity: 0, transition: {...transition, delay: 0}}
	}

	return (
		<div style={{position: 'absolute', top: -120, left: -20, width: '100%', height: '100%'}}>
			<AnimatePresence>
				{snap.intro ? (
					<motion.section key="main" {...config}>
						<div className="section--container">
							<motion.div
								key="title"
								initial={{x: -180, opacity: 0}}
								animate={{x: -220, opacity: 1}}
								transition={{type: 'spring', damping: 5, stiffness: 40, restDelta: 0.001, duration: 1}}>
								<h1>DRANE ONE</h1>
							</motion.div>
							<div className="support--content">
								<motion.div
									key="p"
									initial={{y: 100, x: 100, opacity: 0}}
									animate={{y: 50, x: -500, opacity: 1}}
									transition={{
										type: 'spring',
										damping: 7,
										stiffness: 30,
										restDelta: 0.001,
										duration: 0.6,
										delay: 0.2,
										delayChildren: 0.2
									}}>
									<motion.header initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}}
										transition={transition}>
										<motion.div animate={{x: snap.intro ? 0 : 100, opacity: snap.intro ? 1 : 0}}
											transition={transition}>
											<Typist startDelay={600}>
												<div className={"flex-link"}>
													{
														randomPhrases[Math.floor(Math.random() * randomPhrases.length)]
													}
												</div>
											</Typist>
										</motion.div>
									</motion.header>

								</motion.div>
							</div>
						</div>
					</motion.section>
				) : (
					<motion.section key="custom" {...config}>
						<Customizer/>
						<motion.div>
							<motion.header
								initial={{x: -320, y: 100, opacity: 0}}
								animate={{x: -750, y: -600, opacity: 1}}
								transition={transition}>
								<motion.div animate={{x: !snap.intro ? 0 : 100, opacity: !snap.intro ? 1 : 0}}
									transition={transition}>
									<Typist startDelay={600}>
										<div className={"hello"}>
												Hi, I&apos;m Drane,<br/>
												a senior web developer, game dev enthusiast,
												dreamer and tinkerer.<br/>
												Contact me in any meaningful way and<br/>
												let&apos;s make cool stuff and inspire each other.<br/>
										</div>
									</Typist>
								</motion.div>
							</motion.header>
						</motion.div>
					</motion.section>
				)}
			</AnimatePresence>
		</div>
	)
}

function Customizer() {
	const snap = useSnapshot(state)
	return (
		<div className="customizer">
			<div className="color-options">
				{snap.colors?.map((color) => (
					<div key={color} className={`circle`} style={{background: color}}
						onClick={() => (state.color = color)}></div>
				))}
			</div>
			<div className={"flex-link"}>
				<a href={"https://x.com/drane_one"}>twitter</a>
				<a href={"https://reddit.com/u/drane_one"}>reddit</a>
				<a href={"https://github.com/draneone"}>github</a>


				<a href={"https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D1%82%D0%B0%D1%85%D0%BC%D0%B0%D0%B7%D1%8F%D0%BD-087988180/"}>linkedIn</a>
				<a href={"https://t.me/drane_one"}>telegram</a>
				<a href={"mailto:dranegq@gmail.com"}>email</a>
			</div>
		</div>
	)
}
