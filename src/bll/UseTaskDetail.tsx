import {useEffect, useState} from "react";
import {getTask, type TaskDetailsData} from "../dal/api.ts";

export function useTaskDetail(taskId: string | null, boardId: string | null) {
    const [selectedTask, setSelectedTask] = useState<null | TaskDetailsData>(
        null,
    );

    useEffect(() => {
        if (!taskId || !boardId) {
            setSelectedTask(null);
            return;
        }

        const fetchDetail = async () => {
            const task = await getTask(boardId, taskId);
            setSelectedTask(task);
        };
        fetchDetail();
    }, [taskId, boardId]);

    return {selectedTask, boardId};
}