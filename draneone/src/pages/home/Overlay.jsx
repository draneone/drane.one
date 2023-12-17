import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import {state} from '../../store.js'
import Typist from "react-typist-component";

export default function MainOverlay() {
	const snap = useSnapshot(state);


	const transition = { type: 'spring', duration: 0.8 }
	const config = {
		initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
		animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
		exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
	}

	return (
		<div style={{ position: 'absolute', top: -120, left: -20, width: '100%', height: '100%' }}>
			<AnimatePresence>
				{snap.intro  ? (
					<motion.section key="main" {...config}>
						<div className="section--container">
							<motion.div
								key="title"
								initial={{ x: -180, opacity: 0 }}
								animate={{ x: -220, opacity: 1 }}
								transition={{ type: 'spring', damping: 5, stiffness: 40, restDelta: 0.001, duration: 1 }}>
								<h1>DRANE ONE</h1>
							</motion.div>
							<div className="support--content">
								<motion.div
									key="p"
									initial={{ y: 100, x: 100, opacity: 0 }}
									animate={{ y: 50, x: -500, opacity: 1 }}
									transition={{
										type: 'spring',
										damping: 7,
										stiffness: 30,
										restDelta: 0.001,
										duration: 0.6,
										delay: 0.2,
										delayChildren: 0.2
									}}>
									<motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
										<motion.div animate={{ x: snap.intro ? 0 : 100, opacity: snap.intro ? 1 : 0 }} transition={transition}>
											<Typist startDelay={600}>
												<div className={"flex-link"}>
													<a href={"https://steamcommunity.com/id/ghfhbvnvm"}>Steam</a>
													<a href={"https://t.me/drane_one"}>Telegram</a>
													<a href={"https://reddit.com/u/drane_one"}>Reddit</a>
													<a href={"https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D1%82%D0%B0%D1%85%D0%BC%D0%B0%D0%B7%D1%8F%D0%BD-087988180/"}>LinkedIn</a>
													<a href={"https://github.com/draneone"}>GitHub</a>
													<a href={"https://drane.itch.io"}>itch.io</a>
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
						<Customizer />
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
					<div key={color} className={`circle`} style={{ background: color }} onClick={() => (state.color = color)}></div>
				))}
			</div>
		</div>
	)
}
