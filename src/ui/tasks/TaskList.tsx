import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getTasks } from "../../application/task/getTasks";
import type { Task } from "../../domain";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const result: Task[] = await getTasks();
      setTasks(result);
    };
    loadTasks();
  }, []);
  return (
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
  );
};

export default TaskList;
