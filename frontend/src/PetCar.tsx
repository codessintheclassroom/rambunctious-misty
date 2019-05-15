import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class PetCard extends Component<Props> {
    render() {
        return ( 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"https://source.unsplash.com/collection/212527/200x200/?sig=" + Math.floor(Math.random() * 100)} />
            <Card.Body>
                <Card.Title>{this.props.pet.name}</Card.Title>
                <Card.Text>{this.props.pet.description}</Card.Text>
                <Button variant="primary">Adopt</Button>
            </Card.Body>
        </Card>)
        ;
    }
  }

interface Pet {
    readonly id: string;
    name: string;
    description: string;
}
  
type Props = {
    pet: Pet;
};
  
export default PetCard;