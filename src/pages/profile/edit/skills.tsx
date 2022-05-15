import Select from "@/components/forms/Select";
import TextField from "@/components/forms/TextField";
import { FormEvent, useRef, useState } from "react";

interface SkillItemProps {
  id: string;
  label: string;
}

const SkillsEditPage = () => {
  const [skills, setSkills] = useState<SkillItemProps[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const ref = useRef<HTMLInputElement>(null);

  const addSkill = (e: FormEvent) => {
    e.preventDefault();
    const newSkill: SkillItemProps = {
      id: new Date().getMilliseconds().toString(),
      label: ref.current?.value || "",
    };
    setSkills([...skills, newSkill]);
    formRef.current?.reset();
  };

  const removeSkill = (id: string) => {
    const updatedList = skills.filter((item) => item.id !== id);
    setSkills(updatedList);
  };

  return (
    <>
      <div className="flex flex-col w-full p-4">
        <form onSubmit={addSkill} ref={formRef}>
          <TextField
            label="مهارت ها"
            placeholder="مثلا: برنامه نویسی وب"
            ref={ref}
          />
        </form>
        <ul className="flex items-center gap-2 mt-6 flex-wrap w-full">
          {skills.map((skill) => (
            <li
              className="py-2 px-4 rounded-lg dark:bg-darkest bg-lightest whitespace-nowrap leading-6 text-sm hover:text-rose-400 duration-200 cursor-pointer"
              onClick={() => removeSkill(skill.id)}
              key={skill.id}
            >
              {skill.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SkillsEditPage;
