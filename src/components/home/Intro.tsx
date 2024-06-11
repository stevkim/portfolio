import Code from './Code';
import { motion } from 'framer-motion';
import Socials from '../Socials';
import { useEffect, useState } from 'react';

const Intro = () => {
	const [code, setCode] = useState(false);

	useEffect(() => {
		const setter = setTimeout(() => {
			setCode(true);
		}, 1500);

		return () => clearTimeout(setter);
	}, []);

	return (
		<motion.div
			className="flex flex-col px-10 transition-all h-[80vh] w-full lg:w-[40%]"
			transition={{ type: 'spring' }}
			initial={{ opacity: 0, x: -200 }}
			animate={{ opacity: 1, x: 0 }}
		>
			<div className="m-auto w-fit">
				<div className="text-[1.5rem]">
					Hi, my name is
					<span className="text-[4rem] font-bold block highlight whitespace-nowrap">
						Steven Kim
					</span>
				</div>
				{code ? <Code /> : null}
				<div className="mt-2">
					<Socials />
				</div>
			</div>
		</motion.div>
	);
};

export default Intro;
