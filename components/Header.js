import React from 'react';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logoBox}>
				<Link href='/'>
					<img className={styles.logo} src='/assets/logo.svg'></img>
				</Link>
			</div>
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
		</header>
	);
};

export default Header;
