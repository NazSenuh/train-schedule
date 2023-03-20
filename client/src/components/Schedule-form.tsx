import React, {useEffect, useState} from "react";
import {EOrder} from "../types/schedule.types";

interface IScheduleSearchProps {
    setTitle: React.Dispatch<React.SetStateAction<string>>
    setOrder: React.Dispatch<React.SetStateAction<EOrder>>
}

export const ScheduleSearch: React.FC<IScheduleSearchProps> = ({setTitle, setOrder}) => {
    const [searchData, setSearchData] = useState<string>('')

    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        setSearchData(value)
    }

    function selectHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value as EOrder
        setOrder(value)
    }

    function search() {
        setTitle(searchData)
    }



    useEffect(() => {
        if (!searchData) {
            search()
        }
    }, [searchData])

    return (
        <div className="mb-3 d-flex align-items-center justify-content-between">
            <div className="form-group" style={{width:'92%', marginRight:'10px', marginLeft:"10px"}}>

                <div style={{ marginTop:'10px'}}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchData}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <select style={{margin:'5px'}} onChange={selectHandler}>
                        <option value='price'>
                            За ціною
                        </option>
                        <option value="description">
                            За часом
                        </option>
                    </select>
                </div>

            </div>

            <button className="btn btn-success mt-7 search" onClick={search}>Search</button>
        </div>
    );
};

