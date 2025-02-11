import { useCounterStore } from '@react-client-side-seed/stores/counter.store';

const HomePage = () => {
    const { count, increment } = useCounterStore();
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <div>{count}</div>
            <button type="button" onClick={increment}>
                increment
            </button>
        </div>
    );
};

export default HomePage;
