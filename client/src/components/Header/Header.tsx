import React from 'react'
import s from "./Header.module.scss"
import PrivateMenu from './PrivateMenu/PrivateMenu';
import PublicMenu from './PublicMenu/PublicMenu';

const Header = () => {
	const isAuth = false
	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<div className={s.logoBlock}>
					<div className={s.logo}>
						chat
					</div>
				</div>
				<div className={s.menuBlock}>
					{ isAuth ? <PrivateMenu /> : <PublicMenu /> }
				</div>
			</div>
		</div>
	)
}

export default Header