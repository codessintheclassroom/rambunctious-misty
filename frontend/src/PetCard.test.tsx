import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import { render } from 'react-testing-library';

import * as React from 'react';

import PetCard from './PetCard';
import Pet from './Pet';

const petMock = {
    "id": "225c5957d7f450baec75a67ede427e9",
    "name": "Fido",
    "status": "available",
    "kind": "dog",
    "breed": "Labrador",
    "description": "Fido is a good boy who loves long walks in the park, playing with his ball and licking faces. He's great with children and an absolute sweetheart.",
    "birthday": "2016-04-15",
    "photos": ["https://upload.wikimedia.org/wikipedia/commons/b/b3/Labrador_on_Quantock_%282307909488%29.jpg"]
} as Pet;

describe('PetCard', () => {
    it('should render the given name', () => {
        const { getByText } = render(<PetCard pet={petMock}/>);
        expect(getByText('Fido')).toBeInTheDocument();
    });

    it('should render the given description', () => {
        const { getByText } = render(<PetCard pet={petMock}/>);
        expect(getByText("Fido is a good boy who loves long walks in the park, playing with his ball and licking faces. He's great with children and an absolute sweetheart.")).toBeInTheDocument();
    });

    it('should render the adopt button', () => {
        const { getByText } = render(<PetCard pet={petMock}/>);
        expect(getByText("Adopt")).toBeInTheDocument();
    });
});
