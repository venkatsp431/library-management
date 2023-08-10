import React, { useContext, useState } from "react";
// import { Bookcontext } from "../App";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { Form, Button, Container } from "react-bootstrap";
import Base from "../Base/base";
import { object, string, number } from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Reducers/useReducer";
import { addata } from "../Controllerapi/apifunctions";

// const fieldValidationSchema = yup.object({
//   authorname: yup.string().required("Please Specify Author name"),
//   available: yup.number().required("Please Specify Available Books"),
//   bookname: yup.string().required("Please Specify Book name"),
//   department: yup.string().required("Please Specify division of book"),
//   genre: yup.string().required("Please Specify genre of the book"),
//   id: yup.number().integer().required(),
// });

export default function Addbook() {
  const navigate = useNavigate();
  // const { books, setBooks } = useContext(Bookcontext);
  const dispatch = useDispatch();

  // const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
  //   useFormik({
  //     initialValues: {
  //       authorname: "",
  //       available: "",
  //       bookname: "",
  //       department: "",
  //       genre: "",
  //     },
  //     validationSchema: fieldValidationSchema,
  //     onSubmit: (newStudentData) => {
  //       console.log("onsubmit", newStudentData);
  //       addBook(newStudentData);
  //     },
  //   });

  const [authorname, setAuthorname] = useState("");
  const [available, setAvailable] = useState("");
  const [bookname, setBookname] = useState("");
  const [department, setDepartment] = useState("");
  const [genre, setGenre] = useState("");
  const [id, setId] = useState("");

  const handleChange = () => {};

  const addBook = async (e) => {
    e.preventDefault();
    console.log("hi");
    const values = { authorname, available, bookname, department, genre, id };
    // try {
    //   const res = await fetch(
    //     "https://6450da28a32219691153675b.mockapi.io/users/",
    //     {
    //       method: "POST",
    //       body: JSON.stringify(values),
    //       headers: {
    //         "Content-ype": "application/json",
    //       },
    //     }
    //   );
    //   if (res.ok) {
    //     const res1 = await res.json();

    //     console.log(res1);

    dispatch(addata(values));
    navigate("/");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    // Handle the submission logic here, such as adding the book to the context or API
  };

  return (
    <Base>
      <Container>
        {/* <Formik
          initialValues={initialValues}
          validationSchema={fieldValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, values, errors }) => ( */}
        <h1 className="display-4">Add new</h1>
        <form onSubmit={addBook}>
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

          <Form.Group controlId="department">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department"
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            {/* {errors.department && (
              <div className="text-danger">{errors.department}</div>
            )} */}
          </Form.Group>

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
        {/* )} */}
        {/* </Formik> */}
      </Container>
    </Base>
  );
}
