import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react'
import App from '../../App';

test('checking',()=>{
    render(<App/>);
    const element = screen.getByText(/Bringing /i)
    expect (element).toBeInTheDocument()
})