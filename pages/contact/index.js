import Layout from '@/components/Layout';
import React from 'react';
import styles from '@/styles/ContactPage.module.css';
import { FaPhoneAlt, FaAt } from 'react-icons/fa';
import { useState } from 'react';
import { fetchAPI } from 'lib/api';
import axios from 'axios';

const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		number: '',
		email: '',
		message: '',
	});
	const [messageSent, setMessageSent] = useState(false);

	const { firstName, lastName, number, email, message } = formData;

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async e => {
		e.preventDefault();

		try {
			await axios.post('http://localhost:1337/api/messages', {
				data: {
					firstName,
					lastName,
					email,
					number,
					message,
				},
			});
			setMessageSent(true);
		} catch (error) {
			console.log(`Error: ${error}`);
		}
	};

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
					{!messageSent ? (
						<form onSubmit={onSubmit}>
							<div className={styles.formControl}>
								<input
									type='text'
									id='firstName'
									onChange={onChange}
									value={firstName}
									required
								/>
								<label htmlFor='first-name'>Nome</label>
							</div>
							<div className={styles.formControl}>
								<input
									type='text'
									id='lastName'
									onChange={onChange}
									value={lastName}
									required
								/>
								<label htmlFor='last-name'>Sobrenome</label>
							</div>
							<div className={styles.formControl}>
								<input
									type='number'
									id='number'
									onChange={onChange}
									value={number}
									required
								/>
								<label htmlFor='number'>Telefone</label>
							</div>
							<div className={styles.formControl}>
								<input
									type='email'
									id='email'
									onChange={onChange}
									value={email}
									required
								/>
								<label htmlFor='email'>E-mail</label>
							</div>
							<div className={styles.formControl}>
								<textarea
									id='message'
									onChange={onChange}
									value={message}
									required
									rows={5}
									cols={30}
								/>
								<label htmlFor='message'>Mensagem</label>
							</div>
							<input type='submit' value='Enviar' />
						</form>
					) : (
						<div className={styles.messageSent}>
							<h3>Sua Mensagem foi enviada!</h3>
							<p>Entraremos em contato em Breve</p>
						</div>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
