import MetaTitle from '../../ui/MetaTitle'
import axios from 'axios'
import AboutMe from './about-me/AboutMe'
import Grid from './grid/Grid'
import styles from './Home.module.scss'
import Circles from '../../ui/cicrcles/Circles'
import { API_URL } from '../../../constants'
import { useState, useEffect } from 'react'



export default function Home() {

	const [meState, setMe] = useState({})
	const [linksState, setLinks]=useState([])
	

	 const getInfo = async () => {
		const links = await axios.get(`${API_URL}/links`).then(({ data }) => data)
		 const me = await axios.get(`${API_URL}/me`).then(({ data }) => data)
		 setMe(me)
		 setLinks(links)
	}
	
	useEffect(() => {
		getInfo()
	}, []);
	
	return (
		<section className={styles.section}>
			<MetaTitle title="Bogdan Zbarazhskiy | Links" />
			<div className={styles.container}>
				{meState?<AboutMe me = {meState}/>: '' }
				{linksState?<Grid links = {linksState}/>: '' }
			</div>
			<Circles/>
		</section>
	)
}



