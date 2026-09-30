
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

      {/* Main Content */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

        <header className="mb-10 text-center sm:mb-12">

          <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Our Community
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Meet the people behind
            <span className="block text-blue-600">
              great ideas.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Discover talented people, explore their work, and connect
            with professionals from different fields.
          </p>

        </header>

        <ProfileGrid
          followingUsers={followingUsers}
          onFollowToggle={handleFollowToggle}
        />

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
          Built with React & Tailwind CSS
        </div>
      </footer>

    </div>
  );
}

export default App;

