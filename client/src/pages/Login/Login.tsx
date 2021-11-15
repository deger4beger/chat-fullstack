import React, {useState} from 'react'
import Input from '../../components/Input/Input';
import AuthTemplate from '../../components/AuthTemplate/AuthTemplate';
import Button from '../../components/Button/Button';
import { loginThunk } from '../../redux/slices/userThunks';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const Login: React.FC = () => {

	const [username, setUsername] = useState<string>("")
	const [password, setPassword] = useState<string>("")

	const dispatch = useAppDispatch()
	const loading = useAppSelector(state => state.userReducer.isLoading)

	const login = () => {
		dispatch(loginThunk({username, password}))
	}

	return (
		<AuthTemplate title="Login" Button={
			<Button
				content="Login"
				onClick={login}
				disabled={false}
				loading={loading}
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

export default Login