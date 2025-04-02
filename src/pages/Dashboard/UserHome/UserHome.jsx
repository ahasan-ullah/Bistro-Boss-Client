import useAuth from '../../../hooks/useAuth'
const UserHome = () => {
  const {user}=useAuth();
  return (
    <div>
      <div>
      <h2 className="text-3xl"><span>Hi, Welcome</span> {user.displayName?user.displayName:'Back'}</h2>
    </div>
    </div>
  );
};

export default UserHome;