import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Card, Row, Col} from 'react-bootstrap'
import {Link} from "react-router-dom";
import Header from './header'
 

const ProductListing = () => {
    const [data] = useState()
    const shoes = useSelector((state) => state.shoesList.shoesData)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'GET_SHOES'})
    }, [data]);

    const clickHandle = (i) => {
        dispatch({type: 'GET_SHOES_DETAILS', payload: i})
    }

    return (
        <div>
            <Header />
            <h1 style={{textAlign: 'center', margin: 50, fontWeight: 'bold'}}>New Release</h1>
            <div style={styles.container}>
                {shoes.map((item, index) => (
                    <Link 
                    to='/detail' 
                    onClick={() => clickHandle(item)}>
                        <Card border='light' style={{ width: '18rem', color: '#111111'}} key={index}>
                            <Card.Img variant="top" src={item.image[0]} />
                            <Card.Body>
                            <Col>
                                <Row style={{justifyContent: 'space-between'}}>
                                    <Card.Title>{item.name.toUpperCase()}</Card.Title>
                                    <Card.Text>${item.price}</Card.Text>
                                </Row>
                                <Row style={{flex: 1}}>
                                    <Card.Text>{item.category}</Card.Text>
                                </Row>
                            </Col>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default ProductListing;

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 295px)',
        gap: 20,
        marginBottom: 80,
        justifyContent: 'center'
    },
    image: {
        width: '100%'
    }
}