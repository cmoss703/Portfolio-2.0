function Row(props) {
    return (
        <div className="row card m-5">
            {props.children}
        </div>
    )
}

export default Row;