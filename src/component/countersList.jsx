import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id:0, value: 0 ,name:"Не нужная вещь"},
        {id:1, value: 4, name:"Ложка"},
        {id:2, value: 5, name:"Вилка"},
        {id:3, value: 0, name:"Тарелка"},
        {id:4, value: 0, name:"Набор минималиста"},
    ]

    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {
        const newCounters = counters.filter((count) => count.id !== id)
        setCounters(newCounters);
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    const handleIncrement = (id) => {
        const newIncrement = counters.map((count) => {
            if (count.id === id) {
                count.value += 1;
            }
            return count;
        })
        setCounters(newIncrement);

    };

    const handleDecrement = (id) => {
        const newDecrement = counters.map((count) => {
            if (count.id === id && count.value > 0) {
                count.value = count.value - 1;
            }
            return count;
        })
        setCounters(newDecrement);
    };

    return (
        <>
            {counters.map((count) =>
                (
                <Counter
                    key={count.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...count}
                />
                ))}

            <button className='btn btn-primary btn-sm m-2' onClick={handleReset}>Сброс</button>
        </>
    )

};


export default CountersList;