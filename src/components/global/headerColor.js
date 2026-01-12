import {useContext, useEffect, useLayoutEffect} from "react";
import { ThemeContext } from "../../static/theme";

const CustomHeader = (props) =>{
    const context = useContext(ThemeContext);
    useEffect( () =>{
        context.updateHeaderBkgcolor(props.color);
        context.updateHeaderPositionFunction(props.position)
    }, [])
  } 

export default CustomHeader;