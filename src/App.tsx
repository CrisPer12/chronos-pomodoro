import { AppLayout } from './components/Layout/AppLayout';
import { useTimer } from './hooks/useTimer';

function App() {
  // Inicializa o timer
  useTimer();

  return <AppLayout />;
}

export default App;
