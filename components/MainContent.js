import React from "react";
import { Menu, Combobox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function MainContent({ data }) {
  const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);
  const myrange = range(1, 30);
  const suff = myrange.map(
    (number) => data[`compare-tabs_1_city_${number}_name`]
  );
  const [cityKey, setCityKey] = useState("");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(suff[0]);
  const [townNo, setTownNo] = useState();

  useEffect(() => {
    const citiesSelected = [data];

    const selectedItem = citiesSelected.find((element) => {
      const obj = [element];

      for (var i = 0; i < obj.length; i++) {
        for (var key in obj[i]) {
          if (obj[i][key].indexOf(selected.toString()) != -1) {
            if (key.includes(`compare-tabs_1_city`)) {
              const result = key.toString().includes(`compare-tabs_1_city`);
              setCityKey(key.toString());
              const replaced = cityKey.slice(20, -5);

              setTownNo(replaced);
            }
          }
        }
      }
    });
    console.log(selectedItem);
  }, [selected]);

  const filteredCities =
    query === ""
      ? suff
      : suff.filter((filterData) =>
          filterData
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <main className="relative max-w-7xl mx-auto px-8 sm:px-16 z-0 mt-2 sm:mt-4 md:mt-8">
      <section className="py-6 justify-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold pb-5 text-center text-gray-800 ">
          {data.p_1_value}
        </h2>
        <p className="text-sm sm:text-md font-bold text-gray-800">
          Number of cities : {data.total_cities_1_value}
        </p>
        <p className="text-md sm:text-lg text-gray-600 mt-5">
          {data.p_2_value}
        </p>
        <p className="text-md sm:text-lg text-gray-600 mt-5">
          {data.p_3_value}
        </p>
        <p className="text-md sm:text-lg text-gray-600 mt-5">
          {data.p_4_value}
        </p>
        <p className="text-md sm:text-lg text-gray-600 my-5">
          {data.p_5_value}
        </p>
        <div className="justify-center flex flex-row">
          <div className="flex flex-col">
            {/*search combo box*/}
            <Combobox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <h1 className="font-bold text-lg text-gray-800 mb-3 text-center">
                  {data["compare-tabs_1_title"]}
                </h1>
                <div className="relative w-full  border-none text-left bg-white rounded-lg shadow-md cursor-pointer border-2 border-gray-300  focus:shadow-xl focus:shadow-gray-400 sm:text-sm overflow-hidden">
                  <Combobox.Input
                    className="w-full bg-white border-0 focus:outline-white  focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
                    displayValue={(fill) => fill}
                    placeholder={data["compare-tabs_1_title"]}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <SelectorIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}
                >
                  <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60  sm:text-sm">
                    {filteredCities.length === 0 && query !== "" ? (
                      <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>
                    ) : (
                      filteredCities.map((comon) => {
                        //console.log(comon);
                        return (
                          <Combobox.Option
                            key={comon}
                            className={({ active }) =>
                              `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                active
                                  ? "text-white bg-teal-600"
                                  : "text-gray-900"
                              }`
                            }
                            value={comon}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {comon}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-teal-600"
                                    }`}
                                  >
                                    <CheckIcon
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        );
                      })
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
            {townNo && (
              <div className="flex flex-row sm:max-w-7xl space-x-20 mt-7">
                <div className="flex flex-col text-center">
                  <p className="font-bold text-lg text-gray-800">
                    Air Quality Index
                  </p>
                  <p className="font-bold text-3xl text-gray-600">
                    {data[`compare-tabs_1_city_${townNo}_aqi`]}
                  </p>
                </div>
                <div className="flex flex-col text-center">
                  <p className="font-bold text-lg text-gray-800">CIGG</p>
                  <p className="font-bold text-3xl text-gray-600">
                    {data[`compare-tabs_1_city_${townNo}_cigg`]}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="text-md sm:text-lg font-bold text-gray-800 mt-5">
          {data.p_6_value}
        </p>
        <p className="text-md sm:text-lg text-gray-600 mt-5">
          {data.p_7_value}
        </p>
        <p className="text-md sm:text-lg text-gray-600 mt-5">
          {data.p_8_value}
        </p>
        <p className="text-md sm:text-lg text-gray-600 mt-5">
          {data.p_9_value}
        </p>
        <p className="text-md sm:text-lg text-gray-600 my-5">
          {data.p_10_value}
        </p>
      </section>
    </main>
  );
}

export default MainContent;
