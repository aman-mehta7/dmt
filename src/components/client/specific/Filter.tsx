/* eslint-disable @typescript-eslint/no-explicit-any */
import { Svg } from "../../../assets";
import { AutoComplete, DatePicker, Select, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../hooks/useTypedSelectors";
import { RootAppState } from "../../../redux/store";

const { RangePicker } = DatePicker;

const items = [
  { label: "Places", value: "places" },
  { label: "Events", value: "events" },
];

const Filter = () => {
  const navigate = useNavigate();
  const { places } = useAppSelector((state: RootAppState) => state.places);
  const [selectCategory, setSelectCategory] = useState<string>(items[0].value);
  const [selectDestination, setSelectDestination] = useState<string>("");
  const { events } = useAppSelector((state: RootAppState) => state.events);
  const [dates, setDates] = useState<{
    start: string;
    end: string;
  }>({
    start: "",
    end: "",
  });

  const onExplore = () => {
    const { start, end } = dates;

    if (!start || !end)
      return message.error(`Please select a start and an end date.`);

    if (!selectDestination)
      return message.error(`Please select your destination`);

    navigate(
      `/search?start=${start}&end=${end}&type=${selectCategory}&destination=${selectDestination}`
    );
  };

  const isCategoryPlaces = selectCategory === "places";
  const locations = (isCategoryPlaces ? places : events)
    .map((item: any) => {
      if (isCategoryPlaces) {
        return {
          value: item.street,
        };
      } else
        return {
          value: item.location,
        };
    })
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.value === item.value)
    );

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-8 border border-primary bg-white rounded-lg w-full overflow-hidden`}
    >
      <div
        className={`flex gap-2 justify-start items-center cursor-pointer py-5 px-4 md:p-4 border border-primary`}
      >
        <img src={Svg.calender} alt="calender icon" />
        <RangePicker
          suffixIcon={null}
          bordered={false}
          onChange={(_: any, dateStrings: string[]) => {
            const start = dateStrings[0];
            const end = dateStrings[1];

            setDates({
              start,
              end,
            });
          }}
          className={`w-full`}
        />
      </div>
      <div
        className={`flex gap-2 justify-start items-center border border-primary cursor-pointer py-5 px-4 md:p-4`}
      >
        <img src={Svg.clock} alt="clock icon" />
        <Select
          variant="borderless"
          defaultValue={selectCategory}
          style={{ height: "100%", width: "100%" }}
          onChange={(value: string) => setSelectCategory(value)}
          options={items}
        />
      </div>
      <div
        className={`flex gap-2 justify-start items-center cursor-pointer py-5 px-4 md:p-4 border border-primary`}
      >
        <img src={Svg.marker} alt="marker icon" />
        <AutoComplete
          variant="borderless"
          style={{ width: `100%` }}
          options={locations}
          placeholder="Enter your destination"
          onChange={(value: string) => setSelectDestination(value)}
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <button
        type="button"
        onClick={onExplore}
        className={`bg-primary py-4 xl:rounded-tr-md lg:rounded-l-none rounded-t-none rounded-b-md sm:rounded-bl-none`}
      >
        <span className={`text-xl text-white font-bold`}>Explore</span>
      </button>
    </div>
  );
};

export default Filter;
