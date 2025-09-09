import {create} from 'zustand';
type Task={
    id: string;
    taskName:string;
    completed: boolean;
}
type TaskState={
    taskList: Task[];
    addTask:(taskName:string)=>void;
    deleteTask:(id:string)=>void;
    toggleTask:(id:string)=>void;
}
export const useTaskStore= create<TaskState>((set)=>({
    taskList:[],
     addTask: (taskName) =>
    set((state) => ({
      taskList: [
        ...state.taskList, 
        { id: crypto.randomUUID(), taskName, completed: false },
      ],
    })),
    deleteTask:(id)=>set((state)=> ({
        taskList: state.taskList.filter((task)=> task.id !== id)
    })),
    toggleTask:(id)=> set((state)=>({
        taskList: state.taskList.map((task)=> task.id === id ? 
        {...task, completed:!task.completed}: task)
    }))
}))
