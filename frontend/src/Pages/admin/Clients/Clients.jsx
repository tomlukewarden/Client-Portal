import Sidebar from "../Dashboard/components/Sidebar";
import ClientListItem from "./components/ClientListItem";
import '../Dashboard/dashboard.css'

function Clients() {
  return (
    <div className="admin-dash-container">
      <Sidebar></Sidebar>
      <div className="client-list">
        <ClientListItem></ClientListItem>
      </div>
    </div>
  );
}

export default Clients;
