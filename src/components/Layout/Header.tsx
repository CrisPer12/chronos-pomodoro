import { Search, Bell } from 'lucide-react';
import { Avatar } from 'rsuite';

export const Header = () => {
  return (
    <header className="bg-background-card border-b border-neutral-200 px-6 py-4">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-800">Pomodoro</h1>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Buscar"
              className="pl-10 pr-4 py-2 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all duration-200 w-64"
            />
          </div>

          <button className="btn-icon relative">
            <Bell size={20} className="text-neutral-600" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>

          <Avatar
            circle
            src="https://i.pravatar.cc/150?img=12"
            alt="User avatar"
            className="cursor-pointer hover:ring-2 hover:ring-primary-500 transition-all duration-200"
          />
        </div>
      </div>
    </header>
  );
};
