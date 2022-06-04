import React, { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';
import { IoMenu, IoClose } from 'react-icons/io5';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [stickyNav, setStickyNav] = useState(false);
	const [headerWithBg, setHeaderWithBg] = useState(false);

	const router = useRouter();

	useEffect(() => {
		// Header Bg when not on HomePage
		if (router.pathname !== '/') {
			setHeaderWithBg(true);
		}

		// Sticky header persists after page refresh
		if (document.documentElement.scrollTop > 50) {
			setStickyNav(true);
		}

		// Sticky header on scroll
		window.addEventListener('scroll', () => {
			setStickyNav(document.documentElement.scrollTop > 50);
		});
	}, []);

	// Mobile menu handler
	const mobileMenuHandler = () => {
		setShowMenu(!showMenu);
	};

	return (
		<header
			id='header'
			className={`${styles.header} ${
				stickyNav
					? styles.stickyHeader
					: headerWithBg
					? styles.headerWithBg
					: undefined
			}`}
		>
			<div
				className={`${styles.logoBox} ${
					stickyNav ? styles.logoBoxSticky : undefined
				}`}
			>
				<Link href='/'>
					<img
						className={`${styles.logo} ${
							stickyNav ? styles.logoSticky : undefined
						}`}
						src='/assets/logo.svg'
					></img>
				</Link>
			</div>

			{/* Desktop Nav */}
			<nav className={styles.nav}>
				<ul className={stickyNav ? styles.stickyNavItems : undefined}>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='#'>Blog</Link>
					</li>
					<li>
						<Link href='#'>About</Link>
					</li>
					<li>
						<Link href='#'>Contact</Link>
					</li>
				</ul>
			</nav>

			<Search sticky={stickyNav} headerBg={headerWithBg} />

			{/* Mobile Menu Icon */}
			<div className={styles.menuIconMobile}>
				<IoMenu onClick={mobileMenuHandler} className={`${styles.icon}`} />
			</div>

			{/* Mobile Nav */}
			<nav
				className={`${styles.mobileNav} ${showMenu && styles.mobileNavShow}`}
			>
				{showMenu && (
					<IoClose
						onClick={mobileMenuHandler}
						className={`${styles.icon} ${styles.menuClose}`}
					/>
				)}

				<ul>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='#'>Blog</Link>
					</li>
					<li>
						<Link href='#'>About</Link>
					</li>
					<li>
						<Link href='#'>Contact</Link>
					</li>
				</ul>

				{/* Social Icons */}
				<div className={styles.bottomMobileNav}>
					{/* Search Component */}
					<div className={styles.socialIcons}>
						<FaFacebook className={styles.socialIcon} />
						<FaTwitter className={styles.socialIcon} />
						<FaInstagram className={styles.socialIcon} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
