import { changeFilter } from "Redux/filterSlices";
import { useDispatch } from "react-redux";


const Filter = () => {
	const dispatch = useDispatch()
	return (<>
		<div className="mb-3 container-sm mt-3 m-2">
			<label htmlFor="exampleInputEmail1" className="form-label">Search contact</label>
			<input className="form-control" type="text" onChange={(e) => dispatch(changeFilter(e.target.value))} />
		</div>	</>
	);
}


export default Filter;