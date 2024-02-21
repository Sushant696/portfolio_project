import React from "react";
import skills from "../../images/Skills.png";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("your form has been submitted");
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-center my-[30px]">
        <h1 className="text-[30px] m-1">Projects</h1>
        <hr className="w-20 font-bold h-[10] mx-auto border border-black"/>
      </div>
      <div className="flex w-[75%] justify-center">
        <div className=" w-[55%]  flex flex-col items-center">
          <h1 className="text-[32px] font-bold text-left mb-4">Let's work together</h1>
          <p className="w-[70%]">
            Are you ready to bring your vision to life? Let's join forces and
            turn your ideas into reality! Whether you're looking to build a
            stunning website, craft compelling content, or develop a winning
            marketing strategy, I'm here to help. With a focus on collaboration,
            creativity, and results, together, we can achieve greatness. Let's
            connect and embark on this exciting journey together. Reach out
            today, and let's work together to make your dreams a reality!
          </p>
        </div>
        <div className="w-[45%]">
          <form action="submit" className="flex flex-col items-center gap-5">
            <input
              type="text"
              placeholder="Name"
              // value=""
              className="border p-2 rounded-[4px] w-[60%] bg-[#F3F3F3]"
            />
            <input
              type="text"
              // value=""
              placeholder="Email"
              className="border p-2 rounded-[4px] w-[60%] bg-[#F3F3F3]"
            />
            <textarea
              name=""
              // value=""
              className="border p-2 rounded-[4px] w-[60%] bg-[#F3F3F3]"
              cols="10"
              rows="6"
              placeholder="Type your message here"
            ></textarea>
            <button
              onClick={handleSubmit}
              type="submit"
              className="inline-block px-4 py-2 text-white bg-[#D2B687] rounded-lg shadow-md focus:ring-opacity-50 font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-20 text-[32px] font-bold">Tools and Technof logies</h1>
        <img src={skills} alt="" />
      </div>
    </div>
  );
}

export default Contact;
