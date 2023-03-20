import React, {useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ScheduleList} from "./components/Schedule-list.component";
import {Header} from "./components/Header";
import {ScheduleSearch} from "./components/Schedule-form";
import {EOrder} from "./types/schedule.types";

const client = new QueryClient()

function App() {
    const [searchTitle, setSearchTitle] = useState('')
    const [orderName, setOrderName] = useState(EOrder.DESCRIPTION)

    return (
    <div>
        <QueryClientProvider client={client}>
            <Header/>
            <main>

                <ScheduleSearch setTitle={setSearchTitle} setOrder={setOrderName}/>
                <hr style={{margin:'10px'}} />

                <ScheduleList searchTitle={searchTitle} orderName={orderName}/>
            </main>
        </QueryClientProvider>
    </div>
  );
}

export default App;
