import React from 'react';
import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.topFooter}>
					<div className={styles.logoBox}>
						<Link href='/'>
							<img className={styles.logo} src='/assets/logo.svg'></img>
						</Link>
					</div>
					<div className={styles.menuIcons}>
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
					</div>
					<div className={styles.socialIcons}>
						<FaFacebook className={styles.icon} />
						<FaTwitter className={styles.icon} />
						<FaInstagram className={styles.icon} />
					</div>
				</div>
				<hr></hr>
				<div className={styles.bottomFooter}>
					<p>All Rights Reserverd &copy; Romulo Roriz 2022</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
