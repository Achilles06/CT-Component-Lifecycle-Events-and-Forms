import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css';

const App = () => {
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    const handleCharacterSelect = (id) => {
        setSelectedCharacterId(id);
    };

    return (
        <div className="app">
            <h1>Marvel Characters</h1>
            <CharacterList onCharacterSelect={handleCharacterSelect} />
            <CharacterDetail characterId={selectedCharacterId} />
        </div>
    );
};

export default App;
