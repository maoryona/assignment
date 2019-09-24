import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import BusinessCards from './components/BusinessCard/BusinessCard';
import BusinessDetails from './components/BusinessDetails/BusinessDetails';
import Header from './components/Header/Header';
import yelp from './services/yelp/yelpAPI';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

function App() {  
  const [businesses, setBusinesses] = useState([]);
  const [term, setTerm] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [businessDetails, setbusinessDetails] = useState({});

  useEffect(()=> {
    fetchBusinesses('pasta');
  }, []);

  const fetchBusinesses = async (term) => {
    try {
      const res = await yelp.get('', {
        params: {
          limit: 50,
          location: 'san jose',
          term,
        }
      });
      setBusinesses(res.data.businesses);
    } catch (error) {
      console.log(error);
    }

  }
  const fetchBusinessDetails = async (id) => {
    const res = await yelp.get(`/${id}`);
    setbusinessDetails(res.data);
    

  }

  const onTermChange = (event) => {
    setTerm(event.target.value);
  }

  const onSearchClick = () => {
    fetchBusinesses(term);
  }

  const onBusinessInfoClick = async (details) => {
    try {
      await fetchBusinessDetails(details.id);
      setModalShow(true);
    } catch (error) {
      console.log(error);
    }
    
  }


  return (
    <div className="page">
      <Header term={term} onChangeTerm={onTermChange} search={onSearchClick}/>
      <Container>
        <BusinessCards businesses={businesses} onInfoClick={onBusinessInfoClick}/>
      </Container>
      <BusinessDetails
        details={businessDetails}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
