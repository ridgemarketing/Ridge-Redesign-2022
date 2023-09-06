import {useContext, useEffect} from "react";
import { ThemeContext } from "../../static/theme";

const CustomHeader = (props) =>{
    const context = useContext(ThemeContext);
    useEffect( () =>{
        context.updateHeaderBkgcolor(props.color);
    }, [])
  } 

export default CustomHeader;