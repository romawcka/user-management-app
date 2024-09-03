interface IUserTableHeadItem {
  title: string;
}

const UserTableHeadItem: React.FC<IUserTableHeadItem> = ({ title }) => {
  return <th className='py-3 px-6 text-center'>{title}</th>;
};

export default UserTableHeadItem;
