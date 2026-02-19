export type TaskDetailsData = {
  id: string;
  type: string;
  attributes: {
    title: string;
    description: string | null;
    boardTitle: string;
  };
};

type TaskDetailOutput = {
  data: TaskDetailsData;
};

export type Tasks = {
  id: string;
  type: string;
  attributes: {
    title: string;
    boardId: string;
    status: number;
    priority: number;
    addedAt: string;
    attachmentsCount: number;
  };
};

type TasksOutput = {
  data: Tasks[];
};

export const getTask = async (boardId: string, taskId: string) => {
  const response = await fetch(
    `https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`,
    {
      headers: {
        "api-key": "cd266862-5c14-4c59-948c-1ee16a30366a",
      },
    },
  );
  const json: TaskDetailOutput = await response.json();
  return json.data;
};

export const getTasks = async () => {
  const response = await fetch(
    "https://trelly.it-incubator.app/api/1.0/boards/tasks",
    {
      headers: {
        "api-key": "cd266862-5c14-4c59-948c-1ee16a30366a",
      },
    },
  );
  const json: TasksOutput = await response.json();
  return json.data;
};
