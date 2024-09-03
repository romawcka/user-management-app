import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchUsers } from './userSlice';
import UserTableHeadItem from './UserTableHeadItem';
import { tableTitles as tableHeadTitles } from '../../utils/constant';
import Spinner from '../Spinner';
import Error from '../Error';
import UserTableItem from './UserTableItem';

const UserTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error, filters } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = useMemo(
    () =>
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
          user.username
            .toLowerCase()
            .includes(filters.username.toLowerCase()) &&
          user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
          user.phone.toLowerCase().includes(filters.phone.toLowerCase())
      ),
    [users, filters]
  );

  if (loading || error)
    return (
      <div className='flex justify-center'>
        {loading ? <Spinner /> : <Error />}
      </div>
    );

  return (
    <div className='overflow-x-auto rounded-lg shadow-lg'>
      <table className='min-w-full bg-white'>
        <thead>
          <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
            {tableHeadTitles.map((title, index) => (
              <UserTableHeadItem title={title} key={index} />
            ))}
          </tr>
        </thead>
        <tbody className='text-gray-600 text-sm font-light'>
          {filteredUsers.length ? (
            filteredUsers.map((user) => (
              <UserTableItem user={user} key={user.id} />
            ))
          ) : (
            <div className='flex justify-center items-center h-20'>
              <p className='text-gray-600 text-lg'>No results found</p>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
