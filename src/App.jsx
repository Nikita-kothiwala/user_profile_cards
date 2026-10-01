
import { useEffect, useState } from "react";
import ProfileGrid from "./components/ProfileGrid";

const STORAGE_KEY = "profile-card-following-users";

function App() {
  const [followingUsers, setFollowingUsers] = useState(() => {
    const savedUsers = localStorage.getItem(STORAGE_KEY);

    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(followingUsers)
    );
  }, [followingUsers]);

  const handleFollowToggle = (userId) => {
    setFollowingUsers((currentUsers) => {
      if (currentUsers.includes(userId)) {
        return currentUsers.filter((id) => id !== userId);
      }

      return [...currentUsers, userId];
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">

   
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

         <header className="mb-10 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Meet the team
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Follow people to keep up with their work.
          </p>
        </header>

        <ProfileGrid
          followingUsers={followingUsers}
          onFollowToggle={handleFollowToggle}
        />

      </main>

  
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
          Built with React & Tailwind CSS
        </div>
      </footer>

    </div>
  );
}

export default App;

