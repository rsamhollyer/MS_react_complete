import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHTTP from './hooks/useHTTP';

function App() {
  const requestConfig = {
    url: 'https://react-http-af080-default-rtdb.firebaseio.com/tasks.json',
  };

  const [tasks, setTasks] = useState([]);

  const transformedTasks = tasksObject => {
    const loadedTasks = [];

    Object.keys(tasksObject).forEach(key =>
      loadedTasks.push({ id: key, text: tasksObject[key].text })
    );

    setTasks(loadedTasks);
  };

  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHTTP(requestConfig, transformedTasks);

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = task => {
    setTasks(prevTasks => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  );
}

export default App;
