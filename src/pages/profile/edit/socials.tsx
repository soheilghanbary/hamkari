import TextField from "@/components/forms/TextField";
import { userContext } from "@/contexts";
import { useRecoilState } from "recoil";

const SocialsEdit = () => {
  const [user, setUser] = useRecoilState(userContext);
  const changeHandler = (text: string) => setUser({ ...user, website: text });
  return (
    <div className="grid xl:grid-cols-2 gap-4 p-4">
      <TextField label="Github" value={user.socials.github} />
      <TextField label="LinkedIn" />
      <TextField label="Instagram" />
      <TextField label="Twitter" />
      <TextField
        name="website"
        label="Website"
        onChange={(e) => changeHandler(e.target.value)}
        value={user.website}
      />
    </div>
  );
};

export default SocialsEdit;
