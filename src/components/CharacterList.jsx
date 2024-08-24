import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = ({ onCharacterSelect }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const PUBLIC_KEY = 'c7a8cfddc24b8ccbd0b5edb811abd9c0';
            const HASH = 'e379863a20df8f0df8603b77ba0c1d01';
            const URL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

            try {
                const response = await axios.get(URL);
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div className="character-grid">
            {characters.map((character) => (
                <div key={character.id} className="character-item" onClick={() => onCharacterSelect(character.id)}>
                    <img
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt={character.name}
                    />
                    <h3>{character.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default CharacterList;
