import { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter";
import PigPen from "./PigPen";

function App() {
	const [sortBy, setSortBy] = useState("")

	const toggleSortBy = (e) => {
		const selectedValue = e.target.value
		setSortBy(sortBy = selectedValue)
	}

	return (
		<div className="App">
			<Nav />
			<Filter sortBy={sortBy} toggleSortBy={toggleSortBy} />
			<PigPen hogs={hogs} />
		</div>
	);
}

export default App;
