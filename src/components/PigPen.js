import { useState } from "react";
import Tile from './Tile'

const PigPen = ({hogs, sortBy}) => {
    const [hidden, setHidden] = useState(false)

    const toggleHidden = () => {
        setHidden(hidden => hidden = !hidden)
    }

    const mappedHogs = hogs.sort((a, b) => {
        if(sortBy) {
            if(sortBy === "weight") {
                return a.weight - b.weight
            } else {
                const aName = a.name.toLowerCase()
                const bName = b.name.toLowerCase()
                return aName.localeCompare(bName)
            }
        }
        return 0
    })
    .map(hog => <Tile key={hog.name} {...hog} hidden={hidden} toggleHidden={toggleHidden} />)

    return (
        <div className="ui grid container">
            {mappedHogs}
        </div>
  )
}

export default PigPen