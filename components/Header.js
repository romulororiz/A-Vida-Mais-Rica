import React from 'react';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href='/'>
					<Image width={280} height={60} src='/assets/logo.svg'></Image>
				</Link>
			</div>
			<nav>
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
