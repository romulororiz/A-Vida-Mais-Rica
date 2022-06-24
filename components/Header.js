/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import Search from './Search';
import { IoMenu, IoClose } from 'react-icons/io5';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [stickyNav, setStickyNav] = useState(false);
	const [headerWithBg, setHeaderWithBg] = useState(false);

	const router = useRouter();

	useEffect(() => {
		// Sticky header on scroll
		window.addEventListener('scroll', () => {
			setStickyNav(document.documentElement.scrollTop > 50);
		});

		// Sticky header persists after page refresh
		if (document.documentElement.scrollTop > 50) {
			setStickyNav(true);
		}

		// Header Bg when not on HomePage
		if (router.pathname !== '/') {
			setHeaderWithBg(true);
		}
	}, [router.pathname]);

	// Mobile menu handler
	const mobileMenuHandler = () => {
		setShowMenu(!showMenu);
	};

	return (
		<header
			className={`${styles.header}
			 ${
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
						alt='logo'
					></img>
				</Link>
			</div>

			{/* Desktop Nav */}
			<nav className={styles.nav}>
				<ul>
					<li>
						<Link href='/'>Início</Link>
					</li>
					<li className={styles.dropdownNavItem}>
						<a>Categorias</a>
						<ul className={styles.dropdownContent}>
							<li className={styles.dropdownItem}>
								<Link href='/blog/categoria/investimentos'>Investimentos</Link>
							</li>
							<li className={styles.dropdownItem}>
								<Link href='/blog/categoria/financas-pessoais'>
									Finanças Pessoais
								</Link>
							</li>
							<li className={styles.dropdownItem}>
								<Link href='/blog/categoria/empreender'>Empreender</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link href='/sobre'>Sobre</Link>
					</li>
					<li>
						<Link href='/contato'>Contato</Link>
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
						<Link href='/'>
							<a onClick={() => setShowMenu(false)}>Início</a>
						</Link>
					</li>
					<li>
						<Link href={'/blog/categoria/investimentos'}>
							<a onClick={() => setShowMenu(false)}>Investimentos</a>
						</Link>
					</li>
					<li>
						<Link href={'/blog/categoria/financas-pessoais'}>
							<a onClick={() => setShowMenu(false)}>Finanças Pessoais</a>
						</Link>
					</li>
					<li>
						<Link href={'/blog/categoria/empreender'}>
							<a onClick={() => setShowMenu(false)}>Empreender</a>
						</Link>
					</li>
					<li>
						<Link href='/sobre'>
							<a onClick={() => setShowMenu(false)}>Sobre</a>
						</Link>
					</li>
					<li>
						<Link href='/contato'>
							<a onClick={() => setShowMenu(false)}>Contato</a>
						</Link>
					</li>
				</ul>

				{/* Social Icons */}
				<div className={styles.bottomMobileNav}>
					{/* Search Component */}
					<div className={styles.socialIcons}>
						<a
							href='https://www.youtube.com/channel/UCcfxbN1sySfe1jouSpMJGFg'
							target='_blank'
							rel='noreferrer'
						>
							<FaYoutube className={`${styles.icon} ${styles.youtube}`} />
						</a>
						<a
							href='https://twitter.com/AVidamaisRica'
							target='_blank'
							rel='noreferrer'
						>
							<FaTwitter className={`${styles.icon} ${styles.twitter}`} />
						</a>
						<a
							href='https://www.instagram.com/avidamaisrica/'
							target='_blank'
							rel='noreferrer'
						>
							<FaInstagram className={`${styles.icon} ${styles.instagram}`} />
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
