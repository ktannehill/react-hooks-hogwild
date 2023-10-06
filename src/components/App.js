import { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter";
import PigPen from "./PigPen";

function App() {
	const [sortBy, setSortBy] = useState("")
	const [filterGreased, setFilterGreased] = useState(false)
	const [showHogs, setShowHogs] = useState(hogs)

	const toggleSortBy = (e) => {
		const selectedValue = e.target.value
		setSortBy(sortBy => sortBy = selectedValue)
	}

	const toggleGreased = () => {
		if(!filterGreased) {
			const filteredHogs = hogs.filter(hog => !hog.greased)
			setShowHogs(showHogs => showHogs = filteredHogs)
		} else {
			setShowHogs(showHogs => showHogs = hogs)
		}
		setFilterGreased(filterGreased => filterGreased = !filterGreased)
	}

	return (
		<div className="App">
			<Nav />
			<Filter 
				sortBy={sortBy} 
				toggleSortBy={toggleSortBy} 
				filterGreased={filterGreased}
				toggleGreased={toggleGreased}
			/>
			<PigPen hogs={showHogs} sortBy={sortBy} />
		</div>
	);
}

export default App;
