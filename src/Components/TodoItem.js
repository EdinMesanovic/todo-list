const TodoItems = ({ todoItems, removeListItem }) => {
  return (
    <div className='todo-items'>
      {todoItems.map((item) => {
        return (
          <div
            className='todo-item'
            key={item}
            onClick={() => removeListItem(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
