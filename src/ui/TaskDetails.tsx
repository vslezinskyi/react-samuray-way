import {useTaskDetail} from "../bll/UseTaskDetail.tsx";
import styles from "./TaskDetails.module.css"

type Props = {
  taskId: string | null;
  boardId: string | null;
};

const TaskDetails = ({ taskId, boardId }: Props) => {
  const { selectedTask } = useTaskDetail(taskId, boardId);

  return (
    <>
      <div className={styles.taskDetails}>
        <h3>TaskDetails</h3>
        {!selectedTask && taskId && "Loading..."}
        {!selectedTask && !taskId && "Task is not selected"}
        {selectedTask && (
          <div>
            <ul>
              <li>{selectedTask.attributes.title}</li>
              <li>{selectedTask.attributes.boardTitle}</li>
              <li>{selectedTask.attributes.description ?? "No description"}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskDetails;
