import * as React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { fireEvent } from "@testing-library/react";
import Users from "../components/Users";

let users = [
	{ id: 1, name: "abc" },
	{ id: 2, name: "ass" },
	{ id: 3, name: "ayh" },
	{ id: 4, name: "atr" },
	{ id: 5, name: "auu" },
	{ id: 6, name: "aio" },
],
	container: any = null,
	store: any = null;

const mockStore = configureStore([]);

beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
	store = mockStore({ users: users });
	store.dispatch = jest.fn();
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
	store = null;
});

test("Renders Users component correctly", () => {

	act(() => {
		render(
			<Provider store={store} >
				<Users />
			</Provider>,
			container);
	});

	// when component is mount, fetch users action is dispatched
	expect(store.dispatch).toHaveBeenCalledWith({ payload: "https://jsonplaceholder.typicode.com/users", type: "FETCH_USERS" });

	// title rendered
	expect(container.querySelector("h2").textContent).toBe("Users - albums - photos");

	// all 6 users plus the option title are rendered
	expect(container.querySelector("select").length).toBe(7);

	// simulate to select the user whose id is "3"
	act(() => {
		fireEvent.change(container.querySelector("select"), { bubbles: true, target: { value: "3" } });
	});
	// the correct actions are dispatched
	expect(store.dispatch.mock.calls[1][0]).toEqual({ payload: "3", type: "SELECT_USERID" });
	expect(store.dispatch.mock.calls[2][0]).toEqual({ payload: { id: "", title: "" }, type: "SELECT_ALBUM" });
	expect(store.dispatch.mock.calls[3][0]).toEqual({ payload: [], type: "SET_ALBUMS" });
	expect(store.dispatch.mock.calls[4][0]).toEqual({ payload: [], type: "SET_PHOTOS" });

});

