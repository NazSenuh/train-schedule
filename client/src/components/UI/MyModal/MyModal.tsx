import React, {useState} from 'react';
import {CircularProgress, Modal} from "@mui/material";
import {useMutation, useQuery} from "react-query";
import {AxiosError} from "axios";

import {EQueryKeys, ICreateSchedule, IMutate, ISchedule} from "../../../types/schedule.types";
import scheduleService from "../../../services/schedule.service";
import cl from'./MyModal.module.css'


interface IMyModalProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    id: string
    setId: React.Dispatch<React.SetStateAction<string>>
}

const MyModal: React.FC<IMyModalProps> = ({isOpen, setIsOpen, id, setId}) => {
    const [schedule, setSchedule] = useState<{[key: string]: string}>({})

    const {data, isLoading} = useQuery<ISchedule>(EQueryKeys.ONE_SCHEDULE, scheduleService.getOne.bind(scheduleService, id))

    const { mutate: modify} = useMutation<string, AxiosError<any>, ICreateSchedule>((req) =>
        scheduleService.createNewSchedule(req))

    const {mutate} = useMutation<string, AxiosError<any>, IMutate>((req) => scheduleService.modify(req.id, req.data),
        {onSuccess: successHandler}
    )
    function successHandler() {
        closeHandler()
    }

    function closeHandler() {
        setId('')
        setIsOpen(false)
    }

    function saveChanges() {
        mutate({id, data: {...schedule}})
    }

    function changeHandler(event:  React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        const field = event.target.placeholder

        const obj = schedule
        obj[field] = value

        setSchedule({...obj})
    }

    if (isLoading){
        return <CircularProgress />
    }

    if (!data) {
        return <div>No Data</div>
    }

    return (
        <Modal open={isOpen} onClose={closeHandler} >
            <div className={cl.center}>
                {Object.entries(data).map(([key, val]) => {
                    if (key === 'id') return null

                    return (<input
                        placeholder={key}
                        value={(schedule[key]) ?? val}
                        onChange={changeHandler}
                    />
                )})}
                <button onClick={saveChanges}>save</button>
            </div>
        </Modal>
    );
};

export default MyModal;