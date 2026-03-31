import { createTask } from "../../application/task/createTask";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { getTasks } from "../../application/task/getTasks";
import { type Task } from "../../domain";

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const taskInput = (e.target as HTMLFormElement).task.value;
    await createTask(taskInput, "pending");
  };

  useEffect(() => {
    const loadTasks = async () => {
      const result: Task[] = await getTasks();
      setTasks(result);
    };
    loadTasks();
  }, []);
  return (
    <>
      <Box
        sx={{
          margin: "20px auto",
          border: "1px solid #ccc",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "2rem", marginBottom: "10px" }}
        >
          Firebase Data Connect
        </Typography>

        <Typography variant="body1">
          Es un servicio de Firebase que te permite trabajar con bases de datos
          SQL usando un enfoque moderno basado en GraphQL.
        </Typography>

        <SyntaxHighlighter language="graphql">
          {`
            PASO 1:
            type Task @table {
            id: UUID! @default(uuid())
            title: String!
            completed: Boolean! @default(false)
            }

            PASO 2:
            query GetTasks {
            tasks {
                id
                title
                completed
            }

            PASO 3:
            mutation AddTask($title: String!) {
            insertTask(data: { title: $title }) {
                id
                title
            }
            }
          `}
        </SyntaxHighlighter>
      </Box>

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

      <Box
        sx={{
          margin: "20px auto",
          border: "1px solid #ccc",
          padding: "20px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "1.5rem", marginBottom: "10px" }}
        >
          Tasks List
          {tasks?.map((task) => (
            <Typography key={task.id} variant="body1">
              {task.name} - {task.status}
            </Typography>
          ))}
        </Typography>
      </Box>
    </>
  );
};

export default HomePage;
