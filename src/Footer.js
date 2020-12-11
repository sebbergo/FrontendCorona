import React from "react";

const FooterPage = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2>About us</h2>
            <li>We hope we pass exam</li>
            <li>We love COD WZ</li>
            <li>Our group is call Kernen</li>

          </div>
          {/* Column2 */}
          <div className="col">
            <h2>Members</h2>
            <ui className="list-unstyled">
              <li>Lukas Bang Stoltz</li>
              <li>Sebastian Godsk Hansen</li>
              <li>Sumit Dey</li>
              <li>Phillip Andersen</li>
              <li>Christoffer Wegner</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h2>Random Stuff</h2>
            <ui className="list-unstyled">
              <li>Oksem Bilah</li>
              <li>Sucuk durum kebab</li>
              <li>Eid sugerah</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            KERNEN FOR WZ | All rights reserved |
            Terms Of Service | You have to love playing warzone
        </p>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
