import Footer from "./ui/Footer";
import Header from "./ui/Header";
import PageTitle from "./ui/PageTitle";
import TaskDetails from "./ui/TaskDetails";
import TasksList from "./ui/TaskList";
import {useTaskSelection} from "./bll/useTaskSelection.tsx";
import styles from './App.module.css'


export function App() {
  const { setBoardId, boardId, taskId, setTaskId } = useTaskSelection();

  const handleTaskSelect = (id: string | null) => {
    setTaskId(id);
  };

  const handleBoardSelect = (id: string | null) => {
    setBoardId(id);
  };

  return (
      <>
        <div>
          <Header />
          <PageTitle />
          <div className={styles.main}>
            <TasksList
              onTaskSelected={handleTaskSelect}
              onBoardId={handleBoardSelect}
              selectedTaskId={taskId}
            />
            <TaskDetails taskId={taskId} boardId={boardId} />
          </div>
          <Footer />
        </div>
      </>
  );
}