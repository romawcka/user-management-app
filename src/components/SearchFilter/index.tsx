import React from 'react';
import { useDispatch } from 'react-redux';
import { tableTitles as searchFilterName } from '../../utils/constant';
import { setFilter } from '../UserTable/userSlice';
import SearchFilterItem from './SearchFilterItem';

const SearchFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setFilter({ [e.target.name]: e.target.value }));

  return (
    <div className='flex mb-4 justify-between'>
      {searchFilterName.map((name, index) => (
        <SearchFilterItem name={name} handleChange={handleChange} key={index} />
      ))}
    </div>
  );
};

export default SearchFilter;
