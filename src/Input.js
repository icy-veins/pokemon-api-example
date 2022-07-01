import { useState } from 'react';

function Input({ updateSearch }) {
    const [ text, setText ] = useState("");
    
    return (
        <div>
            <input type="text" onChange={(event) => setText(event.target.value)}/>
            <button onClick={() => updateSearch(text)}>search</button>
        </div>
    )
}
export default Input;