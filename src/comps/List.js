import ListItem from "./ListItem";
const List = (props) => {
  const toDoList = ["Clean kitchen", "Buy milk", "Work out"];
  const listItems = toDoList.map((element, index) => (
    <ListItem key={index} value={element} />
  ));
  return (
    <div className="list">
      <ul>{listItems}</ul>
    </div>
  );
};

export default List;
