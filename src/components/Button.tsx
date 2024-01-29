import {type ReactNode, type CSSProperties} from "react";
import {Link} from "react-router-dom";
interface ButtonProps {
    children: ReactNode;
    to?: string,
    style: CSSProperties,
}
function Button({to, children, style, }: ButtonProps) {
    if (to) {
        return (
            <Link to={to!} style={style}>{children}</Link>
        )
    } else {
        return (
            <button style={style}>{children}</button>

        )
    }
}
export default Button;