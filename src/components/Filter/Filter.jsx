import { Input } from "./Filter.styled";
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
	return (
		<label>
			Find contacts by name
            <Input
                type="text"
                name="filter"
                value={filter}
                onChange={onChange} />
		</label>
	);
};
 
export default Filter;

Filter.propTypes = {
    filterValue: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
};