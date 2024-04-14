import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <center>
        <hr />
        <br />
        <footer>
          <p>Copyright ⓒ Deepika {year}</p>
        </footer>
        <br />
      </center>
    </div>
  );
}

export default Footer;
