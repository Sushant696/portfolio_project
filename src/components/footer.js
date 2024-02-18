import React from "react";
import form from "../images/form.png";
import { Facebook, Instagram, Sms } from "iconsax-react";

function Footer() {
  return (
    <div className="w-full">
      <div className="flex justify-center flex-col items-center gap-4 mt-20">
        <div className="flex justify-center gap-6">
          <Instagram size={40} variant="Bulk" />
          <Facebook size={40} variant="Bulk" />
          <Sms size={40} variant="Bulk" />
        </div>
        <p> Copyright © 2024 Sakshyam </p>
      </div>
      <img src={form} alt="" className="w-full" />
    </div>
  );
}

export default Footer;
