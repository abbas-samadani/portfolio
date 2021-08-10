import React from 'react'

export default function SkillsBody({skill,progress,handleCallback}) {
    const pointer = {
        cursor: "pointer"
    } 

    const handleRemove = () =>{
        handleCallback(skill)              
    }  
    return (
        <tbody>
            <tr>
                <td>{skill.name}</td>
                <td>{skill.progress}</td>
                <td><span class="badge badge-success">Edit</span></td>
                <td style={pointer}><span class="badge badge-danger" onClick={handleRemove}>Remove</span></td>                
            </tr>

        </tbody>
    )
}
