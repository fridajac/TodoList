import ListItem from "./ListItem";
const List = ({ todos }) => {
  const listItems = todos.map((element, index) => (
    <ListItem key={index} value={element} />
  ));
  return (
    <div className="list">
      {
        <ul style={{ listStyleType: "none", marginTop: "3rem" }}>
          {todos.map((element, index) => (
            <li key={index}>
              <ListItem value={element} />
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default List;
