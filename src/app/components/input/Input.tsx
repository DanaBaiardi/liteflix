import styles from "./input.module.scss";

interface InputProps {
  placeholder: string;
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <input className={styles.input} type="text" placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default Input;
