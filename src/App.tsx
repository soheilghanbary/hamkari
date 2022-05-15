import Layout from "@/components/layout";
import { RecoilRoot } from "recoil";
import Routers from "./routes";

const App = () => {
  return (
    <RecoilRoot>
      <Layout>
        <Routers />
      </Layout>
    </RecoilRoot>
  );
};

export default App;
