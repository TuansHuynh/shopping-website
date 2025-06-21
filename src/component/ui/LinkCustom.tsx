import { Link } from "react-router-dom";

export default function LinkTargetBlank({to = '', children = '', className =''}){
    return (
        <div>
            <Link to = {to} className={`link-target-blank ${className}`}>
                {children}
            </Link>
        </div>
    );
}