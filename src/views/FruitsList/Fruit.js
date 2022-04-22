export function Fruit({ name, description, onDeleteFruit }) {
  return (
    <div className="Fruit">
      <h2>{name}</h2>
      <p>{description}</p>
      <DeleteButton onDelete={onDeleteFruit}>Supprimer fruit</DeleteButton>
    </div>
  );
}
function DeleteButton({ onDelete, children }) {
  return <button onClick={onDelete}> X {children} </button>;
}
