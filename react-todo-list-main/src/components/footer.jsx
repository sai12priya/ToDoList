import React from "react";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3 mt-auto" style={{ backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "center", position: "fixed", bottom: "0", left: "0", width: "100%" }}>
      <div class="container text-center">
        <span class="text-muted">
          Made by Sai Priyanka{" "}
          <a href="https://www.linkedin.com/in/sai-priyanka-412378247/">
            <img src="https://i.ibb.co/hYg8sm7/linked-In-PNG9.png" alt="logo" style={{ width: "25px", height: "25px", objectFit: "contain", verticalAlign: "middle",marginLeft:'5px' }} />
          </a>
        </span>
      </div>
    </footer>


  );
};

export default Footer;