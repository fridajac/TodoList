import ListItem from "./ListItem";
const List = (props) => {
  const listItems = props.toDoList.map((element, index) => (
    <ListItem key={index} value={element} />
  ));
  return (
    <div className="list">
      <ul>{listItems}</ul>
    </div>
  );
};

export default List;
