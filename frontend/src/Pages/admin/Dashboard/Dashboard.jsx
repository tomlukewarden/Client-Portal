import PropTypes from 'prop-types';
import './dashboard.css';

function AdminNav() {
  return (
    <nav className="admin-nav">
      <div className="logo">Culley & McAlpine</div>
    </nav>
  );
}

function Header() {
  return (
    <header className="admin-header">
      <h1>Admin Dashboard</h1>
      <div className="header-controls">
        <button>Notifications</button>
        <button>Profile</button>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="admin-sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Clients</li>
        <li>Cases</li>
        <li>Documents</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}

function Widget({ title, content }) {
  return (
    <div className="widget">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

function MainContent() {
  return (
    <main className="admin-main-content">
      <Widget title="Recent Activities" content="List of recent activities..." />
      <Widget title="Notifications" content="List of notifications..." />
      <Widget title="User Management" content="User management details..." />
    </main>
  );
}

function AdminDashboard() {
  return (
    <div className="admin-dash-container">
      <AdminNav />
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default AdminDashboard;
