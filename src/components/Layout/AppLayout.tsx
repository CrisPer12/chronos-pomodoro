import { DailyProgress } from '@/components/Tasks/DailyProgress';
import { TaskList } from '@/components/Tasks/TaskList';
import { CircularTimer } from '@/components/Timer/CircularTimer';
import { TimerControls } from '@/components/Timer/TimerControls';
import { ModeSelector } from '@/components/Timer/ModeSelector';
import { CustomTimerConfig } from '@/components/Timer/CustomTimerConfig';
import { Header } from './Header';

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-surface-page">
      <Header />
      
      <main className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6">
          {/* Left Sidebar - Tasks */}
          <aside className="space-y-6 order-2 lg:order-1">
            <DailyProgress />
            <div className="h-[500px] lg:h-[calc(100vh-400px)]">
              <TaskList />
            </div>
          </aside>

          {/* Main Content - Timer */}
          <section className="space-y-6 order-1 lg:order-2">
            <div className="card">
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
