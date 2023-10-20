import React, { useEffect, useState } from 'react'

const User = () => {
    const [data, setData] = useState({ tickets: [], users: [] });

    useEffect(() => {
        fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    return (
        <>
        <div class='app'>
            <main class='project'>
              
                <div class='project-tasks'>


                    <div class='project-column'>
                       

                        {data.users.map((user) => (
                            user.id === "usr-1" ? (
                                <div className='task' key={user.id}>
                                    <div className='task__tags'>
                                        <span className='task__tag task__tag--design'>{user.available===true?"Available":"Not available"}</span>
                                        <button className='task__options'><i className="fas fa-ellipsis-h"></i></button>
                                    </div>
                                    <p>{user.name}</p>
                                    <div className='task__stats'>
                                        <span><time dateTime="2021-11-24T20:00:00"><i className="fas fa-flag"></i>Nov 24</time></span>
                                        <span><i className="fas fa-comment"></i>2</span>
                                        <span><i className="fas fa-paperclip"></i>5</span>
                                        <span className='task__owner'></span>
                                    </div>
                                </div>
                            ) : null

                        ))}
                    </div>
                    <div class='project-column'>
                        

                        {data.users.map((user) => (
                            user.id === "usr-2" ? (
                                <div className='task' key={user.id}>
                                    <div className='task__tags'>
                                        <span className='task__tag task__tag--design'>{user.available===true?"Available":"Not available"}</span>
                                        <button className='task__options'><i className="fas fa-ellipsis-h"></i></button>
                                    </div>
                                    <p>{user.name}</p>
                                    <div className='task__stats'>
                                        <span><time dateTime="2021-11-24T20:00:00"><i className="fas fa-flag"></i>Nov 24</time></span>
                                        <span><i className="fas fa-comment"></i>2</span>
                                        <span><i className="fas fa-paperclip"></i>5</span>
                                        <span className='task__owner'></span>
                                    </div>
                                </div>
                            ) : null

                        ))}
                    </div>
                    <div class='project-column'>
                        

                        {data.users.map((user) => (
                            user.id === "usr-3" ? (
                                <div className='task' key={user.id}>
                                    <div className='task__tags'>
                                        <span className='task__tag task__tag--design'>{user.available===true?"Available":"Not available"}</span>
                                        <button className='task__options'><i className="fas fa-ellipsis-h"></i></button>
                                    </div>
                                    <p>{user.name}</p>
                                    <div className='task__stats'>
                                        <span><time dateTime="2021-11-24T20:00:00"><i className="fas fa-flag"></i>Nov 24</time></span>
                                        <span><i className="fas fa-comment"></i>2</span>
                                        <span><i className="fas fa-paperclip"></i>5</span>
                                        <span className='task__owner'></span>
                                    </div>
                                </div>
                            ) : null

                        ))}
                    </div>
                    <div class='project-column'>
                       

                        {data.users.map((user) => (
                            user.id === "usr-4" ? (
                                <div className='task' key={user.id}>
                                    <div className='task__tags'>
                                        <span className='task__tag task__tag--design'>{user.available===true?"Available":"Not available"}</span>
                                        <button className='task__options'><i className="fas fa-ellipsis-h"></i></button>
                                    </div>
                                    <p>{user.name}</p>
                                    <div className='task__stats'>
                                        <span><time dateTime="2021-11-24T20:00:00"><i className="fas fa-flag"></i>Nov 24</time></span>
                                        <span><i className="fas fa-comment"></i>2</span>
                                        <span><i className="fas fa-paperclip"></i>5</span>
                                        <span className='task__owner'></span>
                                    </div>
                                </div>
                            ) : null

                        ))}
                    </div>
                    <div class='project-column'>
                       

                        {data.users.map((user) => (
                            user.id === "usr-5" ? (
                                <div className='task' key={user.id}>
                                    <div className='task__tags'>
                                        <span className='task__tag task__tag--design'>{user.available===true?"Available":"Not available"}</span>
                                        <button className='task__options'><i className="fas fa-ellipsis-h"></i></button>
                                    </div>
                                    <p>{user.name}</p>
                                    <div className='task__stats'>
                                        <span><time dateTime="2021-11-24T20:00:00"><i className="fas fa-flag"></i>Nov 24</time></span>
                                        <span><i className="fas fa-comment"></i>2</span>
                                        <span><i className="fas fa-paperclip"></i>5</span>
                                        <span className='task__owner'></span>
                                    </div>
                                </div>
                            ) : null

                        ))}
                    </div>
                    

                </div>
            </main>

        </div>
    </>
    )
}

export default User
