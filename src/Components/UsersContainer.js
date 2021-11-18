import { useState, useEffect } from 'react';
import User from './User';
import List from './List';
import UserSearch from './UserSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const UsersContainer = ({ setUserState }) => {
    const [ users, setList ] = useState(null);
    const [ chosenUser, setChosenUser ] = useState(null);
    const [ inputValue, setInputValue ] = useState('');

    useEffect(() => {
        //fetch('users.json')
        fetch("users.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        })
        .then(res => {
            return res.json()
        })

        .then(data => {
            setList(data.users)
            setChosenUser(data.users)
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    const handleChangeValue = (e) => {
       setInputValue(e.target.value)
    }

    const handleReset = () => {
        setChosenUser(users)
    }

    const handleSearch = (e) => {
        if(e.key === 'Enter'){
            const cloneUser = users.filter((user) =>
            user.name.toString().toLowerCase().includes(inputValue.toString().toLowerCase()));
            setChosenUser(cloneUser);
        }
    };

    const showUserDetails = (e) => {
        //setClickedUser(e)
        //console.log('function showDetails clicked element: ', e)
        const clicked = (e)
        setUserState(clicked)
    }

//      another fetch method notation
    //
    // const getUsers = () => {
    //     fetch("users.json", {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json"
    //       }
    //     })
    //     .then(res => {
    //          return res.json()
    //       })
    //       .then(data => {
    //          console.log(data);
    //          setList(data.users)
    //       })
    //   };

    //   useEffect(() => {
    //     getUsers();
    //   }, []);


    return(
        <div className="title">

            <h1><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Search users</h1>
            <div>
                <UserSearch
                    handleChangeValue={handleChangeValue}
                    handleSubmit={handleSubmit}
                    value={inputValue}
                    handleSearch={handleSearch}
                    handleReset={handleReset}
                />
            </div>

            <div className="userList">
                <h2>Users list:</h2>
                <List>
                    {chosenUser && chosenUser.map((user) =>
                        <User
                        key={user.id}
                        user={user}
                        showUserDetails={showUserDetails}
                        />
                    )}
                </List>
            </div>
        </div>
    )
}

export default UsersContainer;