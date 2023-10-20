import React, { useEffect, useState } from 'react'

const Priority = () => {

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
                            <div class='project-column-heading'>
                                <h2 class='project-column-heading__title'>No Priority</h2><button class='project-column-heading__options'><i
                                    class="fas fa-ellipsis-h"></i></button>
                            </div>

                            {data.tickets.map((ticket) => (
                                ticket.priority === 0 ? (
                                    <div className='task' key={ticket.id}>
                                        <div className='task__tags'>
                                            <span className='task__tag task__tag--design'>{ticket.priority}</span>
                                            <button className='task__options'><i className="fas fa-ellipsis-h"></i></button>
                                        </div>
                                        <p>{ticket.title}</p>
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
                            <div class='project-column-heading'>
                                <h2 class='project-column-heading__title'>Low</h2><button class='project-column-heading__options'><i
                                    class="fas fa-ellipsis-h"></i></button>
                            </div>

                            {data.tickets.map((ticket) => (
                                ticket.priority === 1 ? (
                                    <div className='task' key={ticket.id}>
                                        <div className='task__tags'>
                                            <span className='task__tag task__tag--design'>{ticket.priority}</span>
                                            <button className='task__options'><i className="fas fa-ellipsis-h"></i></button>
                                        </div>
                                        <p>{ticket.title}</p>
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
                            <div class='project-column-heading'>
                                <h2 class='project-column-heading__title'>Medium</h2><button class='project-column-heading__options'><i
                                    class="fas fa-ellipsis-h"></i></button>
                            </div>

                            {data.tickets.map((ticket) => (
                                ticket.priority === 2 ? (
                                    <div className='task' key={ticket.id}>
                                        <div className='task__tags'>
                                            <span className='task__tag task__tag--design'>{ticket.priority}</span>
                                            <button className='task__options'><i className="fas fa-ellipsis-h"></i></button>
                                        </div>
                                        <p>{ticket.title}</p>
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
                            <div class='project-column-heading'>
                                <h2 class='project-column-heading__title'>High</h2><button class='project-column-heading__options'><i
                                    class="fas fa-ellipsis-h"></i></button>
                            </div>

                            {data.tickets.map((ticket) => (
                                ticket.priority === 3 ? (
                                    <div className='task' key={ticket.id}>
                                        <div className='task__tags'>
                                            <span className='task__tag task__tag--design'>{ticket.priority}</span>
                                            <button className='task__options'><i className="fas fa-ellipsis-h"></i></button>
                                        </div>
                                        <p>{ticket.title}</p>
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
                            <div class='project-column-heading'>
                                <h2 class='project-column-heading__title'>Urgent</h2><button class='project-column-heading__options'><i
                                    class="fas fa-ellipsis-h"></i></button>
                            </div>

                            {data.tickets.map((ticket) => (
                                ticket.priority === 4 ? (
                                    <div className='task' key={ticket.id}>
                                        <div className='task__tags'>
                                            <span className='task__tag task__tag--design'>{ticket.priority}</span>
                                            <button className='task__options'><i className="fas fa-ellipsis-h"></i></button>
                                        </div>
                                        <p>{ticket.title}</p>
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

export default Priority
