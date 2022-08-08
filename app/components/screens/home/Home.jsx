import MetaTitle from '../../ui/MetaTitle'
import AboutMe from './about-me/AboutMe'
import Grid from './grid/Grid'
import styles from './Home.module.scss'
import Circles from '../../ui/cicrcles/Circles'


const Home = ({ links, me }) => {
	return (
		<section className={styles.section}>
			<MetaTitle title="Bogdan Zbarazhskiy | Links" />
			<div className={styles.container}>
				<AboutMe me = {me}/>
				<Grid links = {links}/>
			</div>
			<Circles/>
		</section>
	)
}

export default Home
