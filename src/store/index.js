import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showMenu: false,
	darkMode: localStorage.getItem("darkMode") === "false" ? false : true,
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggleMenu(state) {
			if (state.showMenu) {
				state.showMenu = false;
			} else {
				state.showMenu = true;
			}
		},
		toggleDarkMode(state) {
			if (state.darkMode) {
				localStorage.setItem("darkMode", false);
				state.darkMode = false;
			} else {
				localStorage.setItem("darkMode", true);
				state.darkMode = true;
			}
		},
	},
});

export const uiAction = uiSlice.actions;

export const store = configureStore({ reducer: uiSlice.reducer });
