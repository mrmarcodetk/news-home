import { Navbar, Main } from '@/components';
import React from 'react';
export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
	return (
		<main>
			<Navbar />
			<Main />
		</main>
	)
};

export default Home;
