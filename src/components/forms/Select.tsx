import { ArrowUpIcon } from "@/assets/icons/icons";
import { userContext } from "@/contexts";
import { SelectItemProps, SelectProps } from "@/interfaces";
import { FC, useState } from "react";
import { useRecoilState } from "recoil";

const options = [
  {
    key: "male",
    label: "آقا",
  },
  {
    key: "female",
    label: "خانم",
  },
  {
    key: "intersex",
    label: "دو جنسه",
  },
];

const Select: FC<SelectProps> = ({ onSelectHandler }) => {
  const [showSelect, setShowSelect] = useState(false);
  const [user , setUser] = useRecoilState(userContext)
  const [selected, setSelected] = useState(user.gender);
  const toggleSelect = () => setShowSelect(!showSelect);
  const setSelectHandler = (item: SelectItemProps) => {
    setSelected(item);
    onSelectHandler(item);
  };

  return (
    <div className="select">
      <label>جنسیت</label>
      <button
        className={`field ${showSelect ? "active" : ""}`}
        onClick={toggleSelect}
        onBlur={toggleSelect}
      >
        <span>{selected.label.length ? selected.label : "هیچکدام"}</span>
        <ArrowUpIcon />
      </button>
      <ul className={`list ${showSelect ? "active" : ""}`}>
        {options.map((option) => (
          <li onClick={() => setSelectHandler(option)}>{option.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
