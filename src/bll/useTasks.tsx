import {useEffect, useState} from "react";
import {getTasks, type Tasks} from "../dal/api.ts";

export function useTasks() {
    const [tasks, setTasks] = useState<null | Tasks[]>(null);

    useEffect(() => {
        const fetchTasks = async () => {
            const tasksList = await getTasks();
            setTasks(tasksList);
        };
        fetchTasks();
    }, []);

    return {tasks};
}