import React, { useState } from "react";

function Form({
  name,
  setName,
  family,
  setFamily,
  age,
  setAge,
  languages,
  setLanguages,
  onAdd,
}) {
  const handleToggleChange = (language) => {
    setLanguages((prevLanguages) => ({
      ...prevLanguages,
      [language]: !prevLanguages[language],
    }));
  };

  return (
    <div className="flex justify-center items-center mt-10     ">
      <div className="bg-black w-5/6 h-[500px] rounded-r-3xl flex justify-center items-center rounded-3xl">
        <div className="h-full w-full">
          <img
            src="https://blog.yar.cloud/wp-content/uploads/2020/10/resume-min.jpg"
            alt=""
            className="h-full rounded-l-3xl opacity-40"
          />
        </div>
        <div className="h-full w-full flex flex-col justify-start items-end gap-3 p-10 rounded-r-3xl text-white">
          <div className="flex justify-center items-center gap-5 w-3/4">
            <h4>Name 💬</h4>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="my Name is"
              className="h-10 w-80 mt-2 text-black p-5"
            />
          </div>
          <div className="flex justify-center items-center gap-5 w-3/4">
            <h4>Family 💬</h4>
            <input
              type="text"
              value={family}
              onChange={(event) => setFamily(event.target.value)}
              placeholder="My last name is"
              className="h-10 w-80 mt-2 text-black p-5"
            />
          </div>
          <div className="flex justify-center items-center gap-5 w-3/4">
            <h4>Age 💬</h4>
            <input
              type="text"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              placeholder="It is my age"
              className="h-10 w-80 mt-2 ml-5 text-black p-5"
            />
          </div>
          <h1>شما به چه زبان برنامه نویسی مسلط هستید؟ 💬</h1>
          <div className=" mt-4 h-full w-full">
            <div className="mt-10 flex  justify-center items-start gap-3">
              {Object.keys(languages).map((language) => (
                <div key={language} className="flex items-center gap-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={languages[language]}
                      onChange={() => handleToggleChange(language)}
                      className="sr-only peer "
                    />
                    <div className="w-11 h-6 bg-slate-500 rounded-full peer peer-checked:bg-blue-500 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 transition-all duration-300 ease-in-out"></div>
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-5 h-5 bg-white border rounded-full transition-transform duration-300 ease-in-out transform ${
                        languages[language] ? "translate-x-5" : ""
                      }`}
                    ></div>
                  </label>
                  <span>{language}</span>
                </div>
              ))}
            </div>
            <div className="  flex justify-center items-center mt-10">
              <button
                onClick={onAdd}
                className=" bg-white w-28 h-10 text-black rounded-xl hover:bg-blue-500 font-bold"
              >
                Add resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
