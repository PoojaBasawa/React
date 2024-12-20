import React from "react"
import ChildComponent from "./ChildComponent"

function ParentComponent(){
    let company="wipro"
    let expyear="3 year"
    return(
        <>
            {/* passed attributes values name="sachin". Stored in props */}
            
            <ChildComponent name="Sachin" age="27" city="Mysore" com={company} exp={expyear}/>
            <ChildComponent name="Virat" age="36" city="Mumbai" com={company} exp={expyear}/>

            {/* stored props={name:"Sachin", age:"27"} as "keypairs" - passed to child as a "parameter" */}

        </>
    )
}

export default ParentComponent