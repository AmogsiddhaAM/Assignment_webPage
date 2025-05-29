

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    author: "",
    published_date: "",
    publisher: "",
    overview: "",
    image: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`).then((res) => {
      setValues(res.data);
    });
  }, [id]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setValues({ ...values, image: reader.result }); // base64 image
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/books/${id}`, values).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="container31">
      <div className="container32">
        <div className="container33">
          <h2>Update Book</h2>
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
            <input type="file" accept="image/*" onChange={handleImageUpload} />


            <div className="button-group">
              <button type="submit" className="btn success">Update</button>
              <Link to="/" className="btn back">Back</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
