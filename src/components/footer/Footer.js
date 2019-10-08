import React, { Component } from "react";

const styles = {
    footer: {
        marginTop: "4em"
    },
    credit: {
        fontSize: "0.9em"
    }
};

class Footer extends Component {
    render() {
        return (
            <footer style={styles.footer}>
                <p style={styles.credit}>Designed & Developed by <a href="https://www.linkedin.com/in/isabellenguyenphuoc/">Isabelle Nguyen-Phuoc</a></p>
            </footer>
        )
    }
}
export default Footer;