import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const TodoComponent = () => {
  const [formData, setformData] = useState({ title: "", summary: "", id: "" });
  const [todoData, setTodoData] = useState([]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setformData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    if (formData.title !== "" && formData.summary !== "") {
      if (formData.id) {
        // Update existing task
        setTodoData((prevTodo) => {
          const updatedTodoData = prevTodo.map((task) => {
            if (task.id === formData.id) {
              return { ...task, ...formData };
            }
            return task;
          });
          return updatedTodoData;
        });
      } else {
        // Create new task
        const newTask = { ...formData, id: uuidv4() };
        setTodoData((prevTodo) => [...prevTodo, newTask]);
      }

      setformData({ title: "", summary: "", id: "" });
    } else {
      // Handle form input validation error
      console.error("Title and summary fields cannot be empty.");
    }
  };

  const handleEdit = (value) => {
    const foundTask = todoData.find((task) => task.id === value.id);

    if (foundTask) {
      setformData({
        title: foundTask.title,
        summary: foundTask.summary,
        id: foundTask.id,
      });
    }
  };

  const handleDelete = (value) => {
    setTodoData((prevTodo) => {
      const updatedTodoData = prevTodo.filter((task) => task.id !== value.id);
      return updatedTodoData;
    });
  };

  return (
    <Container>
      <h2>To-do with State</h2>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formGrouptitle">
              <Form.Label>Title *</Form.Label>
              <Form.Control
                type="text"
                value={formData.title}
                name="title"
                placeholder="Enter title...."
                onChange={handleFormChange}
                required
                aria-label="Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupSummary">
              <Form.Label>Summary *</Form.Label>
              <Form.Control
                type="text"
                value={formData.summary}
                name="summary"
                placeholder="Enter summary...."
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupButton">
              <Button onClick={handleAddTask}>Create task</Button>
            </Form.Group>
          </Form>

          <hr />

          {todoData.length !== 0 ? (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid lightgrey",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "#000",
                  color: "white",
                  marginBottom: "10px",
                }}
              >
                <div>Id </div>
                <div>Titile </div>
                <div>Summary </div>
                <div>Actions</div>
              </div>

              {todoData &&
                todoData.map((item, index) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      border: "1px solid lightgrey",
                      padding: "10px",
                      borderRadius: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div> {index}</div>
                    <div> {item.title}</div>
                    <div> {item.summary}</div>
                    <div>
                      <Button onClick={() => handleEdit(item)}>Edit</Button>{" "}
                      <Button onClick={() => handleDelete(item)}>Delete</Button>{" "}
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <>
              {" "}
              <Alert variant="info">Currently, you have no tasks added.</Alert>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TodoComponent;
