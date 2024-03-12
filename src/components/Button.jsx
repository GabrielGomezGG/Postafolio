function Button({className, value, positionItem, setPositionItem, index}) {

    return (
        <>
            <button className={className} onClick={() => setPositionItem(index)}>{value}</button>
        </>
    )
}

export default Button