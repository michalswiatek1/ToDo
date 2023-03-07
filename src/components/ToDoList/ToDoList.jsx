import Todo from '../Todo/Todo';

const TodoList = (props) => {
  return (
    <div className="container">
      <ul>
        {props.filteredTodos.map((todo) => (
          <Todo
            setTodos={props.setTodos}
            todos={props.todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
