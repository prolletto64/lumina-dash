import {Chart} from '../Chart';

const data = [
    {name: 'Mon', revenue: 4000},
    {name: 'Tue', revenue: 3000},
    {name: 'Wed', revenue: 2000},
    {name: 'Thu', revenue: 2780},
    {name: 'Fri', revenue: 1890},
    {name: 'Sat', revenue: 2390},
    {name: 'Sun', revenue: 3490},
];

export function WeeklyRevenueChart() {
    return (
        <Chart
            title="Weekly Revenue"
            data={data}
            xKey="name"
            yKey="revenue"
            color="#10b981"
            type="bar"
        />
    );
}