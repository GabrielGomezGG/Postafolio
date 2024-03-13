import React, { useState } from 'react';
import Button from "../components/Button.jsx";
import ItemBody from './ItemBody.jsx';

const items = [
    { title: "", body: "" },
    { title: "¿Quién soy?", body: "titi" },
    { title: "Experiencia", body: "nula" },
    { title: "Estudios", body: "si" },
];



const experience = [
    { subtitle: "May 2016 - Oct 2016 | Prácticas Profesionalizantes | Universidad Nacional De La Matanza", body: "Estudié en la Universidad Nacional de La Matanza la carrera de Ingeniería en Informática. Me recibí en 2020." },
]

const studies = [
    { subtitle: "2020 - Actualidad | Universidad Nacional De La Matanza", body: "Tecnicatura en Desarrollo de Aplicaciones Móviles" },
    { subtitle: "2017 - 2018 | Curso 111 Mil Programadores", body: "Analista del conocimiento" },
    { subtitle: "2012 - 2016 | Escuela De Educación Secundaria Técnica N° 14", body: "Técnico en Programación." },
]

const aboutmeContent = [
    experience ,
    studies 
]



function AboutmeContent() {

    const [positionItem, setPositionItem] = useState(0);

    return (
        <div className="main">
            <div className="buttons_column">
                {items.map((item, index) => {
                    return (
                        item.title.length > 0 ? (
                            <Button key={item.title} title={item.title} positionItem={positionItem} setPositionItem={setPositionItem} index={index} />
                        ) : null
                    );
                })}
            </div>

            <div className="text_content">
                <h3>{items[positionItem].title}</h3>
                
                {positionItem > 1 ?
                    aboutmeContent[positionItem-2].map((item, index) => {
                        // console.log(item.subtitle + " " + item.body)
                        return <ItemBody key={item.subtitle} subtitle={item.subtitle} text={item.body} index={aboutmeContent[positionItem-2].length} />
                    })
                    //<ItemBody subtitle={aboutmeContent[positionItem][0].subtitle} text="xxxxxxxxxxxx" />
                    : <p>{items[positionItem].body} </p>
                }
            </div>

        </div>

    )
}

export default AboutmeContent