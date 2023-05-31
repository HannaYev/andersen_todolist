import todosReducer from "./slices/todos";

describe("todoSlice", () => {
  test("should return default state when passed an empty action", () => {
    const result = todosReducer(undefined, { type: "" });
    expect(result).toEqual({ allTodos: [], filter: "All" });
  });
});
