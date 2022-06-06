import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import styles from '@/styles/ScrollTop.module.css';

const ScrollTop = () => {
	const [showGoTop, setShowGoTop] = useState(false);
	const [btnStyle, setBtnStyle] = useState(styles.scrollTopHidden);

	// Scroll to top
	const scrollToTop = () => {
		if (typeof window !== 'undefined') {
			window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		}
	};

	// Show Button when reached a certain amount of pixels
	const handleVisible = () => {
		if (typeof window !== 'undefined') {
			// returns a boolean
			setShowGoTop(window.scrollY > 500);
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleVisible);
		}

		if (window.scrollY > 500) {
			setShowGoTop(true);
		}

		if (showGoTop) {
			setBtnStyle(styles.scrollTop);
		} else {
			setBtnStyle(styles.scrollTopHidden);
		}
	}, [showGoTop]);

	return (
		<>
			<button className={btnStyle} onClick={() => scrollToTop()}>
				<FaChevronUp className={styles.icon} />
			</button>
		</>
	);
};

export default ScrollTop;
