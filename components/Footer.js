/* eslint-disable no-unused-vars */
import Link from 'next/link';

const current_year = new Date().getFullYear();

const Footer = () => (
	<div style={{ textAlign: 'center' }}>
		<p>&copy; {current_year} All Right Reserved.</p>
		<p>
			Developed by {' '}
			<Link href="https://jaamaal.com">
				<a>Md. Jamal Uddin</a>
			</Link>{' '}
			View code on {' '}
			<Link href="https://github.com/jamal-pb95/Muslim_Checklist">
				<a>Github</a>
			</Link>
		</p>
	</div>
);

export default Footer;
