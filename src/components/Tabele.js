import React from "react";

function Tabele({ tableData }) {
  return (
    <div>
      <table className="w-5/6 m-auto mt-4 border-8 border-black">
        <thead className="mt-10 border-2 border-black">
          <tr>
            <th className="bg-black text-white px-4 py-2 border-2 border-white">
              #
            </th>
            <th className="bg-black text-white px-4 py-2 border-2 border-white">
              Name
            </th>
            <th className="bg-black text-white px-4 py-2 border-2 border-white">
              Family
            </th>
            <th className="bg-black text-white px-4 py-2 border-2 border-white">
              Age
            </th>
            <th className="bg-black text-white px-4 py-2 border-2 border-white">
              Languages
            </th>
          </tr>
        </thead>
        <tbody>
          {/* داده‌های جدول */}
          {tableData.map((record, index) => (
            <tr key={index}>
              <td className="text-center text-white border-2 border-white bg-black">
                {index + 1}
              </td>
              <td className="border-2 border-black px-4 py-2">{record.name}</td>
              <td className="border-2 border-black px-4 py-2">
                {record.family}
              </td>
              <td className="border-2 border-black px-4 py-2">{record.age}</td>
              <td className="border-2 border-black px-4 py-2">
                {record.languages.join(", ")}
              </td>
            </tr>
          ))}

          <tr>
            <td className="text-center border-2 border-white h-10 bg-black">
              1
            </td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
          <tr>
            <td className="text-center border-2 border-white h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
            <td className="bg-zinc-300 border-2 border-black h-10"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tabele;
