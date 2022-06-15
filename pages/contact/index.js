import Layout from '@/components/Layout';
import React from 'react';
import styles from '@/styles/ContactPage.module.css';
import { FaPhoneAlt, FaAt } from 'react-icons/fa';

const Contact = () => {
	return (
		<Layout>
			<div className={styles.contactPage}>
				<div className={styles.contactPageDetails}>
					<h1 className={styles.heading}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h1>
					<p className={styles.lead}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
						fugiat? Accusantium unde facere assumenda totam magnam recusandae
						quod asperiores ea?
					</p>
					<ul className={styles.contactInfo}>
						<li className={styles.contactInfoItem}>
							<span>
								<FaPhoneAlt className={styles.icon} />
							</span>{' '}
							+41 123 456 789
						</li>
						<li className={styles.contactInfoItem}>
							<span>
								<FaAt className={styles.icon} />
							</span>{' '}
							gregoryroriz@avidamaisrica.com
						</li>
					</ul>
				</div>
				<div className={styles.contactForm}>
					<form>
						<div className={styles.formControl}>
							<input
								onBlur={e => (e.target.value = '')}
								type='text'
								id='first-name'
								required
							/>
							<label htmlFor='first-name'>Nome</label>
						</div>
						<div className={styles.formControl}>
							<input
								onBlur={e => (e.target.value = '')}
								type='text'
								id='last-name'
								required
							/>
							<label htmlFor='last-name'>Sobrenome</label>
						</div>
						<div className={styles.formControl}>
							<input
								onBlur={e => (e.target.value = '')}
								type='number'
								id='phone'
								required
							/>
							<label htmlFor='phone'>Telefone</label>
						</div>
						<div className={styles.formControl}>
							<input
								onBlur={e => (e.target.value = '')}
								type='email'
								id='email'
								required
							/>
							<label htmlFor='email'>E-mail</label>
						</div>
						<div className={styles.formControl}>
							<textarea
								onBlur={e => (e.target.value = '')}
								id='message'
								required
								rows={5}
								cols={30}
							/>
							<label htmlFor='message'>Mensagem</label>
						</div>
						<input type='submit' value='Enviar' />
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
