import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	const projects = [
		{
			title: 'Menumium',
			description: 'The Complete Restaurant Management System (Associated with 6amTech)',
			metrics: { performance: 98, accessibility: 100, seo: 100 },
			techDetails: [
				'Managed with docker & kubernetes',
				'Scaled with Digital Ocean',
				'High performance Swoole server implemented',
				'Managed system & database design'
			],
			image: '/menumium.webp',
			projectLink: 'https://menumium.com'
		},
		{
			title: 'Demandium',
			description: 'Demandium is a complete on-demand booking service platform (Associated with 6amTech)',
			metrics: { performance: 95, accessibility: 98, seo: 100 },
			techDetails: [
				'Laravel module',
				'Event driven architecture',
			],
			image: '/demandium.webp',
			projectLink: 'https://demandium.app'
		},
		{
			title: 'Payment & SMS Gateway Addon',
			description: 'A PHP-based solution enhancing 6amTech products (Associated with 6amTech)',
			metrics: { performance: 95, accessibility: 98, seo: 100 },
			techDetails: [
				'Laravel framework',
				'Event driven architecture',
			],
			image: '/payment.png',
			projectLink: 'https://6amtech.com/payment-sms-gateway-addon'
		},
		{
			title: '6Cash',
			description: 'A secure Mobile Financial Service (MFS) digital wallet (Associated with 6amTech)',
			metrics: { performance: 95, accessibility: 98, seo: 100 },
			techDetails: [
				'Laravel framework',
				'Event driven architecture',
			],
			image: '/6cash.webp',
			projectLink: 'https://6amtech.com/6cash'
		},
		{
			title: 'eFood',
			description: 'A multi-branch restaurant food delivery platform (Associated with 6amTech)',
			metrics: { performance: 95, accessibility: 98, seo: 100 },
			techDetails: [
				'Laravel framework',
				'Event driven architecture',
			],
			image: '/efood.webp',
			projectLink: 'https://efood.pro'
		},
		{
			title: 'GroFresh',
			description: 'A single-vendor grocery eCommerce platform (Associated with 6amTech)',
			metrics: { performance: 95, accessibility: 98, seo: 100 },
			techDetails: [
				'Laravel framework',
				'Event driven architecture',
			],
			image: '/grofresh.webp',
			projectLink: 'https://6amtech.com/grofresh'
		},
		{
			title: 'Hexacom',
			description: 'A single-vendor eCommerce platform (Associated with 6amTech)',
			metrics: { performance: 95, accessibility: 98, seo: 100 },
			techDetails: [
				'Laravel framework',
				'Event driven architecture',
			],
			image: '/hexacom.webp',
			projectLink: 'https://6amtech.com/hexacom'
		},
		{
			title: '6Valley',
			description: 'A modern multi-vendor eCommerce (Associated with 6amTech)',
			metrics: { performance: 95, accessibility: 98, seo: 100 },
			techDetails: [
				'Laravel framework',
				'Event driven architecture',
			],
			image: '/6valley.webp',
			projectLink: 'https://6valley.app'
		},
	];

	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{projects.map((project) => {
						const ProjectCard = (
							<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
								<div className="grid grid-cols-1 lg:grid-cols-2">
									<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
										<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
										<p className="text-sm sm:text-base text-gray-400">{project.description}</p>
										<div>
											<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
											<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
												{project.techDetails.map((detail) => (
													<li key={detail} className="flex items-center gap-2">
														<span className="text-green-400">▹</span>
														<span className="text-gray-300">{detail}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
									<div className="relative h-full min-h-[300px] lg:min-h-full">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover"
											sizes="(max-width: 1024px) 100vw, 50vw"
										/>
										<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
									</div>
								</div>
							</div>
						);

						return project.projectLink ? (
							<a key={project.title} href={project.projectLink} className="block">
								{ProjectCard}
							</a>
						) : (
							ProjectCard
						);
					})}
				</div>
			</div>
		</section>
	);
};