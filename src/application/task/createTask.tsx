import { createTaskRequest } from "../../infraestructure/task/taskApi";

export const createTask = async (name: string, status: string) => {
  await createTaskRequest(name, status);
};
