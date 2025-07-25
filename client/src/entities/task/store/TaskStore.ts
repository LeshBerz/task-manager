import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '@entities/task/model/types';

/**
 * MobX store for task management
 */
class TaskStore {
  tasks: Task[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  createTask(data: Omit<Task, 'id' | 'boardId' | 'userId'>) {
    const task: Task = {
      id: uuidv4(),
      boardId: '1', // Temporary, will be dynamic
      userId: '1', // Temporary, will be from auth
      ...data,
    };
    this.tasks.push(task);
    this.saveToLocalStorage();
  }

  updateTask(id: string, data: Partial<Task>) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      Object.assign(task, data);
      this.saveToLocalStorage();
    }
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.saveToLocalStorage();
  }

  getTask(id: string) {
    return this.tasks.find((t) => t.id === id);
  }

  fetchTasks(boardId: string) {
    return this.tasks.filter((t) => t.boardId === boardId);
  }

  moveTask(taskId: string, toStatus: string) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task && task.status !== toStatus) {
      task.status = toStatus as Task['status'];
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
}

export const taskStore = new TaskStore();
export const useTaskStore = () => taskStore;