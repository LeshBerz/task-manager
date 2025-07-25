import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { Board } from '@entities/board/model/types';

/**
 * MobX store for board management
 */
class BoardStore {
  boards: Board[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  createBoard(name: string) {
    const board: Board = {
      id: uuidv4(),
      name,
      userId: '1', // Temporary, will be from auth
    };
    this.boards.push(board);
    this.saveToLocalStorage();
  }

  deleteBoard(id: string) {
    this.boards = this.boards.filter((b) => b.id !== id);
    this.saveToLocalStorage();
  }

  getBoard(id: string) {
    return this.boards.find((b) => b.id === id);
  }

  fetchBoards() {
    return this.boards;
  }

  saveToLocalStorage() {
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

  loadFromLocalStorage() {
    const boards = localStorage.getItem('boards');
    if (boards) {
      this.boards = JSON.parse(boards);
    }
  }
}

export const boardStore = new BoardStore();
export const useBoardStore = () => boardStore;