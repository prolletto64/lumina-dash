import {TotalUsersCard} from "../components/cards/TotalUserCard.tsx";
import {RevenueCard} from "../components/cards/RevenueCard.tsx";
import {ActiveUsersCard} from "../components/cards/ActiveUserCard.tsx";
import {ConversionRateCard} from "../components/cards/ConversionRateCard.tsx";
import {MonthlyGoalCard} from "../components/cards/MonthlyGoalCard.tsx";
import {RecentActivity} from "../components/RecentsActivity.tsx";

interface HomeProps {
    name: string;
}

export function Home({name}: HomeProps) {
    return (
        <>
            <header className="header">
                <div>
                <h1 className="title">Luma Dashboard</h1>
                <p className="text-primary">Welcome, {name}</p>
                </div>
                <div>
                    <h1 className="title">{new Date().toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    })}</h1>
                </div>
            </header>
            <div className="section">
                <h2 className="section-title">Glance</h2>
                <div className="stats-grid">
                    <TotalUsersCard/>
                    <RevenueCard/>
                    <MonthlyGoalCard/>
                    <ActiveUsersCard/>
                    <ConversionRateCard/>
                </div>
            </div>
            <div className="section">
                <h2 className="section-title">Recent Activity</h2>
                <RecentActivity/>
            </div>
        </>
    )
}