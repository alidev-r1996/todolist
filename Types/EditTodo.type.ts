export type EditTodoProps = {
  showEdit: Boolean;
  setShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
  todos: { title: string; desc: string; _id: number };
};
