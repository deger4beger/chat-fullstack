import React, {useState} from 'react'
import Input from '../../components/Input/Input';
import AuthTemplate from '../../components/AuthTemplate/AuthTemplate';
import Button from '../../components/Button/Button';

const User: React.FC = () => {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const login = () => {
		console.log(username, password)
	}

	return (
		<AuthTemplate title="Login" Button={
			<Button
				content="Login"
				onClick={login}
				disabled={false}
				loading={false}
			/>
		}>
			<Input
				name="username"
				placeholder="Username"
				type="text"
				value={username}
				onChange={(e) => setUsername(e.currentTarget.value)}
			/>
			<Input
				name="password"
				placeholder="Password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.currentTarget.value)}
			/>
		</AuthTemplate>
	)
}

export default User