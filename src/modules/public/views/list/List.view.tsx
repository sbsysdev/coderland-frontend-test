// react
import { Fragment, memo } from 'react';
// hooks
import { useList } from './useList.hook';
// components
import { Element } from '../../components';
// styles
import styles from './list.module.scss';

const ListView = memo(() => {
    const { loading, elementList } = useList();

    return (
        <main className={styles.wrapper}>
            {loading && <p>Loading...</p>}

            {!loading && elementList.length === 0 && <p>No results...</p>}

            {!loading && elementList.length > 0 && (
                <section className={styles.list}>
                    {elementList.map((element, index) => (
                        <Fragment key={index}>
                            <Element element={element} />
                        </Fragment>
                    ))}
                </section>
            )}
        </main>
    );
});

export default ListView;
