import { render } from "@testing-library/react"
import App from './App'
import AppProvider from './providers/AppProvider'

test("Render App component", () => {

	const { getByTestId } = render(<AppProvider component={<App />} />)

	const router = getByTestId("main")

	expect(router).toBeTruthy()
})