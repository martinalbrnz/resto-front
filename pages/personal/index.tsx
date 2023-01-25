import { staff } from "@constants/mock";
import StaffList from "@shared/Staff/StaffList";

const Personal = () => {
  return (
    <div>
      <StaffList staff={staff} />
    </div>
  );
};

export default Personal;
