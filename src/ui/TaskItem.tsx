import type { Tasks } from "../dal/api.ts";
import styles from "./TaskItem.module.css";
import clsx from "clsx";

const priorityColors: Record<number, string> = {
  0: "#ffffff",
  1: "#ffd7b5",
  2: "#ffb38a",
  3: "#ff9248",
  4: "#ff6700",
};

type Props = {
  task: Tasks;
  onSelect: (taskId: string, boardId: string) => void;
  isSelected: boolean;
};

const TaskItem = ({ task, onSelect, isSelected }: Props) => {
  const handleClick = () => {
    onSelect(task.id, task.attributes.boardId);
  };
  const isCompleted = Boolean(task.attributes.status);

  const className = clsx({
    [styles.task]: true,
    [styles.selected]: isSelected,
  });

  const titleClassName = clsx({
  [styles.completed] : isCompleted
  })

  return (
    <div
      className={className}
      style={{
        backgroundColor: priorityColors[task.attributes.priority],
      }}
      onClick={handleClick}
    >
      <div
        className={titleClassName}
      >
        Заголовок {task.attributes.title}
      </div>
      <span>
        Статус:
        <input type="checkbox" defaultChecked={isCompleted} />
      </span>
      <p>
        Дата создания задачи:
        {new Date(task.attributes.addedAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default TaskItem;
