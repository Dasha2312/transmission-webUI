import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Login from "./pages/Dashboard/Dashboard"
import { useEffect } from "react";
import { connectToTransmission } from "./shared/http/HttpRequest/HttpRequest";

const queryClient = new QueryClient()

function App() {
  useEffect(() => {
    connectToTransmission().then(t => t.getTorrents());
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  )
}

export default App
