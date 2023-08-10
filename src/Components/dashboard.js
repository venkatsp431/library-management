import React, { useContext, useEffect } from "react";
import Base from "../Base/base";
import { Button, Container, Table } from "react-bootstrap";
// import { Bookcontext } from "../App";
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deleteBook, selected } from "../Reducers/useReducer";
import { deletedata, getData } from "../Controllerapi/apifunctions";

export default function Dashboard() {
  // const { books, setBooks } = useContext(Bookcontext);
  const { books } = useSelector((state) => state.books.bookInfo);
  console.log(books);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getData());
  // }, [dispatch]);

  function deletebook(id) {
    const values = { id };
    dispatch(deletedata(values));
  }
  function editBook(book) {
    console.log(book);
    dispatch(selected(book));
    navigate("/edit");
  }
  return (
    <Base>
      <Container>
        <div className="buttons">
          <Button variant="primary" onClick={() => navigate("/add")}>
            Add Book
          </Button>
        </div>
        <div className="dashboard">
          <h1 className="display-4">Dashboard</h1>
          <h1>List of Books</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>

                <th>Book Name</th>
                <th>Author Name</th>
                <th>Genre</th>

                <th>Available quantities</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books?.map((bk, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{bk.bookname}</td>
                  <td>{bk.authorname}</td>
                  <td>{bk.genre}</td>

                  <td>{bk.available}</td>
                  <td>
                    <span>
                      <Button variant="secondary" onClick={() => editBook(bk)}>
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => deletebook(bk.id)}
                      >
                        Delete
                      </Button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </Base>
  );
}
