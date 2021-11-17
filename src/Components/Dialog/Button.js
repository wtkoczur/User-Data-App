function Button({ btnName, handleClick, classInfo }) {
    return (
      <button onClick={handleClick} className={classInfo}>
        {btnName}
      </button>
    );
  }
  
  export default Button;
  