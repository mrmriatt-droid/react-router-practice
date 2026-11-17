function Settings() {
  return (
    <div className="dashboard-card">
      <h2>Settings</h2>
      <p>Manage your settings here.</p>

      <label>
        <input type="checkbox" defaultChecked />
        Enable Notifications
      </label>
    </div>
  );
}

export default Settings;