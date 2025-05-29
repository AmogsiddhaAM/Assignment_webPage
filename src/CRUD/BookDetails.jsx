

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Read = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`).then((res) => {
      setBook(res.data);
    });
  }, []);

  return (
    <div className="box9" data-aos="fade-in">
      <div className="container1" data-aos="zoom-in">
        <div className="container2" data-aos="fade-up">
          <h2>Title: {book.title}</h2>

         
          {book.image && (
            <div style={{ margin: '20px 0' }}>
              <img
                src={book.image}
                alt={book.title}
                style={{ width: '200px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
              />
            </div>
          )}

          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Published Date:</strong> {book.published_date}</p>
          <p><strong>Publisher:</strong> {book.publisher}</p>
          <p><strong>Overview:</strong> {book.overview}</p>

          <div className="btn-group">
            <Link to="/" className="btn back">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
