interface HomeProps {
    name: string;
}

export function Home({name}: HomeProps) {
    return (
        <>
            <div>
                <h1 className="title">Luma Dashboard</h1>
                <p className="text-primary">Welcome, {name}</p>
            </div>
        </>
    )
}