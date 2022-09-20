import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />) // DOM에 컴포넌트를 랜더링하는 함수
  // const { getByText } = render(<App />)
  // const linkElement = screen.getByText(/learn react/i)
  const linkElement = screen.getByText(/NETFLIX ORIGINALS/i)
  expect(linkElement).toBeInTheDocument()
})
