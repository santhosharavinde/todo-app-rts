import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("should render input field and button", () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Tasks:" });
    const button = screen.getByRole("button", { name: "Add" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

test("should add task to the list when add button is clicked", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByRole("textbox", { name: "Add Tasks:" });
  const button = screen.getByRole("button", { name: "Add" });

  await user.type(input, "New Task");
  await user.click(button);

  await waitFor(() => {
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });
});

test("should clear the input field after adding a task", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByRole("textbox", { name: "Add Tasks:" });
  const button = screen.getByRole("button", { name: "Add" });

  await user.type(input, "New Task");
  await user.click(button);

  await waitFor(() => {
    expect(input).toHaveValue("");
  });
});

test("should not add an empty task", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByRole("textbox", { name: "Add Tasks:" });
  const button = screen.getByRole("button", { name: "Add" });

  await user.type(input, " ");
  await user.click(button);

  await waitFor(() => {
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});

test("should add task by pressing the enter key", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByRole("textbox", { name: "Add Tasks:" });

  await user.type(input, "New Task{enter}");

  await waitFor(() => {
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });
});
