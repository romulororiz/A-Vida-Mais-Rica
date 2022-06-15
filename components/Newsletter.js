import React from 'react';
import styles from '@/styles/Newsletter.module.css';

const Newsletter = ({ heading, title, lead, fullWidth }) => {
	return (
		<div
			className={`${styles.newsletter} ${
				fullWidth && styles.newsletterfullWidth
			}`}
		>
			<h3
				className={`${styles.heading} ${fullWidth && styles.headingfullWidth}`}
			>
				{heading ? heading : ''}
			</h3>
			<div
				className={`${styles.newsletterInputBox} ${
					fullWidth && styles.newsletterInputBoxfullWidth
				}`}
			>
				<div
					className={`${styles.newsletterInfo} ${
						fullWidth && styles.newsletterInfofullWidth
					}`}
				>
					<h4>{title ? title : ''}</h4>
					<p>{lead ? lead : ''}</p>
				</div>
				<div
					className={`${styles.newsletterInput} ${
						fullWidth && styles.newsletterInputfullWidth
					}`}
				>
					<input
						type='text'
						placeholder='Insira seu email aqui'
						id='newsletterSection'
						onBlur={e => (e.target.value = '')}
					/>
					<a>GO</a>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
