import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default (props) => {
  const {details} = props;
  const {photos} = details;

  const getPriceCategory = (price) => {
    switch (price) {
      case '$':
        return 'Cheap';
      case '$$':
        return 'Fair';
      case '$$$':
        return 'Expensive';
      case '$$$$':
        return 'Over expensive';
      default:
        return 'Unkonwn';;
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {details.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          {photos ? photos.map(img => <img key={img} src={img} width="150" style={{margin: [10, 10]}} alt="img"/>) : null}
        </div>
        <p>
          phone: {details.display_phone}
        </p>
        <p>
          price: {getPriceCategory(details.price)}
        </p>
        <p>
          rating: {details.rating} out of 5
        </p>
        <p>
          reviews: {details.review_count} reviews
        </p>
        <p>
          go to business page: <a href={details.url} target="_blank" rel="noopener noreferrer">here</a>
        </p>
        <div>
          <Button onClick={props.onHide}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}