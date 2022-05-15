import TextareaField from "@/components/forms/TextAreaField";
import { userContext } from "@/contexts";
import { useRecoilState } from "recoil";

const AboutEdit = () => {
  const [user, setUser] = useRecoilState(userContext);
  const setAboutUser = (text: string) => setUser({ ...user, about: text });
  return (
    <div className="p-4">
      <TextareaField
        onChange={(e) => setAboutUser(e.target.value)}
        value={user.about}
        label={`درباره خودت (حداکثر 600 کلمه) : ${user.about.length}`}
      />
    </div>
  );
};

export default AboutEdit;
