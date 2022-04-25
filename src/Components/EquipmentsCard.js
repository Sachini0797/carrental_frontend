import React, { Component } from 'react';
import { Card, CardDeck, Container } from "react-bootstrap";
import imageBabySeat from '../Images/baby_seat.jpg';
import imageNav from '../Images/gps_nav.jpg';
import imageWineChiller from '../Images/wine_chiller.jpg';


export default class EquipmentsCard extends Component {
    render() {
        return (
        <Container>
            <br></br>
             <h2><center>Offered Equipments</center></h2>
            <br></br>
        
            <CardDeck>
            <Card border="light" style={{ width: '18rem' }} className='zoom'>
                    <Card.Img variant="bottom" src={imageBabySeat} style={{ width:"250px" , height:"150px"}} className='zoom'/>
                    <Card.Body>
                        <Card.Title>Baby Seat</Card.Title>
                        <Card.Text>
                        Child safety seats provide passive
						restraints and must be properly used to be effective and
						onvertible safety seats can be installed to child.
                        </Card.Text>

                        
                    </Card.Body>
                </Card>
                <Card border="light" style={{ width: '18rem' }} className='zoom'>
                    <Card.Img variant="top" src={imageNav} style={{ width:"250px" , height:"150px"}} className='zoom'/>
                    <Card.Body>
                        <Card.Title>GPS Navigator</Card.Title>
                        <Card.Text>
                        Our reliable, full-featured car GPS
						navigators take the doubt out of driving and they can even
						provide driver alerts for drivers.
                        </Card.Text>

                    
                    </Card.Body>
                </Card>

                <Card border="light" style={{ width: '18rem' }} className='zoom'>
                    <Card.Img variant="top" src={imageWineChiller}  style={{ width:"250px" , height:"150px"}} className='zoom' />
                    <Card.Body>
                        <Card.Title>Wine Chillers</Card.Title>
                        <Card.Text>
                        A wine refrigerator can be defined
						as a temperature-controlled appliance designed for the storage of
						wine or any other bevarages.
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
                   
            </CardDeck>
            <br></br>

        </Container>
            
        );
    }


}