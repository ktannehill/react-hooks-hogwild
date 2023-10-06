import { useState } from "react";
// import Details from "./Details";

const Tile = ({ 
    name, 
    image, 
    specialty, 
    weight, 
    greased, 
    "highest medal achieved": medal,
    hidden,
    toggleHidden
}) => {
    const [showDetails, setShowDetails] = useState(false)

	const handleToggleDetails = () => {
		setShowDetails(currentShowDetails => !currentShowDetails)
	}

    return (
        <div className="pigTile" onClick={handleToggleDetails}>
            <h3>{name}</h3>
            <img src={image} alt={name} className="minPigTile"/>
            {showDetails &&
                <>
                    <p>Specialty: {specialty}</p>
                    <p>Weight: {weight}lbs</p>
                    <p>{greased ? "Greased" : "Not greased"}</p>
                    <p>Medal: {medal}</p>
                </>
            }
        </div>
    )
}

export default Tile