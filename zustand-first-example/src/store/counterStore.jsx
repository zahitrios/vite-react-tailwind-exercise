import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const defaultState = {
	count: 1,
	title: "Some title",
	posts: [],
};

const initialState =
	JSON.parse(localStorage.getItem("counterStore")) || defaultState;

export const useCounterStore = create(
	persist(
		(set, get) => ({
			...initialState,
			increment: value => set(() => ({ count: get().count + value })),
			reset: () => set(defaultState),
			getPosts: async () => {
				const posts = await (
					await fetch("https://jsonplaceholder.typicode.com/posts")
				).json();
				set(() => ({ posts }));
			},
		}),
		{
			name: "counterStore",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
