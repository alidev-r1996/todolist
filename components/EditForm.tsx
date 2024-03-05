import axios from "axios";
import useEditTodo from "@/hook/useEditTodo";
import { EditTodoProps } from "@/Types/EditTodo.type";
import { useState, useEffect } from "react";
import TextInput from "@/common/inputField";
import toast from "react-hot-toast";

const EditForm: React.FC<EditTodoProps> = ({
  showEdit,
  setShowEdit,
  todos,
}) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { EditMutateAsync } = useEditTodo(todos._id);

  useEffect(() => {
    setTodo({ title: todos.title, desc: todos.desc });
  }, [todos]);

  const ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo((prev) => {
      return { ...prev, [name]: [value] };
    });
  };

  const AddTodoHandler = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      const msg = await EditMutateAsync({ ...todo, _id: todos._id });
      toast.success(msg || "");
      setTodo({ title: "", desc: "" });
      setShowEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        onClick={() => setShowEdit(!showEdit)}
        className={`${
          showEdit ? "block" : "hidden"
        } fixed left-0 top-0 z-40 bg-slate-900/70 w-full h-full`}
      ></div>
      <form
        className={`${
          showEdit ? "block" : "hidden"
        } bg-white p-4 shadow rounded flex flex-col gap-2 fixed z-50 md:w-1/3 left-1/2 -translate-x-1/2`}
      >
        <TextInput
          name={"title"}
          value={todo.title}
          handler={ChangeHandler}
          label={"Title"}
        />
        <TextInput
          name={"desc"}
          value={todo.desc}
          handler={ChangeHandler}
          label={"Description"}
        />
        <div className="flex items-center justify-end gap-2 mt-2">
          <button
            onClick={(event) => {
              event.preventDefault();
              setShowEdit(false);
            }}
            className="btn-primary"
          >
            Cancel
          </button>
          <button onClick={AddTodoHandler} className="btn">
            Confirm
          </button>
        </div>
      </form>
    </>
  );
};

export default EditForm;
