import React, { useEffect, useState } from 'react'
import { get } from '../../services/HttpClient'

export default function ContactBody({name,email,subject,message,created_at}) {
    
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{subject}</td>
                <td>{message}</td>
                <td>{created_at}</td>                
            </tr>
            
        </tbody>
    )
}
