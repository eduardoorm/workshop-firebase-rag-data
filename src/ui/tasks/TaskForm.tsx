import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { createTask } from "../../application/task/createTask";

const TaskForm = () => {
  const handleAddTask = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const taskInput = (e.target as HTMLFormElement).task.value;
    await createTask(taskInput, "pending");
  };

  return (
    <Box
      component="form"
      sx={{
        margin: "20px auto",
        border: "1px solid #ccc",
        padding: "20px",
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      onSubmit={handleAddTask}
    >
      <TextField
        id="task"
        label="Task"
        aria-describedby="Enter your task"
        fullWidth
      />
      <Button type="submit" color="primary" variant="contained">
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
