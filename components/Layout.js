/* eslint-disable no-unused-vars */
import Link from 'next/link';

import Header from './Header';
import Footer from './Footer';
import Card from './Card';

const Layout = (props) => (
	<div>
		<Header />
		<div style={cardWrapper}>
			<div style={cardRow}>
				<Link href="/salat">
					<div style={cardColumn}>
						<Card title="সালাত" message="আপনার সালাত সমূহ সংরক্ষণ করুন।" />
					</div>
				</Link>
				<Link href="/siam">
					<div style={cardColumn}>
						<Card title="সাওম" message="আপনার সাওম সমূহ সংরক্ষণ করুন।" />
					</div>
				</Link>
			</div>
			<div style={cardRow}>
				<Link href="/learn">
					<div style={cardColumn}>
						<Card title="ইসলামী জ্ঞান শিখুন" message="কুরআন ও হাদিস থেকে ইসলামী জ্ঞান অর্জন করুন" />
					</div>
				</Link>
				<Link href="/time">
					<div style={cardColumn}>
						<Card title="সময়ানুবর্তীতা" message="আপনার সময় কে ভালো কাজে লাগান ও ট্রাক করে রাখুন" />
					</div>
				</Link>
			</div>
			<div style={cardRow}>
				<Link href="/takecare">
					<div style={cardColumn}>
						<Card title="ভালো কাজ" message="আপনার ভালো কাজ সমূহ সংরক্ষণ করুন" />
					</div>
				</Link>
				<Link href="/about">
					<div style={cardColumn}>
						<Card title="আমাদের সম্পর্কে" message="আমাদের সম্পর্কে জানতে ভিজিট করুন" />
					</div>
				</Link>
			</div>
		</div>
		{props.children}
		<Footer />
	</div>
);

export default Layout;

const cardWrapper = {
	backgroundColor: 'green',
	padding: 20
};

const cardRow = {
	color: 'red',
	display: 'flex'
};

const cardColumn = {
	width: '50%'
};
