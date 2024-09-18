ToDo App
----------

**Overview**
The **ToDo App** is a simple task management application built with React and Firebase. It allows users to add, view, and manage tasks, with features like reminders and task due dates. The application is designed to be intuitive and user-friendly, providing a seamless way to manage daily tasks.

**Features**
- **Task List**: Displays a list of existing tasks.
- **Add New Task**: Users can add new tasks with a task name, due date, and a reminder option.
- **Reminder Toggle**: Double-clicking on any task toggles its reminder status.
- **Visual Cues for Reminders**: Tasks with reminders enabled are visually marked with a green border on the left side.
- **Delete Task**: Users can delete tasks by clicking the close icon.

**How It Works**
----------

**Landing Page**
- **Header**: At the top of the page, there is a header displaying the title **Task** and an **Add** button.
- **Add Button**: Clicking the **Add** button opens a form below the header where you can add a new task.

**Adding a New Task**
- **Form**: The form includes fields for:
   - **Task Name**: A brief description of the task.
   - **Due Date**: The due date of the task (in dd-mm-yyyy format).
   - **Reminder Checkbox**: Option to enable or disable a reminder for the task.
   
- **Submit**: Once the form is filled out, submitting it adds the new task to the list displayed below.

**Task List**
- **Task Display**: Below the header and form, the existing tasks are listed. Each task shows:
   - The task name
   - The due date
   - A close icon to delete the task

- **Reminder Toggle**: You can **double-click** on any task to toggle the reminder. If the reminder is enabled, a green border will appear on the left side of the task. If the reminder is disabled, the green border will be removed.

**Footer**
The footer is located at the bottom of the page and serves as a simple navigation or informational section.

**Visual Breakdown**
----------
- **Header**: Displays the application title and the add button.
- **Task List**: Displays all tasks with the ability to delete or toggle reminders.
- **Form**: Provides inputs to create a new task, visible when you click the add button.
- **Reminder Indicator**: Tasks with active reminders will have a green border on the left side.

**Firebase Integration**
----------
The app uses Firebase Firestore as its backend for task storage. Tasks are fetched, added, updated, and deleted directly from the Firestore database.

**How to Run the Project**
----------
- **Clone the repository**:
```bash
git clone https://github.com/your-repo/todo-app.git

```install Dependencies
npm install

```Start the development server
npm start