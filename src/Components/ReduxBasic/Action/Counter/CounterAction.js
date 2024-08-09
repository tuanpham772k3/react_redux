import { DECREMENT, INCREMENT } from "./CounterType";

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};
export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};