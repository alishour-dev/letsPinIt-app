import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta
						name='description'
						content='A simple but cool web app, helps users add quick note pins and modify older ones by editing/deleting them, where each pinned note includes a title, content, and a cool bg picker to choose your favorite color for your pin. Fully designed and developed by me! Built using Next.js while using both next.js native hooks and the awesome react hooks, in addition to Styling using the powerful SASS preprocessor, and used LocaolStorage to persist data (notes)'
					/>
					<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
					<link rel='manifest' href='/site.webmanifest' />
					<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
					<meta name='msapplication-TileColor' content='#2d89ef' />
					<meta name='theme-color' content='#ffffff' />
				</Head>
				<body>
					<Main />
					<NextScript />
					<div id='portal' />
				</body>
			</Html>
		)
	}
}
