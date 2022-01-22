
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const CustomButton = (props) => {
    const { className, style, onClick, value } = props;

    return (
        value ?
            <button className="omnibar--arrow omnibar--next-arrow">
                <ArrowForwardIosIcon
                    className={className}
                    style={{
                        ...style,
                        color: "white",
                        width: '100px',
                        height: '100px',
                        padding: '10px'
                    }}
                    onClick={onClick}
                />
            </button>
            :
            <button className="omnibar--arrow omnibar--back-arrow">
                <ArrowBackIosNewIcon
                    className={className}
                    style={{
                        ...style,
                        color: "white",
                        right: "0px",
                        width: '100px',
                        height: '100px',
                        padding: '10px'
                    }}

                    onClick={onClick}
                />
            </button>
    )

}

export default CustomButton