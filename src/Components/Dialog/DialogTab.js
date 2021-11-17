import "./styles.css";

const DialogTab = ({ isActive, title, children }) => {
  if (isActive) {
    return (
      <div className="dialogBg">
        <div className="dialog">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DialogTab;
