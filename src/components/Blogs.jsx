import PropTypes from "prop-types";
export default function Blogs({ children }) {
  return <div>{children}</div>;
}

Blogs.propTypes = {
  children: PropTypes.element,
};
