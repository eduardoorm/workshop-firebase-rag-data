import { createTask, getTasks } from "../../dataconnect-generated/tasks";

export const createTaskRequest = async (name: string, status: string, description?: string) => {
  const result = await createTask({ name, status, description });
  return result.data;
};

export const getTaskRequest = async () => {
  const result = await getTasks();
  return result.data.tasks;
};
