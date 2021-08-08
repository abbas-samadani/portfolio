import React from 'react'

export default function SkillsBody({skill,handleCallback}) {
    const pointer = {
        cursor: "pointer"
    } 

    const handleRemove = () =>{
        handleCallback(skill)              
    }  
    return (
        <tbody>
            <tr>
                <td>Php</td>
                <td>90</td>
                <td><span class="badge badge-success">Edit</span></td>
                <td style={pointer}><span class="badge badge-danger" onClick={handleRemove}>Remove</span></td>                
            </tr>

        </tbody>
    )
}
