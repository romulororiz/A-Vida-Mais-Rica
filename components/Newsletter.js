import React from 'react';
import styles from '@/styles/Newsletter.module.css';

const Newsletter = () => {
	return (
		<div className={styles.newsletter}>
			<h3 className={styles.heading}>Newsletter</h3>
			<div className={styles.newsletterInputBox}>
				<label htmlFor='newsletter'>Receive my latest investment tips</label>
				<div className={styles.newsletterInput}>
					<input
						type='text'
						placeholder='Your Email'
						id='newsletter'
						onBlur={e => (e.target.value = '')}
					/>
					<a>GO</a>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
