import React from 'react';
import { books, courses, blogs } from './data';

function App() {
  const coursedet = (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.cname}</h2>
          <h3>{course.date}</h3>
        </div>
      ))}
    </div>
  );

  const bookdet = (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  const content = (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <b>{blog.author}</b>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 60 }}>
      <div className="mystyle1">
        <h1>Course Details</h1>
        {coursedet}
      </div>
      <div style={{ borderLeft: '5px solid green', height: '100%' }}></div>
      <div className="st2">
        <h1>Book Details</h1>
        {bookdet}
      </div>
      <div style={{ borderLeft: '5px solid green', height: '100%' }}></div>
      <div className="v1">
        <h1>Blog Details</h1>
        {content}
      </div>
    </div>
  );
}

export default App;
