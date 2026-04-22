export function RecentActivity() {
    const activities = [
        {action: 'New user registered', time: '10 min ago'},
        {action: 'Payment received #1234', time: '1 hour ago'},
        {action: 'Monthly report generated', time: '3 hours ago'},
        {action: 'Backup completed', time: '5 hours ago'},
    ];

    return (
        <div className="recent-activity">
            <h2 className="section-title">Recent Activity</h2>
            <div className="activity-list">
                {activities.map((item, idx) => (
                    <div key={idx} className="activity-item">
                        <span>{item.action}</span>
                        <span className="activity-time">{item.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}