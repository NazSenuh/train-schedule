import React, {useEffect, useState} from 'react';
import {Modal} from "@mui/material";
import {useMutation, useQuery, useQueryClient} from "react-query";
import  {AxiosError} from "axios";

import {EQueryKeys, ICreateSchedule, IMutate, ISchedule} from "../types/schedule.types";
import scheduleService from "../services/schedule.service";


interface IMyModalProps {
    isPostOpen: boolean
    setIsPostOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SchedulePost: React.FC<IMyModalProps> = ({isPostOpen, setIsPostOpen}) => {
    const [schedule, setSchedule] = useState<{[key: string]: string }>({})
    const { refetch} = useQuery<ISchedule[]>(EQueryKeys.ALL_SCHEDULE, scheduleService.getAllTrains.bind(scheduleService))



    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)

    const { mutate: modify } = useMutation<string, AxiosError<any>, ICreateSchedule>((req) =>
        scheduleService.createNewSchedule(req),{onSuccess: successRemove})

    function closeHandler() {
        setIsPostOpen(false)
    }

    function successRemove(){
        refetch()
    }
    function save(){
        modify({title, description, price})
        successRemove()
        setIsPostOpen(false)
    }


    return (
        <Modal open={isPostOpen} onClose={closeHandler}  >
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>

                <input
                    placeholder={'title'}
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    placeholder={'description'}
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
                <input
                    placeholder={'price'}
                    type="number"
                    pattern="[0-9]*"
                    value={price}
                    onChange={event => setPrice(event.target.valueAsNumber)}
                />

                <button onClick={save}>save</button>
            </div>
        </Modal>

    );
};

export default SchedulePost;