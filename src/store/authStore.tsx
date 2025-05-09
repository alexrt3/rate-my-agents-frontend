import React from "react";
import { StringLiteral } from "typescript";
import { create } from "zustand";

interface AuthState {
  token: string | null;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    isAgent: boolean;
  } | null;
  setToken: (token: string | null) => void;
  clearToken: () => void;
  setUser: (user: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    isAgent: boolean;
  }) => void;
  clearUser: () => void;
}

export const userAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  setToken: (token) => {
    localStorage.setItem("authToken", token || "");
    set({ token });
  },
  clearToken: () => {
    localStorage.removeItem("authToken");
    set({ token: null });
  },
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
