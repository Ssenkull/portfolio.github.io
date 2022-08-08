const links = [
	{
		_id: 'link_1',
		icon: {
			path: '/icons/marvel.svg',
			width: 106
		},
		gradient: {
			from: '#13E780',
			to: '#00bbd5'
		},
		link: 'http://marvelapp-github-io.vercel.app/',
		title: 'Marvel App'
	},
	{
		_id: 'link_2',
		icon: {
			path: '/icons/todo.svg',
			width: 100
		},
		gradient: {
			from: '#fc5dff',
			to: '#5dfdff'
		},
		link: 'https://react-to-do-theta.vercel.app/',
		title: 'React ToDo list',
		isImportant: true
	},
	{
		_id: 'link_3',
		icon: {
			path: '/icons/employee.svg',
			width: 80
		},
		gradient: {
			from: '#FEAC5E',
			to: '#4BC0C8'
		},
		link: 'https://employees-app-github-io.vercel.app/',
		title: 'React employees app'
	},
	{
		_id: 'link_4',
		icon: {
			path: '/icons/telegram.svg',
			width: 80
		},
		gradient: {
			from: '#76acfd',
			to: '#6ed0ff'
		},
		link: 'https://t.me/TENSION42',
		title: 'Telegram'
	},
	{
		_id: 'link_5',
		icon: {
			path: '/icons/food.svg',
			width: 120
		},
		gradient: {
			from: '#c659ff',
			to: '#ff3f4d'
		},
		link: 'https://ssenkull.github.io/food.github.io/',
		title: 'Food website'
	},
	{
		_id: 'link_6',
		icon: {
			path: '/icons/calculator.svg',
			width: 80
		},
		gradient: {
			from: '#3EA6EA',
			to: '#2179c1'
		},
		link: 'https://ssenkull.github.io/personal-expenses-calculator.github.io/',
		title: 'Personal Expenses Calculator'
	},
	{
		_id: 'link_7',
		icon: {
			path: '/icons/youtube.svg',
			width: 84
		},
		gradient: {
			from: '#e53935',
			to: '#e35d5b'
		},
		link: 'https://www.youtube.com/watch?v=l9nh1l8ZIJQ&t=1s',
		title: 'Music for coding'
	},
	{
		_id: 'link_8',
		icon: {
			path: '/icons/instagram.svg',
			width: 75
		},
		gradient: {
			from: '#FF385C',
			to: '#dd2e63'
		},
		link: 'https://www.instagram.com/4tension2/',
		title: 'Instagram'
	},
	{
		_id: 'link_9',
		icon: {
			path: '/icons/github.svg',
			width: 90
		},
		gradient: {
			from: '#f6d365',
			to: '#fda085'
		},
		link: 'https://github.com/Ssenkull',
		title: 'Github'
	},
	{
		_id: 'link_10',
		icon: {
			path: '/icons/linkedin.svg',
			width: 60
		},
		gradient: {
			from: '#ff8d42',
			to: '#ff8257'
		},
		link: 'https://www.linkedin.com/in/bogdan-zbarazhskiy-61815a217/',
		title: 'Linkedin'
	}
]

export default function handler(req, res) {
	res.status(200).json(links)
}
