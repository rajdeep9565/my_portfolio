import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';
// import Image from 'Abhi.JPG'

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =
		width < 650
			? 'https://github.com/Abhisingh755/My-portfolio/blob/main/src/Components/Home/20200104105927_IMG_5635.JPG?raw=true'
			: 'https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true';
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					Hello! My name is Rajdeep and I enjoy creating things that
					exisst on the internet. My interest in web development started
					back last year when everything  was shut during Pandemic. Web Developement 
					taught me a lot about HTML , CSS , JavaScript and many more. <br />
					<br /> Fast Forwarding to today, I built few  of web
					applications and 2 major projects. Learned a great deal
					about Teamwork, Collaboration, and Communication. After all this , here I am
					<span style={{ color: `#00a0a0` }}>
						{' '}
						looking for an opportunity as a full stack web developer.
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
