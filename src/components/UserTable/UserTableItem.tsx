import { IUser } from '../../types';

interface IUserTableItem {
  user: IUser;
}

const UserTableItem: React.FC<IUserTableItem> = ({ user }) => {
  return (
    <tr className='border-b border-gray-200 hover:bg-gray-100'>
      <td className='py-3 px-6 text-left whitespace-nowrap'>
        <span className='font-medium'>{user.name}</span>
      </td>
      <td className='py-3 px-6 text-left'>{user.username}</td>
      <td className='py-3 px-6 text-left'>{user.email}</td>
      <td className='py-3 px-6 text-left'>{user.phone}</td>
    </tr>
  );
};

export default UserTableItem;
