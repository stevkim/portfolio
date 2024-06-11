import { useScroll, useTransform, motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface Props {
	title: ReactNode;
	children: ReactNode;
}

const HorizontalCarousel = ({ title, children }: Props) => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ['1%', '-80%']);

	return (
		<div
			ref={targetRef}
			className="relative h-[300vh] w-full"
		>
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				{title}
				<motion.div
					style={{ x }}
					className="flex gap-8"
				>
					{children}
				</motion.div>
			</div>
		</div>
	);
};

export default HorizontalCarousel;
