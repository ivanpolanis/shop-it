import Head from 'next/head'

function Header({ title = 'Shop It' }) {
	return (
		<Head>
      <title>{title}</title>
      <meta name="description" content="The best ecommerce" />
      <link rel="icon" href="/favicon.ico" />
		</Head>
	)
}

export default Header
