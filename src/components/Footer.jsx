import React from "react"

var date = new Date();

var year = date.getFullYear();


function Footer() {
    return (
    <footer class="text-muted">
    <div class="container">
      <p class="float-center">
        <a href="#">Back to top</a>
      </p>
      <p>Copyright {year}</p>
    </div>
  </footer>
    )
  }

  export default Footer;