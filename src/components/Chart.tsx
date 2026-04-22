import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

export type ChartType = 'bar' | 'line' | 'area';

interface ChartProps {
    title: string;
    data: Array<{ [key: string]: unknown }>;
    xKey: string;
    yKey: string;
    color?: string;
    type?: ChartType;
}

export function Chart({
                          title,
                          data,
                          xKey,
                          yKey,
                          color = '#3b82f6',
                          type = 'bar',
                      }: ChartProps) {
    const renderChart = () => {
        switch (type) {
            case 'line':
                return (
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey={xKey}/>
                        <YAxis/>
                        <Tooltip/>
                        <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={2}/>
                    </LineChart>
                );
            case 'area':
                return (
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey={xKey}/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type="monotone" dataKey={yKey} stroke={color} fill={color} fillOpacity={0.3}/>
                    </AreaChart>
                );
            case 'bar':
            default:
                return (
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey={xKey}/>
                        <YAxis/>
                        <Tooltip/>
                        <Bar dataKey={yKey} fill={color}/>
                    </BarChart>
                );
        }
    };

    return (
        <div className="section">
            <h2 className="chart-title">{title}</h2>
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                    {renderChart()}
                </ResponsiveContainer>
            </div>
        </div>
    );
}