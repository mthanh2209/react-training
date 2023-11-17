import { Link } from "react-router-dom";

export default function ExampleLink() {
    return (
        <>
            <Link to="/thinkInReact">
                <p>Think In React Example</p>
            </Link>
            <Link to="/hookExample">
                <p>Hook Example</p>
            </Link>
            <Link to="/propsExample">
                <p>Props Example</p>
            </Link>
            <Link to="/renderingLists">
                <p>Render Example</p>
            </Link>
        </>
    )
}