import React, { useState } from 'react'
import moment from 'moment'
import { post } from '../../services/HttpClient';
import { useHistory } from "react-router-dom";
export default function PortfolioBody({portfolio , handleCallback}) {

    const imageSize = {        
        width: "60px",
        width: "60px",
      };

    const pointer = {
        cursor: "pointer"
    }  

    const handleRemove = () =>{
        handleCallback(portfolio)              
    }  

    const data = moment(portfolio.created_at).format('MMMM Do YYYY');
    return (
        <tbody>
            <tr>
                <td>{portfolio.name}</td>
                <td>{portfolio.description}</td>
                <td><img src={portfolio.image} style={imageSize}/></td>
                <td>{portfolio.github}</td>
                <td>{portfolio.link}</td>
                <td>{data}</td>
                <td><span class="badge badge-success">Edit</span></td>
                <td style={pointer}><span class="badge badge-danger" onClick={handleRemove}>Remove</span></td>
            </tr>
            
        </tbody>
    )
}
