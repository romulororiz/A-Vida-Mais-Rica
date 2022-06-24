/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.topFooter}>
					<div className={styles.logoBox}>
						<Link href='/'>
							<img
								className={styles.logo}
								src='/assets/logo.svg'
								alt='logo'
							></img>
						</Link>
					</div>
					<div className={styles.menuIcons}>
						<ul>
							<li>
								<Link href='/'>Início</Link>
							</li>
							<li>
								<Link href='/sobre'>Sobre</Link>
							</li>
							<li>
								<Link href='/contato'>Contato</Link>
							</li>
						</ul>
					</div>
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
				<hr></hr>
				<div className={styles.bottomFooter}>
					<p>All Rights Reserved &copy; Romulo Roriz 2022</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
