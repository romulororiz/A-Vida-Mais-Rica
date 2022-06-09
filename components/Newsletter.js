import React from 'react';
import styles from '@/styles/Newsletter.module.css';

const Newsletter = ({ heading, title, lead, homepage }) => {
	return (
		<div
			className={`${styles.newsletter} ${
				homepage && styles.newsletterHomepage
			}`}
		>
			<h3 className={`${styles.heading} ${homepage && styles.headingHomepage}`}>
				{heading ? heading : ''}
			</h3>
			<div
				className={`${styles.newsletterInputBox} ${
					homepage && styles.newsletterInputBoxHomepage
				}`}
			>
				<div
					className={`${styles.newsletterInfo} ${
						homepage && styles.newsletterInfoHomepage
					}`}
				>
					<h4>{title ? title : ''}</h4>
					<p>{lead ? lead : ''}</p>
				</div>
				<div
					className={`${styles.newsletterInput} ${
						homepage && styles.newsletterInputHomepage
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
