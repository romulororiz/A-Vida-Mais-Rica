import React, { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';
import { IoMenu, IoClose } from 'react-icons/io5';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [stickyNav, setStickyNav] = useState(false);

	// Header background on scroll
	useEffect(() => {
		if (document.documentElement.scrollTop > 100) {
			setStickyNav(true);
		}

		window.addEventListener('scroll', () => {
			setStickyNav(document.documentElement.scrollTop > 100);
		});
	}, []);

	return (
		<header
			id='sticky-header'
			className={`${styles.header} ${
				stickyNav ? styles.stickyHeader : undefined
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
			<nav className={styles.navStroke}>
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
			<Search sticky={stickyNav} />

			{/* Mobile Menu Icon */}
			<div className={styles.menuIconMobile}>
				{!showMenu && (
					<IoMenu
						onClick={() => setShowMenu(!showMenu)}
						className={`${styles.icon}`}
					/>
				)}
			</div>

			{/* Mobile Nav */}
			<nav
				className={`${styles.mobileNav} ${showMenu && styles.mobileNavShow}`}
			>
				{showMenu && (
					<IoClose
						onClick={() => setShowMenu(!showMenu)}
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
					{/* Search */}
					{showMenu && <Search />}
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
