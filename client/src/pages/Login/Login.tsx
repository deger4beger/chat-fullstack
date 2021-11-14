import React, {useState} from 'react'
import s from "./Login.module.scss"
import Input from '../../components/Input/Input';

const User: React.FC = () => {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	return (
		<div>
			<div className={s.wrapper}>
				<Input
					name="username"
					type="input"
					value={username}
					onChange={(e) => setUsername(e.currentTarget.value)}
				/>
				<Input
					name="password"
					type="input"
					value={password}
					onChange={(e) => setPassword(e.currentTarget.value)}
				/>
			</div>
		</div>
	)
}

export default User