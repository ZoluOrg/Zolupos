import type { NextPage } from 'next'
import Head from 'next/head'
import { Logo } from '../../components/icons/Logo'
import { Input } from "../../components/UI/Input"
import { Link } from '../../components/UI/Link'

const Home: NextPage = () => {
	return (
		<div className="h-screen flex">
			<Head>
				<title>Employee Login</title>
			</Head>
			<div className="container flex flex-col">
				<div className="top h-full"></div>
				<div className="bottom">
				<div className="nav bg-black bg-opacity-5 w-screen p-5 flex flex-row gap-2 items-center justify-around">
					<div className="Logo flex flex-row gap-2 items-center">
						<Logo />
						<span className="font-bold text-3xl">Zolupos</span>
					</div>
					<div className="links flex gap-3">
						<div className="About"><Link href="">About</Link></div>
						<div className="About"><Link href="">Privacy Policy</Link></div>
						<div className="About"><Link href="">User Notice</Link></div>
					</div>
				</div>
				</div>
			</div>
		</div>
	)
}

export default Home
