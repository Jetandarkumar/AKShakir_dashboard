import ExtSidebar from "./Components/ExtSidebar";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import RightNav from "./Components/RightNav";

function App() {
  return (
    <div className="App h-screen w-screen bg-slate-900 flex">
      <Sidebar />
      <ExtSidebar />
      <Content />
      <RightNav />
    </div>
  );
}

export default App;
