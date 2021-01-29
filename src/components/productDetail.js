import React, {useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux';
import Header from './header'
import {delivery} from '../assets'


const ProductDetail = (props) => {
    const [selectedColor, setSelectedColor] = useState()
    const [selectedSize, setSelectedSize] = useState()

    const dispatch = useDispatch()
    const data = useSelector((state) => state.shoesDetails.details)
     

    const submit = (data) => {
        const item = {
            size : data.sizes[selectedSize],
            color : data.colors[selectedColor].color_hash,
            name : data.name,
            price : data.price
        }
        dispatch({type: 'ADD_TO_BAG', payload: item})
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    
    const handlerSize = (j) => {
        setSelectedSize(j)
        if(selectedSize === j){
            setSelectedSize()
        }
    }

    const handlerColor = (j) => {
        setSelectedColor(j)
        if(selectedColor === j){
            setSelectedColor()
        }
    }

    return (
        <div>
            <Header />
            <Row style={{padding: '50px 100px 50px 100px'}}>
                <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                    <img alt={data.name} style={{height:  600, width: 500}} src={data.image[0]}/>
                    <Row>
                        <img alt={data.name} style={styles.thumbnail} src={data.image[1]}/>
                        <img alt={data.name} style={styles.thumbnail} src={data.image[2]}/>
                        <img alt={data.name} style={styles.thumbnail} src={data.image[3]}/>
                        <img alt={data.name} style={styles.thumbnail} src={data.image[4]}/>
                    </Row>
                </Col>
                <Col>
                    <p>{data.category}</p>
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                    <button onClick={() => openInNewTab(data.video)}>Play Video</button>
                    <p>Select Size (US)</p>
                    <div style={styles.container}>
                        {data.sizes.map((i,j)=> (
                            <p onClick={()=> handlerSize(j)} style={selectedSize === j ? styles.sizeActive : styles.sizeInactive}>{i}</p>
                        ))}
                     </div>
                     <div style={{ display: 'grid', gridTemplateColumns: '40px 40px 40px 40px 40px',gap:10}}>
                         {data.colors.map((i,j) => (
                             <div 
                             onClick={() => handlerColor(j)}
                             style={selectedColor === j ? {...styles.colorActive ,backgroundColor: `${i.color_hash}`,} : {...styles.colorInactive ,backgroundColor: `${i.color_hash}`,  border:`5px solid ${i.color_hash}`} }></div>
                         ))}
                     </div>
                                          
        
                </Col>
            </Row>
            <Row style={{justifyContent: 'space-between', padding: '0 100px 0 100px', margin: 'auto auto 3% auto', backgroundColor: '#F5F5F5', width: '80%'}}>
                <Row style={{justifyContent: 'center', alignItems: 'center'}}>
                    <img alt='delivery' src={delivery} style={{marginRight: 20, width: 25, height: 25}}/>
                    <p style={{marginTop: 15}}>FREE SHIPPING OVER $100 PURCHASE</p>
                </Row>
                <button onClick={() => submit(data)}>add to bag</button>
            </Row>
        
               
        </div>
    )
}
export default ProductDetail;


const styles = {
    container : {
        display: 'grid',
        gridTemplateColumns: '50px 50px 50px 50px 50px',
        gap: 10,
    
    },
    sizeActive : {
        padding : 10,
        backgroundColor:'#000',
        border: '1px solid #000',
        color:'#fff',
        textAlign: 'center'
    },
    sizeInactive : {
        padding : 10,
        backgroundColor:'#fff',
        border: '1px solid #DCDCDC',
        color:'#000',
        textAlign: 'center' 
    },
    colorActive : {
        width: 40,
         height: 40,
          borderRadius: 100,
          border: '5px solid #555'
    },
    colorInactive : {
        width: 40,
        height: 40,
        borderRadius: 100,
           
    },
    thumbnail: {
        height:  100, 
        width: 100
    }
}