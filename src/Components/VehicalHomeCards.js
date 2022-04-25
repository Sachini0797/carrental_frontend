import React, { Component } from 'react';
import { Card, CardDeck, Container } from "react-bootstrap";
import imageLargeFamilyEstate from '../Images/family_estate.jpg';
import imageLargeFamilySaloon from '../Images/large_saloon.jpg';
import imageMediumVans from '../Images/medium_vans.jpg';
import imageSmalltown from '../Images/smalltown.jpg';
import imageSmallHatchback from '../Images/small_hatchback.jpg';

export default class Cards extends Component {
    render() {
        return (
        <Container>
            <br></br>
             <h2><center>Our Collections</center></h2>
             <br></br>
        
            <CardDeck>
            <Card border="light" style={{ width: '18rem' }} className='zoom' >
                    <Card.Img variant="bottom" src={imageSmalltown} style={{ width:"250px" , height:"150px"}} className='zoom'/>
                    <Card.Body>
                        <Card.Title>Small Town Cars</Card.Title>
                        <Card.Text>
                            These are good to drive,
                            has a big-car kit list, is spacious and well-made all factors
                            that has helped it jump up the rankings in the city.
                        </Card.Text>

                      
                    </Card.Body>
                </Card>
                <Card border="light" style={{ width: '18rem' }} className='zoom'>
                    <Card.Img variant="top" src={imageSmallHatchback} style={{ width:"250px" , height:"150px"}} className='zoom' />
                    <Card.Body>
                        <Card.Title>Family Hatchback</Card.Title>
                        <Card.Text>
                            Family
                            Hatchback look like  conventional cars
                            and behave like one, with a smooth ride in town and enough power
                            on faster roads.
                        </Card.Text>

                      
                    </Card.Body>
                </Card>

                <Card border="light" style={{ width: '18rem' }} className='zoom'>
                    <Card.Img variant="top" src={imageLargeFamilySaloon}  style={{ width:"250px" , height:"150px"}} className='zoom'/>
                    <Card.Body>
                        <Card.Title>Large Family Saloon</Card.Title>
                        <Card.Text>
                            The longest gazes are likely to be
                            in the direction of cars in the optimum specification, pastel
                            shades, retro wheel design.
                        </Card.Text>
                   
                    </Card.Body>
                </Card>
                   
            </CardDeck>
            <br></br>
            
            <CardDeck>
            <Card border="light" style={{ width: '18rem' }} className='zoom'>
                    <Card.Img variant="bottom" src={imageLargeFamilyEstate} style={{ width:"250px" , height:"150px"}} className='zoom' />
                    <Card.Body>
                        <Card.Title>Large Family Estate</Card.Title>
                        <Card.Text>
                           A good choice of impressive petrol
							and diesel engines, mated by and large to slick and efficient
							transmissions, and equally impressive onboard.
                        </Card.Text>

                      
                    </Card.Body>
                </Card>

                <Card border="light" style={{ width: '18rem' }} className='zoom'>
                    <Card.Img variant="top" src={imageMediumVans}  style={{ width:"250px" , height:"150px"}} className='zoom'/>
                    <Card.Body>
                        <Card.Title>Medium Vans</Card.Title>
                        <Card.Text>
                        The marketplace for medium-sized
						cargo carriers is fiercely contested and there's plenty of choice
						to suit most requirements, tastes and budgets
                        </Card.Text>
                    
                    </Card.Body>
                </Card>

                <Card border="light" style={{ width: '18rem' }}>
               
                </Card>
                   
            </CardDeck>
            <br></br>
        </Container>
            
        );
    }


}