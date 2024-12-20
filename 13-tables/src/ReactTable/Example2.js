// object stored data by using key map method is used

import React from 'react'
import './example1.css'

function Example2() {
    const data=[{
        id:1,name:"Raja",age:25,gender:"male",skill:"ReactJs"
    },{
         id:2,name:"Vikas",age:19,gender:"male",skill:"Java"
    },{
         id:3,name:"Priya",age:28,gender:"female",skill:"Python"
    }] 
    return(
        <div>
            <table border={"1"}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Skills</th>
                </tr>

                {/* key-act as a index */}

                {data.map((val,key)=>{
                    return(
                        <>
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <td>{val.skill}</td>
                            </tr>
                        </>
                    )
                })}


            </table>
        </div>
    )
}

export default Example2