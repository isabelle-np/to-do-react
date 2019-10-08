import React, { Component } from "react";

const styles = {
    footer: {
        width: "100vw",
        height: "10%",
        backgroundColor: "red",
        flexShrink: "0"
    },
    credit: {
        textAlign: "left",
    }
};

class Footer extends Component {
    render() {
        return (
            <footer style={styles.footer}>
                <span style={styles.credit}>Designed & Developed by Isabelle Nguyen-Phuoc</span>
            </footer>
        )
    }
}
export default Footer;