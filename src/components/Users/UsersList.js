import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user, idx) => (
          <li key={idx}>
            {user.username} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
