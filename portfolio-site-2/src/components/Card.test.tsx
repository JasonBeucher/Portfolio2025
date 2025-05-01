const { render, screen } = require('@testing-library/react');
const Card = require('../Card');

test('hello world!', () => {
	render(<Card />);
	const linkElement = screen.getByText(/hello world/i);
	expect(linkElement).toBeInTheDocument();
});