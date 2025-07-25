import { makeAutoObservable } from 'mobx';

/**
 * MobX store for theme management
 */
class ThemeStore {
  theme: 'light' | 'dark' = 'light';

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.saveToLocalStorage();
    document.documentElement.classList.toggle('dark');
  }

  saveToLocalStorage() {
    localStorage.setItem('theme', this.theme);
  }

  loadFromLocalStorage() {
    const theme = localStorage.getItem('theme') as 'light' | 'dark';
    if (theme) {
      this.theme = theme;
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }
  }
}

export const themeStore = new ThemeStore();
export const useThemeStore = () => themeStore;