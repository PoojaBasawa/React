import React from 'react'
import './example1.css'

function Example3() {
    const data=[{
        SNo:"1", EmployeeName:"Suhas",EmployeeAge:"23",EmployeePlace:"Shivamogga",EmployeeId:"100", EmployeeDepartment:"Dev"
    },{
         SNo:"2", EmployeeName:"Prema",EmployeeAge:"56",EmployeePlace:"Mumbai",EmployeeId:"80", EmployeeDepartment:"HR"
    },{
        SNo:"3", EmployeeName:"Keerti",EmployeeAge:"33",EmployeePlace:"Bangalore",EmployeeId:"22", EmployeeDepartment:"Marketing"
    },{
        SNo:"4", EmployeeName:"Suraj",EmployeeAge:"52",EmployeePlace:"Delhi",EmployeeId:"44", EmployeeDepartment:"Finance"
    },{
        SNo:"5", EmployeeName:"Priya",EmployeeAge:"26",EmployeePlace:"Puna",EmployeeId:"23", EmployeeDepartment:"Operations"
    },{
        SNo:"6", EmployeeName:"Neha",EmployeeAge:"29",EmployeePlace:"Hyderabad",EmployeeId:"99", EmployeeDepartment:"Sales"
    },{
        SNo:"7", EmployeeName:"Sonam",EmployeeAge:"44",EmployeePlace:"Chennai",EmployeeId:"33", EmployeeDepartment:"Dev"
    },{
        SNo:"9", EmployeeName:"Nikhil",EmployeeAge:"56",EmployeePlace:"Kolkata",EmployeeId:"55", EmployeeDepartment:"Support"
    },{
        SNo:"10", EmployeeName:"Ganesh",EmployeeAge:"53",EmployeePlace:"Ahmedabad",EmployeeId:"77", EmployeeDepartment:"HR"
    },{
       SNo:"11", EmployeeName:"Pooja",EmployeeAge:"29",EmployeePlace:"Mysore",EmployeeId:"33", EmployeeDepartment:"Design" 
    }] 
    return(
        <div>
            <table border={"1"}>
            <caption>Employee Details</caption>
                <tr>
                    <th>SNo</th>
                    <th>EmployeeName</th>
                    <th>EmployeeAge</th>
                    <th>EmployeePlace</th>
                    <th>EmployeeId</th>
                    <th>EmployeeDepartment</th>
                </tr>

                {/* key-act as a index */}

                {data.map((val,key)=>{
                    return(
                        <>
                            <tr key={key}>
                                <td>{val.SNo}</td>
                                <td>{val.EmployeeName}</td>
                                <td>{val.EmployeeAge}</td>
                                <td>{val.EmployeePlace}</td>
                                <td>{val.EmployeeId}</td>
                                <td>{val.EmployeeDepartment}</td>
                            </tr>
                        </>
                    )
                })}

            </table>
        </div>
    )
}

export default Example3 