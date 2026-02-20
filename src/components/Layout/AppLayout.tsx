import { DailyProgress } from "@/components/Tasks/DailyProgress";
import { TaskList } from "@/components/Tasks/TaskList";
import { CircularTimer } from "@/components/Timer/CircularTimer";
import { TimerControls } from "@/components/Timer/TimerControls";
import { ModeSelector } from "@/components/Timer/ModeSelector";
import { CustomTimerConfig } from "@/components/Timer/CustomTimerConfig";
import { Header } from "./Header";

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-surface-page relative overflow-x-hidden">
      {/* Subtle background gradient effect across app */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-action-primary opacity-10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-[#7c5cff] opacity-10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <Header />

      <main className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6">
          {/* Left Sidebar - Tasks */}
          <aside
            className="space-y-6 order-2 lg:order-1 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <DailyProgress />
            <div className="h-[500px] lg:h-[calc(100vh-400px)] glass-panel rounded-2xl p-0 overflow-hidden">
              <TaskList />
            </div>
          </aside>

          {/* Main Content - Timer */}
          <section
            className="space-y-6 order-1 lg:order-2 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="glass-panel p-8 rounded-2xl">
              <div className="flex flex-col items-center gap-8">
                <ModeSelector />
                <CircularTimer />
                <TimerControls />
              </div>
            </div>

            <CustomTimerConfig />
          </section>
        </div>
      </main>
    </div>
  );
};
