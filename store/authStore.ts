import { create } from 'zustand';

export type AuthState = {
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
};

type AuthStateSetter = (
  partial: Partial<AuthState> | ((state: AuthState) => Partial<AuthState>)
) => void;

export const useAuthStore = create<AuthState>((set: AuthStateSetter) => ({
  isAuthenticated: false,
  signIn: () => set({ isAuthenticated: true }),
  signOut: () => set({ isAuthenticated: false }),
}));
