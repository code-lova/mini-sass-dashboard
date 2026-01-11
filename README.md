# Mini SaaS Dashboard

A minimal, production-grade SaaS dashboard built for the Frontend Developer Assessment.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Firebase:**

   - Create a `.env.local` file with your Firebase config keys as described in `/lib/firebase.ts`.
   - Make sure Firebase Auth is enabled in your Firebase project.

4. **Run the application:**
   ```bash
   npm run dev
   ```
5. **View in browser:**  
   Open [http://localhost:3000](http://localhost:3000)

---

## Notes on Decisions & Implementation Trade-offs

- **Authentication:**  
  Chose **Firebase Auth** for user authentication to simulate real-world login flows. While setup is slightly more involved, it provides a familiar SaaS experience. User details are persisted after login via React Context API for simple, yet robust state management.
- **UI Library:**  
  Adopted **Shadcn UI** for rapid, consistent interface development. This enabled sleek component styling with minimal custom code.
- **Forms:**  
  Leveraged `react-hook-form` for efficient form handling with built-in validation and minimal boilerplate.
- **Theme Management:**  
  Utilized **next-themes** (Next.js built-in solution) to enable seamless light/dark mode toggling, persisting user preference in local storage.
- **Dashboard Data:**  
  Metrics such as monthly users, revenue, and churn are **mocked** rather than fetched from a backend due to time constraints, allowing focus on the frontend. API delays are simulated in data fetching to demonstrate loading states and skeleton components.
- **State Management:**  
  Opted for Context API instead of heavier solutions (like Redux) based on the project’s size and requirements. This keeps the code simple and maintainable.
- **Code Structure & UX:**  
  Scoped routing, component separation, and dashboard UI to balance code reusability, maintainability, and user experience. Chose solutions that allowed faster development without overcomplicating the tech stack or overengineering.

---

_See source code for more details. For questions or improvements, please submit an issue or pull request._

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform]

- ** deployment link:**
https://mini-sass-dashboard.vercel.app/

