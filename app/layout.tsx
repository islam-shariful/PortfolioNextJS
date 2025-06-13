import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const myName = 'Shariful Islam';

export const metadata: Metadata = {
	title: `${myName} - Web Developer`,
	description:
		'Welcome to my portfolio! I am a passionate web developer creating modern web applications. Specializing in backend technologies, I build engaging web experiences that make an impact.',
	keywords: [
		'Web Developer',
		'Backend Developer',
		'Laravel Developer',
		'Next.js',
		'JavaScript',
		'TypeScript',
		'HTML5',
		'CSS3',
		'JAVA',
		'Apache Kafka',
		'Kong',
		'MySQL',
		'Modern Web Development',
		'Progressive Web Apps',
		myName,
	],
	authors: [{ name: myName }],
	creator: myName,
	openGraph: {
		title: `${myName} - Web Developer Portfolio`,
		description: 'Passionate web developer crafting modern and engaging digital experiences. Explore my projects and web development expertise.',
		url: 'https://islamshariful.com',
		siteName: `${myName} - Portfolio`,
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: `${myName} - Web Developer Portfolio`,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: `${myName} - Web Developer`,
		description: 'Passionate web developer crafting modern and engaging digital experiences. Explore my projects and web development expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
