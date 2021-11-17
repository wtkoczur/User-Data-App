import {useEffect} from 'react'

const style= {
    snackStyle: {
        width: 260,
        height: 35,
        display: "flex",
        justifyContent: "space-around",
        color: "#f1f2f6",

    },
    btn: {
        background: "transparent",
        border: 'none',
        color: "#f1f2f6",

    },
    p: {
        marginTop: 5
    }
}




const Snackbar = ({ isActive, handleOff, duration, positionName, colorName }) => {

const position = {
    "bottom-left": {borderRadius: 12,position: "absolute", bottom: 10, left: 10 },
    "bottom-right": {borderRadius: 12, position: "absolute", bottom: 10, right: 10 },
    "top-left": {borderRadius: 12, position: "absolute", top: 10, left: 10},
    "top-right": {borderRadius: 12, position: "absolute", top: 10, right: 10}
};

const color = {
    "error": {backgroundColor: "red" },
    "warning": {backgroundColor: "orange" },
    "success": {backgroundColor: "green" },
}


    useEffect(() => {
        handleOff(duration)
    })
    if(isActive) {
        //console.log({...position[positionName], ...color[colorName]})
      return(
      <div style={{...position[positionName], ...color[colorName]}}>
        <div style={style.snackStyle}>
            <p style={style.p}>Lorem ipsum dolor sit amet</p>
            <button
                onClick={handleOff}
                style={style.btn}
            >x</button>
        </div>
      </div>

    )
    } else {
      return null
    }
  }

  export default Snackbar;