import { Box } from "@mui/material";
import TaskForm from "./TaskForm";
import TasksList from "./TaskList";
const TasksPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 1,
      }}
    >
      <TaskForm />
      <TasksList />
    </Box>
  );
};

export default TasksPage;
