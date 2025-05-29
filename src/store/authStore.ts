import { create } from 'zustand';
import { UserData } from '@/Interface/user';


interface AuthStoreState {
  isAuthenticated: boolean;
  user: UserData | null;
  token: string;
  login: (isAuthenticated: boolean, user: UserData, token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStoreState>((set) => ({
  isAuthenticated: false,
  user: null,
  token: "",
  login: (isAuthenticated: boolean, user: UserData, token: string) => set(() => ({ isAuthenticated: isAuthenticated, user: user, token: token })),
  logout: () => set({ isAuthenticated: false, user: null, token: "" }),
}));

export default useAuthStore;