function Button({ title, setPositionItem, index }) {
    return (
        <>
            <button onClick={() => setPositionItem(index)}>{title}</button>
        </>
    )
}

export default Button