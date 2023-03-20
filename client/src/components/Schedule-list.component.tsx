import React, { useEffect, useState} from "react";
import {useMutation, useQuery} from 'react-query';
import {CircularProgress} from "@mui/material";
import {AxiosError} from "axios";


import scheduleService from "../services/schedule.service";
import {EOrder, EQueryKeys, ID, ISchedule} from "../types/schedule.types";
import MyModal from "./UI/MyModal/MyModal";
import SchedulePost from "./Schedule-post";

interface IScheduleListProps {
    searchTitle: string
    orderName: EOrder
}

export const ScheduleList: React.FC<IScheduleListProps> = ({searchTitle, orderName}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isPostOpen, setIsPostOpen] = useState(false)
    const [currentId, setCurrentId] = useState('')

    const {data, isLoading, refetch} = useQuery<ISchedule[]>(EQueryKeys.ALL_SCHEDULE, scheduleService.getByTitle.bind(scheduleService, searchTitle, orderName))

    const {mutate: remove} = useMutation<void, AxiosError<any>, ID>((req,) => scheduleService.delete(req.id),
        {onSuccess: successRemove})

    function editSchedule(id: string) {
        setCurrentId(id)
        setIsOpen(true)
    }

    useEffect(() => {
        refetch()
    }, [isOpen, searchTitle, orderName])

    function successRemove(){
        refetch();
    }

    function save(id:ID){
        remove(id);
        successRemove();
    }

    if (isLoading) {
        return <CircularProgress/>
    }

    if (!data) {
        return <div>No Data</div>
    }

    return (
        <div className="">
            <div className="" >
                {data.map(el => (
                    <div key={el.id} className="post">
                        <strong className="text"> {el.title} </strong>
                        <p className="text">{el.description}</p>
                        <p className="text ">{el.price}</p>

                        <div className="">
                            <button style={{ marginRight:'10px'}} className={"btn btn-success button "} onClick={editSchedule.bind(this, el.id)}>change</button>
                            <button style={{ marginRight:'10px'}} className={"btn btn-danger "} onClick={()=>save(el)} >delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {isOpen ? <MyModal isOpen={isOpen} setIsOpen={setIsOpen} id={currentId} setId={setCurrentId}/> : null}
            {isPostOpen ? <SchedulePost isPostOpen={isPostOpen} setIsPostOpen={setIsPostOpen} /> : null}

            <button className={"btn btn-success add"}  onClick={()=>setIsPostOpen(true)} >Add</button>
        </div>
    )
}