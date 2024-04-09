import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";

// import { FaCross } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx";
const Filter = ({ addToFilterList, setItem, removeFromFilterList, filterCount, clearFilters }) => {

  const [select, setSelect] = React.useState({
    RPG: false,
    Puzzle: false,
    Racing: false,
    Fighting: false,
    Aiming: false,
    Mobile: false,
    Laptop: false,
    Quick: false,
    Heavy: false,
    '2D': false,
    '3D': false,
    Downloadable: false
  })

  // future scope: Add rating and downlaods filters 
  const menu = [
    {
      title: "Category",
      values: [
        { id: 1, name: "RPG" },
        { id: 2, name: "Puzzle" },
        { id: 3, name: "Racing" },
        { id: 4, name: "Fighting" },
        { id: 5, name: "Aiming" },
      ]
    },
    {
      title: "Dimensions",
      values: [
        { id: 1, name: "2D" },
        { id: 2, name: "3D" },
      ]
    },
    {
      title: "Game Size",
      values: [
        { id: 1, name: "Quick" },
        { id: 2, name: "Heavy" },
      ]
    },
    {
      title: "Device",
      values: [
        { id: 1, name: "Mobile" },
        { id: 2, name: "Laptop" },
      ]
    }
  ]



  const [selectDownloadable, setSelectDownloadable] = React.useState(false)
  return (
    <div className='flex flex-wrap justify-center mb-10 py-1 bg-slate-900'>
      {
        menu.map((val, i) => (
          <div
            key={i}
            className={`text-white p-1 my-2 px-3 mx-1 cursor-pointer shadow-sm bg-grad-hover justify-center items-center bg-slate-800 shadow-gray-600 rounded-full `}>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex justify-center items-center outline-none font-medium text-sm">
                {val.title}
                <TiArrowSortedDown className="flex items-center mt-1 mx-1" />
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                {val.values.map((value, item) => (
                  <DropdownMenuCheckboxItem
                    onSelect={(event) => event.preventDefault()}
                    key={value.id}
                    checked={select[value.name]}
                    onCheckedChange={() => {
                      // setSelect2D(!select[i])
                      setSelect((prev) => ({ ...prev, [value.name]: !prev[value.name] }))
                      if (!select[value.name]) {
                        addToFilterList(value.name)
                      } else {
                        removeFromFilterList(value.name)
                      }
                    }}
                  >
                    {value.name}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        ))
      }


      <div className={`${select.Downloadable ?
        "ml-1 my-2 text-center h-12 px-5 rounded-full items-center inline-flex text-sm font-medium bg-grad text-white"
        :
        "ml-1 my-2 text-center h-12 px-5 rounded-full items-center inline-flex text-sm font-medium shadow-sm bg-grad-hover bg-slate-800 shadow-gray-600"}`}
        onClick={() => {
          setSelect((prev) => ({ ...prev, ["Downloadable"]: !prev["Downloadable"] }))
          if (!select["Downloadable"]) {
            addToFilterList("Downloadable")
          } else {
            removeFromFilterList("Downloadable")
          }
        }}
      >
        Downloadable
      </div>


      <div
        className={`${filterCount > 0 ? "visible" : "invisible"} mx-2 my-2 p-1 px-3 flex items-center font-medium text-sm gap-2 cursor-pointer shadow-sm bg-grad-hover bg-slate-800  shadow-gray-600 rounded-full`}
        onClick={() => {
          clearFilters();
          const keys = ['RPG', 'Puzzle', 'Racing', 'Fighting', 'Aiming', 'Mobile', 'Laptop', 'Quick', 'Heavy', '2D', '3D', 'Downloadable'];
          setSelect(keys.reduce((obj, key) => ({ ...obj, [key]: false }), {}));
        }}>
        <RxCross2 size={20} />
        Clear Filters
      </div>


      {/* TODO: future scope all filters displayed under same hood(dropdown) */}
      {/* <Toggle className="my-2 mx-5">      //not  a toggle its a dropdown
          All
        </Toggle> */}
    </div>
  )
}

export default Filter