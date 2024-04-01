import React, { useState } from 'react'
import '../Examples/examples.scss';
import { IoIosArrowUp } from "react-icons/io";


const employees = [

    {
        "id": "6458e0d7-c78f-45e8-a9b6-2c6baff4cabc",
        "name": "iPhone XR",
        "category": "Cell Phones",
        "brand": "Apple",
        "properties": {
            "color": "Mixed Colors",
            "grade": "C",
            "carrier": "T-Mobile/Sprint",
            "storage": "256GB"
        },
        "price": 976,
        "imgUrl": "https://m.media-amazon.com/images/I/518Cj2o6qsL._AC_SX569_.jpg",
        "source": "DIRECT",
        "updatedAt": "2024-03-19T18:22:47.580Z",
        "createdAt": "2023-12-08T05:06:04.312Z",
        "currency": "USD"
    }
]

function Example() {

    const [inputText, setInputText] = useState("")

    const [phones, setPhones] = useState(null);
    
    function handleConversion (){
        setPhones(JSON.parse(inputText))
        console.log(phones)
    }
    // const userInfo = JSON.parse(inputText);
    // console.log(userInfo.name)


  return (
    <div>
        <div className='My-Textarea'>
            <textarea className='input-textarea' name='name' onChange={ (e) => setInputText(e.target.value)}></textarea>
            <button onClick={ handleConversion }>Submit</button>
        </div>
        
        {phones && <div className='My-Phones'>
                        <div className='My-Phones-Head'>
                            <img src={phones.imgUrl} alt='' width="100%" className='Phone-img' />
                            <p>{phones.name} get</p>
                        </div>
                        <div className='My-Phones-Text'>
                            <div className='Listings'>
                                <p>Listings: 15</p>
                            </div>
                            <div className='Total'>
                                <p>Total Qty: 50,160</p>
                            </div>
                            <div className='Offer'>
                                <button className='Offer-btn'>Offer</button>
                                <IoIosArrowUp className='up-icon' />
                            </div>
                        </div>
                   </div> 
        }
    
    </div>
  )
}

export default Example