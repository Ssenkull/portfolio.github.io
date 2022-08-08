const me = {
	siteName: 'Bogdan Zbarazhskiy',
	avatar: '/avatar.jpeg',
	description:
		'<p>My name is Bogdan and I am junior web developer</p>' +
		'<p>My objective as a Front-End Developer is to apply my technical skills in IT craftsmanship and IT implementation , and to utilize my knowledge in web configuration and troubleshooting to fulfill the company’s vision and mission.</p>' +
		'<p>I have 3 years experience with html/css(scss) and also 1,5 year experience with JavaScript(and also I know react basics). During this time I have done a lot of projects that you can see on my github. It would be really great to work with you!<p>' 
}

export default function handler(req, res) {
	res.status(200).json(me)
}
