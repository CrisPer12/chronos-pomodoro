import { CustomProvider } from 'rsuite';
import { AppLayout } from './components/Layout/AppLayout';
import { useTimer } from './hooks/useTimer';
import 'rsuite/dist/rsuite.min.css';

function App() {
  // Inicializa o timer
  useTimer();

  return (
    <CustomProvider theme="light">
      <AppLayout />
    </CustomProvider>
  );
}

export default App;
