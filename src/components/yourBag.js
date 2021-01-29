import React, {useState} from 'react';
import Header from './header'
import {useSelector, useDispatch} from 'react-redux'
import { bag} from '../assets'

const YourBag = () => {
    const data = useSelector((state)=> state.shoppingBag.shoppingList)

    const listRows = [
        {
            title : 'PRODUCT'
        },
        {
            title : 'PRICE'
        },
        {
            title : 'QUANTITY'
        },
        {
            title : 'TOTAL'
        },
    ]

    return (
        <div>
            <Header/>
            <h1 style={{textAlign:'center'}}>Your Bag</h1>
            <div style={{display:'grid', gridTemplateColumns: '40vw 15vw 15vw 15vw', gap:20, margin:'auto'}}>
                {listRows.map((item, index) => (
                   <p>{item.title}</p>
                ))}
            </div>
        </div>
    )
}
export default YourBag;
