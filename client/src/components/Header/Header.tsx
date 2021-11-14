import React from 'react'
import s from "./Header.module.scss"

const Header = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<div className={s.logoBlock}>
					<div className={s.logo}>
						chat
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header