import type { Task } from "@/types/task";
export const today = new Date().toISOString().slice(0, 10);

const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

export const tasks: Task[] = [
  {
    id: "1",
    title: "Review Q4 product roadmap",
    description:
      "Go through the updated roadmap and leave comments on key milestones",
    completed: false,
    priority: "URGENT",
    dueDate: today,
    listId: "work",
    tags: ["roadmap", "strategy"],
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    subtasks: [
      { id: "1a", title: "Read current roadmap doc", completed: true },
      { id: "1b", title: "Schedule review meeting", completed: false },
      { id: "1c", title: "Prepare feedback notes", completed: false },
    ],
  },
  {
    id: "2",
    title: "Send design proposals to client",
    description:
      "Package up the three design variants and email to client contact",
    completed: false,
    priority: "HIGH",
    dueDate: today,
    listId: "work",
    tags: ["design", "client"],
    createdAt: new Date(Date.now() - 7200000).toISOString(),
    subtasks: [],
  },
  {
    id: "3",
    title: "Set up team standup call",
    description: "Create recurring calendar invite for daily standups",
    completed: false,
    priority: "MEDIUM",
    dueDate: tomorrow,
    listId: "work",
    tags: ["meetings"],
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    subtasks: [
      {
        id: "3a",
        title: "Pick a time that works for everyone",
        completed: false,
      },
      { id: "3b", title: "Create Zoom link", completed: false },
    ],
  },
  {
    id: "4",
    title: "Prepare sprint retrospective notes",
    description: null,
    completed: true,
    priority: "MEDIUM",
    dueDate: yesterday,
    listId: "work",
    tags: ["agile"],
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    subtasks: [],
  },
  {
    id: "5",
    title: "Book dentist appointment",
    description: "Call Dr. Miller's office and schedule for next month",
    completed: false,
    priority: "LOW",
    dueDate: nextWeek,
    listId: "personal",
    tags: ["health"],
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    subtasks: [],
  },
  {
    id: "6",
    title: "Renew gym membership",
    description: null,
    completed: false,
    priority: "LOW",
    dueDate: nextWeek,
    listId: "personal",
    tags: ["health", "fitness"],
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    subtasks: [],
  },
  {
    id: "7",
    title: "Buy groceries for the week",
    description: "Vegetables, fruits, dairy and protein sources",
    completed: false,
    priority: "MEDIUM",
    dueDate: today,
    listId: "shopping",
    tags: ["food"],
    createdAt: new Date(Date.now() - 3600000 * 10).toISOString(),
    subtasks: [
      { id: "7a", title: "Spinach & kale", completed: true },
      { id: "7b", title: "Chicken breast", completed: false },
      { id: "7c", title: "Greek yogurt", completed: false },
      { id: "7d", title: "Eggs", completed: false },
    ],
  },
  {
    id: "8",
    title: "Update portfolio website",
    description: "Add recent projects and refresh the bio section",
    completed: false,
    priority: "HIGH",
    dueDate: nextWeek,
    listId: "personal",
    tags: ["portfolio", "dev"],
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    subtasks: [],
  },
  {
    id: "9",
    title: "Reply to project scope email",
    description: null,
    completed: false,
    priority: "URGENT",
    dueDate: yesterday,
    listId: "inbox",
    tags: [],
    createdAt: new Date(Date.now() - 3600000 * 3).toISOString(),
    subtasks: [],
  },
  {
    id: "10",
    title: "Fix navigation bug in dashboard",
    description: "The sidebar collapses incorrectly on mobile viewports",
    completed: false,
    priority: "HIGH",
    dueDate: tomorrow,
    listId: "work",
    tags: ["bug", "dev"],
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString(),
    subtasks: [],
  },
];
