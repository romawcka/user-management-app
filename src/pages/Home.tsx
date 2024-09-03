import SearchFilter from '../components/SearchFilter';
import UserTable from '../components/UserTable';

const Home: React.FC = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
      <div className='w-full max-w-4xl bg-white rounded-lg shadow-lg p-6'>
        <h1 className='uppercase text-3xl text-pink-600 font-bold text-center mb-4'>
          User Management
        </h1>
        <SearchFilter />
        <UserTable />
      </div>
    </div>
  );
};

export default Home;
