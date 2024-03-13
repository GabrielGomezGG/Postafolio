function ItemBody({ subtitle, text, index }) {
    return (
        <>
            <p className="subtitle_content">{subtitle}</p>
            <hr />
            <p className="body_content">{text}</p>
            {index > 1 && <div className="pattern">
                <div className="container">
                    <div className="pattern-inner"></div>
                </div>
            </div>}
        </>
    )
}

export default ItemBody