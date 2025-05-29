
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    author: "",
    published_date: "",
    publisher: "",
    overview: "",
    image: ""
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setValues({ ...values, image: reader.result }); // base64 encoded image
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/books', values).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="box10">
      <div className="container11">
        <div className="container22">
          <h2>Add New Book</h2>
          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
              type="text"
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              required
            />

            <label>Author:</label>
            <input
              type="text"
              value={values.author}
              onChange={(e) => setValues({ ...values, author: e.target.value })}
              required
            />

            <label>Published Date:</label>
            <input
              type="date"
              value={values.published_date}
              onChange={(e) => setValues({ ...values, published_date: e.target.value })}
              required
            />

            <label>Publisher:</label>
            <input
              type="text"
              value={values.publisher}
              onChange={(e) => setValues({ ...values, publisher: e.target.value })}
              required
            />

            <label>Overview:</label>
            <textarea
              value={values.overview}
              onChange={(e) => setValues({ ...values, overview: e.target.value })}
              required
            />

            <label>Upload Book Image:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} required />


            <div className="button-group">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/" className="btn back">Back</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="submit" className="btn success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
