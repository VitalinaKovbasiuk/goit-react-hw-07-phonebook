// import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      <Input
        type="text"
        name={filter}
        onChange={onChange}
        placeholder="Find contacts by name"
      />
    </label>
  );
}
