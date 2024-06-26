import PropTypes from 'prop-types';
import GridLayout from 'react-grid-layout';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AdminNav from './components/AdminNav';
import './dashboard.css';


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
  const adminLayout = [
    { i: "RecentActivities", x: 0, y: 0, w: 1, h: 2 },
    { i: "Notifications", x: 1, y: 0, w: 1, h: 2 },
    { i: "UserManagement", x: 2, y: 0, w: 1, h: 2 },
  ];

  return (
    <main className="admin-main-content">
      <GridLayout
        className="layout"
        layout={adminLayout}
        cols={3}
        rowHeight={100}
        width={1200}
      >
        <div key="RecentActivities">
          <Widget title="Recent Activities" content="List of recent activities..." />
        </div>
        <div key="Notifications">
          <Widget title="Notifications" content="List of notifications..." />
        </div>
        <div key="UserManagement">
          <Widget title="User Management" content="User management details..." />
        </div>
      </GridLayout>
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
