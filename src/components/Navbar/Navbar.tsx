import React, { useState } from 'react';
import './nav-bar.css';
import iconMenu from '../../assets/images/icon-menu.svg'
import iconMenuClose from '../../assets/images/icon-menu-close.svg'
export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {
	const [showMenu, setShowMenu] = useState(false)
	const onClickMenu = () => {
		setShowMenu(!showMenu)
	}
	const listNavigation = (
		<ul>
			<li>Home</li>
			<li>New</li>
			<li>Popular</li>
			<li>Trending</li>
			<li>Categories</li>
		</ul>
	)

	return (
		<nav>
			<section>
				<div>
					<h1>W.</h1>
				</div>
				{listNavigation}
				<img className='iconMenu' src={iconMenu} alt="Icon Menu" onClick={onClickMenu} />
			</section>
			{
				showMenu && (
					<div className='handleMenu'>
						<div>
							{listNavigation}
						</div>
						<img src={iconMenuClose} alt="Icon Menu Close" onClick={onClickMenu} />
					</div>
				)
			}
		</nav>
	);
};

export default Navbar;
