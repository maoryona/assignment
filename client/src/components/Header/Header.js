import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import styles from './Header.module.css';

export default ({term, onChangeTerm, search}) => {
  
  return (
    <Row className={[styles.bg,'justify-content-md-center']}>
      <Col md="4">
        <h3 style={{color: "white"}}>NYC Businesses</h3>
      </Col>
      <Col md="8">
        <Container>
          <Col md="4">
            <InputGroup>
              <FormControl
                placeholder="Search for businesses, i.e. Pizza or pasta"
                aria-label="Search for businesses, i.e. Pizza or pasta"
                aria-describedby="basic-addon2"
                value={term}
                onChange={onChangeTerm}
              />
              <InputGroup.Append>
                <Button 
                  variant="outline-secondary"
                  onClick={() => {search()}}>Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Container>
      </Col>
    </Row>
  );
}