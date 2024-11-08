export const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "password123",
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile the monthly sales data for review.",
        date: "2024-10-25",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Follow-Up",
        description: "Reach out to pending clients for feedback.",
        date: "2024-10-27",
        category: "Client Relations",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Product Training",
        description: "Attend the new product training session.",
        date: "2024-10-30",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "password456",
    tasks: [
      {
        title: "Update Inventory",
        description: "Check and update inventory levels in the system.",
        date: "2024-10-28",
        category: "Inventory",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Email Marketing Setup",
        description: "Create and schedule email campaign for November.",
        date: "2024-10-26",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Budget Meeting",
        description: "Participate in the annual budget planning meeting.",
        date: "2024-11-01",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "password789",
    tasks: [
      {
        title: "Code Review",
        description: "Review the latest feature branch for the web app.",
        date: "2024-10-25",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Team Standup",
        description: "Attend daily standup meeting.",
        date: "2024-10-26",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Client Presentation",
        description: "Present project progress to the client.",
        date: "2024-10-29",
        category: "Client Relations",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "password101",
    tasks: [
      {
        title: "Market Analysis",
        description: "Analyze competitor market strategies.",
        date: "2024-10-28",
        category: "Research",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Project Launch",
        description: "Oversee the launch of the new project.",
        date: "2024-11-02",
        category: "Project Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Feedback",
        description: "Gather feedback from team members.",
        date: "2024-10-30",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "password102",
    tasks: [
      {
        title: "Server Maintenance",
        description: "Perform regular maintenance on the main server.",
        date: "2024-10-25",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Security Audit",
        description: "Conduct a security audit for the database systems.",
        date: "2024-10-26",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Report Generation",
        description: "Generate monthly performance reports.",
        date: "2024-10-27",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

export const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "adminPass123",
  },
];


// Set localStorage
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

// Get item
export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));

  return {employeesData, adminData};
}