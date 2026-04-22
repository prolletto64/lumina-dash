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

        </>
    )
}