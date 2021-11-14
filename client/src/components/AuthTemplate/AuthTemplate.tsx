import React from 'react'
import s from "./AuthTemplate.module.scss"

interface IAuthTemplateProps {
	title: string
	children: React.ReactNode[] | React.ReactNode
}

const AuthTemplate: React.FC<IAuthTemplateProps> = ({title, children}) => {
	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				{title}
			</div>
			<div className={s.inputs}>
				{children}
			</div>
		</div>
	)
}

export default AuthTemplate