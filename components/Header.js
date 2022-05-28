import React, { useState } from 'react';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';
import { IoMenu, IoClose } from 'react-icons/io5';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<header className={styles.header}>
			<div className={styles.logoBox}>
				<Link href='/'>
					<img className={styles.logo} src='/assets/logo.svg'></img>
				</Link>
			</div>

			{/* Desktop Nav */}
			<nav className={styles.navStroke}>
				<ul>
					<li>
						<Link href='#'>Home</Link>
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
			<Search />

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
				className={`${styles.mobileNav} ${
					showMenu ? styles.mobileNavShow : styles.mobileNavHide
				}`}
			>
				{showMenu && (
					<IoClose
						onClick={() => setShowMenu(!showMenu)}
						className={`${styles.icon} ${styles.menuClose}`}
					/>
				)}

				<ul>
					<li>
						<Link href='#'>Home</Link>
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
						<FaFacebook className={styles.icon} />
						<FaTwitter className={styles.icon} />
						<FaInstagram className={styles.icon} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
