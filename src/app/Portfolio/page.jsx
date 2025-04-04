'use client'
import Card from '../../components/layout/Card/Card'
import styles from './../Portfolio/Portfolio.module.css'

const page = () => {
	const cardsData = [
		{
			id: '1',
			images: '/bono.png',
			title: 'Bono bar',
			description:
				'В ресторане Bono вас ждет гармония вкусов и ощущений. Уютные уголки, мягкие диваны и элегантное освещение создают неповторимую атмосферу.',
			slideImage: '/bono-hero.png',
			link: 'https://bono-bar.com/',
		},
		{
			id: '2',
			images: '/nature-logo.svg',
			title: 'Nature',
			description: 'Creating a beautiful 3D website with a ‘lens effect’',
			slideImage: '/nature.png',
			link: 'https://beksultan2200.github.io/nature/',
		},
		{
			id: '3',
			images: '/ucart.svg',
			title: 'UCard neo',
			description: 'Инновационная кредитная карта uCard neo',
			slideImage: '/ucart-hero.png',
			link: 'https://beksultan2200.github.io/js-3d-tilt-animation/',
		},
		{
			id: '4',
			images:
				'https://beymaral-honey.com/wp-content/uploads/2024/02/transparent-logo.png',
			title: 'BEYMARAL HONEY',
			description:
				"Introducing our premium white honey, a product of excellence crafted in harmony with nature's processes.",
			slideImage: '/honey.png',
			link: 'https://honey-nj26w5rlm-beksultan2200s-projects.vercel.app/#sectionOne',
		},
		{
			id: '5',
			images: '/portfolio/evraz.svg',
			title: 'ЕВРАЗ',
			description:
				'Наше приложение планирования задач помогло ЕВРАЗ управлять проектами и сроками на разных континентах',
			slideImage: '/portfolio/slide-image.svg',
		},
		{
			id: '6',
			images: '/portfolio/gazprom-media.svg',
			title: 'Газпром Медиа',
			description:
				'Создали сайт для Газпром Медиа, обеспечив легкий доступ к контенту и информации о медийных проектах',
			slideImage: '/portfolio/slide-image.svg',
		},
		{
			id: '7',
			images: '/portfolio/hb.svg',
			title: 'HealthBalance',
			description:
				'Создали интуитивное мобильное приложение HealthBalance для отслеживания активности, здоровья и фитнеса',
			slideImage: '/portfolio/slide-image.svg',
		},
		{
			id: '8',
			images: '/portfolio/texta.svg',
			title: 'Texta',
			description:
				'Разработали приложение Texta, которое автоматически генерирует высококачественный контент для блогов и публикаций',
			slideImage: '/portfolio/slide-image.svg',
		},
	]
	return (
		<div>
			<section className={styles.projects}>
				<div className={styles.container}>
					<h1 className={styles.title}>Наши проекты</h1>
					{cardsData.map((card, index) => (
						<Card
							key={index}
							images={card.images}
							title={card.title}
							description={card.description}
							slideImage={card.slideImage}
							link={card.link}
							animationClass={
								index % 2 === 0
									? styles.cardSlideFromLeft
									: styles.cardSlideFromRight
							}
						/>
					))}
				</div>
			</section>
		</div>
	)
}

export default page
