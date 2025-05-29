

import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    axios.get('http://localhost:5000/books').then((res) => {
      setData(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      axios.delete(`http://localhost:5000/books/${id}`).then(() => {
        setData(data.filter(book => book.id !== id));
      });
    }
  };

  return (
    <div id="boxx" data-aos="fade-in">
      <div className="container">
        <h2 data-aos="fade-up"><b>Book Inventory Management</b></h2>
        <table className="book-table" data-aos="fade-up">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((book, index) => (
              <tr key={book.id} data-aos="fade-right">
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Link to={`/read/${book.id}`} className="btn info">Show</Link>
                  <Link to={`/update/${book.id}`} className="btn edit">Edit</Link>
                  <button onClick={() => handleDelete(book.id)} className="btn delete">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/create" className="btn add" data-aos="fade-up">Add New Book</Link>
      </div>
    </div>
  );
};

export default Home;
