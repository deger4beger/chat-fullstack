import { render } from "@testing-library/react"
import App from './App'
import AppProvider from './providers/AppProvider'

test("Render App component", () => {

	const { getByTestId } = render(<AppProvider component={<App />} />)

	const router = getByTestId("router")
	const header = getByTestId("header")

	expect(header).toBeTruthy()
	expect(router).toBeTruthy()
})