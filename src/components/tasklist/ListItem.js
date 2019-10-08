import React, { PureComponent } from "react";
import ListBody from './ListBody';

const styles = {
    li: {
        display: "flex",
        justifyContent: "flex-start",
        background: "#252525",
        boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
        color: "rgb(206, 206, 206)",
        marginBottom: "1.5em",
        cursor: "pointer",
        borderRadius: "5px",
    },
    leftWall: color => ({
        width: "7%",
        backgroundColor: color,
        borderRadius: "5px 0 0 5px"
    })
};

export default class ListItem extends PureComponent {
    render() {
        return (
            <li 
                style={styles.li}
                onClick={() => this.props.handleOnClick(this.props.id)}
                onMouseEnter={() => this.props.handleOnEnter(this.props.id)}
                onMouseLeave={() => this.props.handleOnLeave(this.props.id)}

            >
                <div style={styles.leftWall(this.props.completed ? "#3D9970" : "#FF4136")}/>
                <ListBody name={this.props.name} description={this.props.description}/>
            </li>
        )
    }
};