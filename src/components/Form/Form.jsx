const Form = (props) => {
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!props.inputText) {
      alert('Uzupełnij zadanie!');
      return;
    }
    props.setTodos([
      ...props.todos,
      {
        text: props.inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    props.setInputText('');
  };
  const statsuHandler = (e) => {
    props.setStatus(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          className="input"
          value={props.inputText}
          onChange={inputTextHandler}
          type="text"
        />
        <button
          onClick={submitTodoHandler}
          className="btn btn-success"
          type="submit"
        >
          ADD
        </button>
        <div className="form">
          <select
            onChange={statsuHandler}
            className="btn btn-outline-secondary dropdown-toggle"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
