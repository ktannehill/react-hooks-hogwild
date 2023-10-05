
const Details = ({specialty, weight, greased, "highest medal achieved": medal}) => {
    return (
        <>
            <p>{specialty}</p>
            <p>{weight}</p>
            <p>{greased}</p>
            <p>{medal}</p>
        </>
    )
}

export default Details