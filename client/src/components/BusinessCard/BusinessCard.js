import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import styles from './BusinessCard.module.css';

export default ({businesses, onInfoClick}) => {

  const list = 
    businesses.map(business => {
      return (
        <Row className="justify-content-md-center" key={business.id}>
          <Col>
            <Card className={styles.cardContainer}>
              <Card.Img 
                variant="top" 
                src={business.image_url} 
                className={styles.img}/>
                <Card.Body>
                  <Card.Title>{business.name}</Card.Title>
                  <Card.Text>
                    check it on google map: 
                    <Card.Link href={`https://www.google.com/maps/@${business.coordinates.latitude},${business.coordinates.longitude}z`}>
                      here
                    </Card.Link>
                  </Card.Text>
                  <Card.Link href={`tel:${business.phone}`}>Call business</Card.Link>
                  <div>
                    <Button onClick={() => {onInfoClick(business)}}>
                      Info
                    </Button>
                  </div>
                </Card.Body>
            </Card>
            
          </Col>
        </Row>);
    })
  
  return list;
}