import React from 'react'
import Book from './Props/Book'
import BookList from './Props/BookList'
import ChildComponent from './Props/ChildComponent'
import ParentComponent from './Props/ParentComponent'

function App() {
  return (
    <div>
      <Book/>
      <br/>
      <BookList/>
      <br/>
      <ChildComponent/>
      <br/>
      <ParentComponent/>
    </div>
  )
}

export default App
