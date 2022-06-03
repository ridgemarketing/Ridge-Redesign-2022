export const Container = (props) => {
    let containerClass = props.slim ? `max-w-[${props.maxWidth}] mx-auto relative` : "container";
    let id             = props.id ? props.id : '';
    return (
        <div 
        id={id} 
        className={containerClass}>
            {props.children}
        </div>
    )
}

export const Section = (props) => {

    const defaults = {
        padding:  'py-12 px-0',
        bgColor:  'bg-white',
        position: 'relative',
        id: '',
        extras: ''
    }

    let padding         =  props.padding ? props.padding : defaults.padding;
    let backgroundColor =  props.bgColor ? props.bgColor : defaults.bgColor;
    let position        =  props.position ? props.position : defaults.position;
    let id              =  props.id ? props.id : defaults.id;
    let extras          =  props.extras ? props.extras : defaults.extras;

    return (
        <section 
        id={id} 
        className={`${padding} ${backgroundColor} ${position} ${extras}`}>
            {props.children}
        </section>
    )
}

export const BackgroundImage = (props) => {

    const defaults = {
        position: 'absolute',
        bgSize: 'bg-cover',
        top: 0,
        left: 0,
        width: 'w-full',
        height: 'h-full',
        bgRepeat: 'bg-no-repeat',
        id: ''
    }
    
    let position  =  props.position ? props.position : defaults.position;
    let bgSize    =  props.bgSize ? props.bgSize : defaults.bgSize;
    let top       =  props.top ? props.top : defaults.top;
    let left      =  props.left ? props.left : defaults.left;
    let width     =  props.width ? props.width : defaults.width;
    let height    =  props.height ? props.height : defaults.height;
    let bgRepeat  =  props.bgRepeat ? props.bgRepeat : defaults.bgRepeat;
    let id        =  props. id ? props.id : defaults.id;

    return (
        <div 
        id={id} 
        style={`background-image: url(${props.img})`} 
        className={`${position} ${bgSize} ${top} ${left} ${width} ${height} ${bgRepeat}`}>
            {props.children}
        </div>
    )
}
