import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Base from "../Base/base";
import { Button, Container, Form } from "react-bootstrap";
import { editBook } from "../Reducers/useReducer";
import { useNavigate } from "react-router-dom";
import { editata } from "../Controllerapi/apifunctions";

// import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

export default function Editbook() {
  const { selectedObj } = useSelector((state) => state.books.bookInfo);
  console.log(selectedObj);
  const navigate = useNavigate();
  const [authorname, setAuthorname] = useState("");
  const [available, setAvailable] = useState("");
  const [bookname, setBookname] = useState("");
  const [department, setDepartment] = useState("");
  const [genre, setGenre] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setAuthorname(selectedObj.authorname);
    setAvailable(selectedObj.available);
    setBookname(selectedObj.bookname);
    setGenre(selectedObj.genre);
    setId(selectedObj.id);
  }, [selectedObj]);
  const editBooks = async (e) => {
    e.preventDefault();
    const values = { authorname, available, bookname, genre, id };
    dispatch(editata(values));
    navigate("/");
  };
  return (
    <Base>
      <Container>
        <h1 className="display-4">Edit {selectedObj.bookname}</h1>
        <form onSubmit={(e) => editBooks(e)}>
          <Form.Group controlId="bookname">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book name"
              name="bookname"
              value={bookname}
              onChange={(e) => setBookname(e.target.value)}
            />
            {/* {errors.bookname && (
              <div className="text-danger">{errors.bookname}</div>
            )} */}
          </Form.Group>
          <Form.Group controlId="authorname">
            <Form.Label>Author Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author name"
              name="authorname"
              value={authorname}
              onChange={(e) => setAuthorname(e.target.value)}
            />
            {/* {errors.authorname && (
              <div className="text-danger">{errors.authorname}</div>
            )} */}
          </Form.Group>

          <Form.Group controlId="available">
            <Form.Label>Available Books</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter available books"
              name="available"
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
            />
            {/* {errors.available && (
              <div className="text-danger">{errors.available}</div>
            )} */}
          </Form.Group>

          {/* Add similar Form.Group components for other fields */}

          {/* <Form.Group controlId="department">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department"
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            /> */}
          {/* {errors.department && (
              <div className="text-danger">{errors.department}</div>
            )} */}
          {/* </Form.Group> */}

          <Form.Group controlId="genre">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter genre"
              name="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            {/* {errors.genre && <div className="text-danger">{errors.genre}</div>} */}
          </Form.Group>

          <Button variant="primary" className="mt-3" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </Base>
  );
}
