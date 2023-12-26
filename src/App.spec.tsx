// react
import { render, screen, waitFor } from '@testing-library/react';
// component
import App from './App';

describe('App', () => {
    beforeEach(() => {
        render(<App />);
    });

    test('should render "Loading..."', () => {
        expect(screen.getByText('Loading...')).toBeDefined();
    });

    test('should render "App"', async () => {
        await waitFor(() => {
            expect(screen.getByText(/coder/i)).toBeDefined();
            expect(screen.getByText(/land/i)).toBeDefined();

            expect(screen.getByText(/Tasks/i)).toBeDefined();
            expect(screen.getByText(/List/i)).toBeDefined();

            expect(screen.getByText(/Steven Joseph Bustillo López/i)).toBeDefined();
        });
    });
});
