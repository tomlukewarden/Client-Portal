import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="admin-sidebar">
      <ul>
        <li>Dashboard</li>
        <Link to="/admin-clients"><li>Clients</li></Link>
        <li>Cases</li>
        <li>Documents</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}
export default Sidebar