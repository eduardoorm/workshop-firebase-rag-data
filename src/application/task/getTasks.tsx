import { getTaskRequest } from "../../infraestructure/task/taskApi";

export const getTasks = async () => {
  return await getTaskRequest();
};
