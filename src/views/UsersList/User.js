export function User({ name, description, onDeleteUser }) {
  return (
    <div className="User">
      <h2>{name}</h2>
      <p>{description}</p>
      <DeleteButton onDelete={onDeleteUser}>Supprimer utilisateur</DeleteButton>
    </div>
  );
}
function DeleteButton({ onDelete, children }) {
  return <button onClick={onDelete}> X {children} </button>;
}
