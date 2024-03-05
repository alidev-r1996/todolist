import { InputPropsType } from "@/Types/InputField.type";

const TextInput: React.FC<InputPropsType> = ({name, value, handler, label}) => {
    return ( 
        <input
        type="text"
        name={name}
        value={value}
        onChange={handler}
        id={name}
        placeholder={label}
        className="inputField"
        required
      />
     );
}
 
export default TextInput;