interface ISearchFilterItem {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchFilterItem: React.FC<ISearchFilterItem> = ({
  name,
  handleChange,
}) => {
  return (
    <input
      type='text'
      name={name}
      placeholder={`Filter by ${name}`}
      onChange={handleChange}
      className='p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
    />
  );
};
export default SearchFilterItem;
