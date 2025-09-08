import { create } from "zustand"

 type ThemeState={
    theme: boolean;
    togleTheme:()=>void;

}

export const useThemeStore=create<ThemeState>((set)=>({
    theme:true,
    togleTheme:()=>set((state)=>({theme:!state.theme}))
}))