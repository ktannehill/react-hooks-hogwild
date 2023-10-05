import Tile from './Tile'

const PigPen = ({hogs, sortBy}) => {

    const mappedHogs = hogs.sort((a, b) => {
        if(sortBy) {
            if(sortBy === "weight") {
                return a.weight - b.weight
            } else {
                const aName = a.name.toLowerCase()
                const bName = b.name.toLowerCase()
            }
        } 
    })
    .map(hog => <Tile key={hog.name} {...hog} />)

    return (
        <div className="ui grid container">
            {mappedHogs}
        </div>
  )
}

export default PigPen