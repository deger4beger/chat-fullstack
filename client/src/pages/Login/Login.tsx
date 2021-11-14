import React, {useState} from 'react'
import Input from '../../components/Input/Input';
import AuthTemplate from '../../components/AuthTemplate/AuthTemplate';

const User: React.FC = () => {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	return (
		<AuthTemplate title="Login">
			<Input
				name="username"
				placeholder="Username"
				type="input"
				value={username}
				onChange={(e) => setUsername(e.currentTarget.value)}
			/>
			<Input
				name="password"
				placeholder="Password"
				type="input"
				value={password}
				onChange={(e) => setPassword(e.currentTarget.value)}
			/>
		</AuthTemplate>
	)
}

export default User