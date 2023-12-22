// react
import { memo } from 'react';

const Fallback = memo(() => {
    return (
        <main className="">
            <span className="">Loading...</span>
        </main>
    );
});

export default Fallback;
