import { useState } from 'react';

interface FormData {
	name: string;
	email: string;
	message: string;
}

export default function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	});
	const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus('submitting');

		// Simulate form submission
		// In a real app, you would send this to your backend
		setTimeout(() => {
			setStatus('success');
			setFormData({ name: '', email: '', message: '' });
			
			// Reset success message after 3 seconds
			setTimeout(() => {
				setStatus('idle');
			}, 3000);
		}, 1000);
	};

	return (
		<div className="contact-form-container">
			<h2>Get in Touch</h2>
			<p className="contact-description">
				Have a project in mind? Want to collaborate? Just want to say hello? 
				Fill out the form below and I'll get back to you as soon as possible.
			</p>

			<form onSubmit={handleSubmit} className="contact-form">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						placeholder="Your name"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						placeholder="your.email@example.com"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
						rows={6}
						placeholder="Tell me about your project or just say hello..."
					/>
				</div>

				<button 
					type="submit" 
					className="submit-button"
					disabled={status === 'submitting'}
				>
					{status === 'submitting' ? 'Sending...' : 'Send Message'}
				</button>

				{status === 'success' && (
					<div className="success-message">
						✓ Message sent successfully! I'll get back to you soon.
					</div>
				)}

				{status === 'error' && (
					<div className="error-message">
						✗ Something went wrong. Please try again.
					</div>
				)}
			</form>
		</div>
	);
}
