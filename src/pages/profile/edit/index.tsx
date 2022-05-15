import EditDetails from "@/components/edit/edit-details";
import { Outlet } from "react-router-dom";

const EditPage = () => {
  return (
    <div className="edit-container">
      <EditDetails />
      <div className="edit-outlet">
        <Outlet />
      </div>
      <div className="edit-info">
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default EditPage;
