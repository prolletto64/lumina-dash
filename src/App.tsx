import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        const fetchRandomUser = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) throw new Error('Errore nella chiamata API');
                const data = await response.json();
                const user = data.results[0];
                setName(user.name.first);
            } finally {
                setIsLoading(false);
            }
        }
        fetchRandomUser();
    }, [])

    return (
        <div className="dashboard">
            {isLoading && <div className="centered-text"><p className="text-primary">LumaDash is loading...</p></div>}
            {!isLoading && <div>
                <h1 className="title">Luma Dashboard</h1>
                <p className="text-primary">Welcome, {name}</p>
            </div>}
        </div>
    )
}

export default App
