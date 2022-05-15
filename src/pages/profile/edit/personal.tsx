import Select from "@/components/forms/Select";
import TextField from "@/components/forms/TextField";
import { userContext } from "@/contexts";
import { useRecoilState } from "recoil";

const PersonalEdit = () => {
  const [user, setUser] = useRecoilState(userContext);
  const changeHandler = (e: any) =>
    setUser({ ...user, [e.target.name]: e.target.value });

    const selectHandler = (e: any) => console.log(e);

  return (
    <div className="grid xl:grid-cols-2 gap-4 p-4">
      <TextField
        name="name"
        label="نام و نام خانوادگی"
        onChange={changeHandler}
        value={user.name}
      />
      <TextField
        name="phone"
        type={"number"}
        label="شماره تلفن"
        onChange={changeHandler}
        value={user.phone}
      />
      <TextField label="استان سکونت" />
      <TextField
        name="birthday"
        label="سال تولد"
        onChange={changeHandler}
        value={user.birthday}
      />
      <Select onSelectHandler={selectHandler} />
      <TextField label="وضعیت تاهل" />
    </div>
  );
};

export default PersonalEdit;
