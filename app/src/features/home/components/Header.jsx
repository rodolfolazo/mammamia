import PropTypes from "prop-types";

const Header = ({ title, description, image }) => {
  console.log(image)
  return (
    <>
      <header className="header" style={{ '--bg-image': `url(${image})` }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Header
