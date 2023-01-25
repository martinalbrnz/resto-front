import { Role } from "@models/Role";
import { Staff } from "@models/Staff.model";
import { ReactElement } from "react";
import { FaFireAlt, FaPizzaSlice, FaUserTie } from "react-icons/fa";
import styles from "./staff-list.module.scss";

export interface StaffProps {
  staff: Staff[];
}

const StaffList = (props: StaffProps): ReactElement => {
  function getIcon(role: Role) {
    switch (role) {
      case Role.Cook:
        return <FaFireAlt />;
      case Role.Manager:
        return <FaUserTie />;
      case Role.Waiter:
        return <FaPizzaSlice />;
      default:
        return <FaFireAlt />;
    }
  }
  return (
    <div className={styles.staffContainer}>
      {props.staff.map((member: Staff) => {
        return (
          <div className={styles.memberTile}>
            {getIcon(member.role)}
            <span>
              {member.name} {member.lastName}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StaffList;
