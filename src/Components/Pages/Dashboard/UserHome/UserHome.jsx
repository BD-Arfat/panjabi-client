import React from 'react';
import useAuthContext from '../../../../hooks/useAuthContext';

const UserHome = () => {
    const {user} = useAuthContext()
    return (
        <div>
            {
                user.displayName ? user?.displayName : 'welcome back'
            }
        </div>
    );
};

export default UserHome;