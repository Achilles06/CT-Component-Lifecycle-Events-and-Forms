import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        if (characterId) {
            const fetchCharacterDetail = async () => {
                const PUBLIC_KEY = 'c7a8cfddc24b8ccbd0b5edb811abd9c0';
                const HASH = 'e379863a20df8f0df8603b77ba0c1d01';
                const URL = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

                try {
                    const response = await axios.get(URL);
                    setCharacter(response.data.data.results[0]);
                } catch (error) {
                    console.error('Error fetching character detail:', error);
                }
            };

            fetchCharacterDetail();
        }
    }, [characterId]);

    if (!character) {
        return <div>Select a character to see details.</div>;
    }

    return (
        <div className="character-detail">
            <h2>{character.name}</h2>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            <p>{character.description || 'No description available.'}</p>
            <h3>Comics:</h3>
            <ul>
                {character.comics.items.map((comic, index) => (
                    <li key={index}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetail;
