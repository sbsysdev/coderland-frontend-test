// react
import { memo } from 'react';
import { Link } from 'react-router-dom';

const NotFound = memo(() => {
    return (
        <main className="">
            <div className="">
                <h1 className="">CoderLand</h1>

                <span className="">Página no encontrada 404</span>

                <Link to="/" replace className="">
                    Regresar a Inicio
                </Link>
            </div>
        </main>
    );
});

export default NotFound;
