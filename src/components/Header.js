import PropTypes from "prop-types";
import "@/index.less";
import Button from "@/components/Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "Red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      ></Button>
    </header>
  );
};
Header.defaultProps = {
  title: "Tasks Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = {
//   color: "red",
//   backgroundColor: "blue",
// };
export default Header;
