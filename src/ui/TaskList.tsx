import TaskItem from "./TaskItem";
import { useTasks } from "../bll/useTasks.tsx";
import styles from "./TaskList.module.css";

type Props = {
  onTaskSelected: (id: string | null) => void;
  onBoardId: (id: string | null) => void;
  selectedTaskId: string | null;
};

const TasksList = ({ onTaskSelected, onBoardId, selectedTaskId }: Props) => {
  const { tasks } = useTasks();

  if (tasks === null) {
    return <p>Загрузка...</p>;
  }

  if (tasks.length === 0) {
    return <p>Задачи отсутствуют</p>;
  }

  const handleResetClick = () => {
    onTaskSelected(null);
    onBoardId(null);
  };

  const handleSelect = (taskId: string, boardId: string) => {
    onTaskSelected(taskId);
    onBoardId(boardId);
  };

  return (
    <>
      <div>
        <button className={styles.button} onClick={handleResetClick}>
          Reset
        </button>
        <hr />
        <ul className="tasks">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              isSelected={task.id === selectedTaskId}
              onSelect={handleSelect}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TasksList;
