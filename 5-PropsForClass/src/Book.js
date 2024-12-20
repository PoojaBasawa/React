import React from 'react'

class Book extends React.Component{
    render(){
        return(
            <>
                <BookList name="React" Author="Jorden walkie"/>
                <BookList name="Java" Author="James"/>
                <BookList name="HTML" Author="Tims Burners Lee"/>
            </>
        )
    }

}

export default Book