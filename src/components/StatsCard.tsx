interface StatCardProps {
    title: string;
    value: string | number;
    icon?: string;
    color?: 'blue' | 'green' | 'purple' | 'amber';
    size?: number;
}

const colorClasses = {
    blue: 'stat-card-blue',
    green: 'stat-card-green',
    purple: 'stat-card-purple',
    amber: 'stat-card-amber',
};

export function StatsCard({title, value, icon, color, size = 1}: StatCardProps) {
    return (
        <div className={`stat-card ${color && colorClasses[color]} stat-card-size-${size}`}>
            <div className="stat-card-header">
                <span>{title}</span>
                {icon && (<span>{icon}</span>)}
            </div>
            <div className="stat-card-value">{value}</div>
        </div>
    );
}