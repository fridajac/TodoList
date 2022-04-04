import ListItem from "./ListItem";
const List = () => {
  const toDoList = ["Clean kitchen", "Buy milk", "Work out"];
  const listItems = toDoList.map((element) => <ListItem value={element} />);
  return (
    <div className="list">
      <ul>{listItems}</ul>
    </div>
  );
};

export default List;
