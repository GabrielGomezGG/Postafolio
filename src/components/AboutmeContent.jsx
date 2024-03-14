import { useState } from 'react';
import Button from "../components/Button.jsx";
import ItemBody from './ItemBody.jsx';

function AboutmeContent({items, aboutmeContent = []}) {

    const [positionItem, setPositionItem] = useState(0);

    var bodySize = 0;

    if(items[positionItem]){
        bodySize = items[positionItem].body.length;
    }

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

                {bodySize < 1 ?
                    aboutmeContent[positionItem - 2]?.map((item) => {
                        return <ItemBody key={item.subtitle} subtitle={item.subtitle} text={item.body} index={aboutmeContent[positionItem - 2].length} />
                    })
                    : <p>{items[positionItem].body} </p>
                }
            </div>
        </div>

    )
}

export default AboutmeContent