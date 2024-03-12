import React, { useState } from 'react';
import Button from "../components/Button.jsx";

const items = [
    { title: "", body: "", className: "zero" },
    { title: "¿Quién soy?", body: "titi", className: "one" },
    { title: "Experiencia", body: "nula", className: "two" },
    { title: "Estudios", body: "si", className: "three" },
];


function AboutmeContent() {
    
    const [positionItem, setPositionItem] = useState(0);

    return (
        <div className="main">
            <div className="buttons_column">
                {items.map((item, index) => {
                    return (
                        item.title.length > 0 ? (
                            <Button key={item.className} className={item.className} value={item.title} positionItem={positionItem} setPositionItem={setPositionItem} index={index} />
                        ) : null
                    );
                })}
            </div>

            <div className="text_content">
                <h3>{items[positionItem].title}</h3>
                <p>{items[positionItem].body}</p>
            </div>

        </div>

    )
}

export default AboutmeContent