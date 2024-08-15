import { createRemixStub } from '@remix-run/testing';
import GamePage from '../routes/game.$slug';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


test("GamePage", async () => {
    const RemixStub = createRemixStub([
        {
            path: '/game/$slug',
            Component: GamePage,
            loader() {
                return {
                    name: 'My Game',
                    otherKey1: 'other key 1',
                    otherKey2: 'other key 2',
                }
            }
        }
    ]);

    render(<RemixStub />);

    await waitFor(async () => {
        const heading = await screen.findByRole('heading');
        expect(heading).toHaveTextContent('My Game');
    });
})