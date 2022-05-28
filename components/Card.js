import React from 'react';
import styles from '@/styles/Card.module.css';

const Card = () => {
	return (
		<div className={styles.card}>
			<div className={styles.cardHeader}>
				<img
					src='https://source.unsplash.com/600x400/?computer'
					alt='card__image'
					width='600'
					className={styles.cardImage}
				/>
			</div>
			<div className={styles.cardBody}>
				<span className={styles['tag' + 'tagBlue']}>Technology</span>
				<h4>What's new in 2022 Tech</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit sequi
					perferendis molestiae.
				</p>
			</div>
			<div className={styles.cardFooter}>
				<div className={styles.user}>
					<img
						src='https://i.pravatar.cc/40?img=1'
						alt='user__image'
						className={styles.userImage}
					/>
					<div className={styles.userInfo}>
						<h5>Jane Doe</h5>
						<small>2h ago</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
