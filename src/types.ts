
type Priority = "High" | "Medium" | "Low";

export type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  priority?: Priority;
};
