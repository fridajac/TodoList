import ListItem from "./ListItem";
const List = ({ todos }) => {
  const deleteItem = (e) => {
    e.preventDefault();
    console.log("hallååå");
  };

  return (
    <div className="list">
      {
        <ul style={{ listStyleType: "none", marginTop: "3rem" }}>
          {todos.map((element, index) => (
            <li key={index} style={{ marginTop: "1.5rem" }}>
              <ListItem value={element} deleteItem={deleteItem} />
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default List;
