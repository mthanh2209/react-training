import { Link } from "react-router-dom";

export default function ExampleLink() {
    return (
        <>
            <Link to="/thinkInReact">
                <p>Think In React Example</p>
            </Link>
            <Link to="/useState">
                <p>Hook Example</p>
            </Link>
        </>
    )
}