import dbApi from '../api/dbApi';

const categoriasServices = () => {
    const obtenerCategoriasApi = async (nombre = '') => {
        const respuesta = {
            ok: false,
            data: [],
        };

        try {
            const url = nombre.length > 0
                ? `http://localhost:3000/Categorias?nombre_like=${ nombre }`
                : `http://localhost:3000/Categorias`
            const resp = await dbApi.get(
                url,
                {
                    headers: {
                        'Content-type' : 'application/json',
                    }
                }
            );
            if (resp.status && resp.status === 200 && resp.statusText && resp.statusText === 'OK') {
                respuesta.ok = true;
                respuesta.data = resp.data;
            }
        } catch (error) {
            console.log(error);
        }

        return respuesta;
    }

    const eliminarCategoriaApi = async (id: number) => {
        const respuesta = {
            ok: false,
            data: false,
        };

        try {
            const url = `http://localhost:3000/Categorias/${ id }`
            const resp = await dbApi.delete(
                url,
                {
                    headers: {
                        'Content-type' : 'application/json',
                    }
                }
            );
            if (resp.status && resp.status === 200 && resp.statusText && resp.statusText === 'OK') {
                respuesta.ok = true;
                respuesta.data = true;
            }
        } catch (error) {
            console.log(error);
        }

        return respuesta;
    }

    const grabarCategoriaApi = async (categoria: any) => {
        const respuesta = {
            ok: false,
            data: 0,
        };

        try {
            const resp = await dbApi.post(
                'http://localhost:3000/Categorias',
                categoria,
                {
                    headers: {
                        'Content-type' : 'application/json',
                    }
                }
            );                
            if (resp.status && resp.status === 201 && resp.statusText && resp.statusText === 'Created') {
                respuesta.ok = true;
                respuesta.data = resp.data.id;

                alert('El registro fue creado correctamente.')
            }
        } catch (error) {
            console.log(error);
        }

        return respuesta;
    }

    const editarCategoriaApi = async (categoria: any) => {
        const respuesta = {
            ok: false,
            data: false,
        };

        try {
            const resp = await dbApi.put(
                `http://localhost:3000/Categorias/${ categoria.id }`,
                categoria,
                {
                    headers: {
                        'Content-type' : 'application/json',
                    }
                }
            );
            if (resp.status && resp.status === 200 && resp.statusText && resp.statusText === 'OK') {
                respuesta.ok = true;
                respuesta.data = true;

                alert('El registro fue modificado correctamente.')
            }
        } catch (error) {
            console.log(error);
        }

        return respuesta;
    }

    const obtenerCategoriaPorIdApi = async (id: number) => {
        const respuesta = {
            ok: false,
            data: {},
        };

        try {
            const resp = await dbApi.get(
                `http://localhost:3000/Categorias/${ id }`,
                {
                    headers: {
                        'Content-type' : 'application/json',
                    }
                }
            );
            if (resp.status && resp.status === 200 && resp.statusText && resp.statusText === 'OK') {
                respuesta.ok = true;
                respuesta.data = resp.data;
            }
        } catch (error) {
            console.log(error);
        }

        return respuesta;
    }

    const obtenerProductosApi = async (nombre = '') => {
        const respuesta = {
            ok: false,
            data: [],
        };

        try {
            const url = nombre.length > 0
                ? `http://localhost:3000/Productos?nombre_like=${ nombre }`
                : `http://localhost:3000/Productos`
            const resp = await dbApi.get(
                url,
                {
                    headers: {
                        'Content-type' : 'application/json',
                    }
                }
            );
            if (resp.status && resp.status === 200 && resp.statusText && resp.statusText === 'OK') {
                respuesta.ok = true;
                respuesta.data = resp.data;
            }
        } catch (error) {
            console.log(error);
        }

        return respuesta;
    }

    const eliminarProductoApi = async (id: number) => {
        const respuesta = {
            ok: false,
            data: false,
        };

        try {
            const url = `http://localhost:3000/Productos/${ id }`
            const resp = await dbApi.delete(
                url,
                {
                    headers: {
                        'Content-type' : 'application/json',
                    }
                }
            );
            if (resp.status && resp.status === 200 && resp.statusText && resp.statusText === 'OK') {
                respuesta.ok = true;
                respuesta.data = true;
            }
        } catch (error) {
            console.log(error);
        }

        return respuesta;
    }

    const grabarProductoApi = async (producto: any) => {
        const respuesta = {
            ok: false,
            data: 0,
        };

        try {
            const resp = await dbApi.post(
                'http://localhost:3000/Productos',
                producto,
                {
                    headers: {
                        'Content-type' : 'application/json',
                    }
                }
            );                
            if (resp.status && resp.status === 201 && resp.statusText && resp.statusText === 'Created') {
                respuesta.ok = true;
                respuesta.data = resp.data.id;

                alert('El registro fue creado correctamente.')
            }
        } catch (error) {
            console.log(error);
        }

        return respuesta;
    }

    const editarProductoApi = async (producto: any) => {
        const respuesta = {
            ok: false,
            data: false,
        };

        try {
            const resp = await dbApi.put(
                `http://localhost:3000/Productos/${ producto.id }`,
                producto,
                {
                    headers: {
                        'Content-type' : 'application/json',
                    }
                }
            );
            if (resp.status && resp.status === 200 && resp.statusText && resp.statusText === 'OK') {
                respuesta.ok = true;
                respuesta.data = true;

                alert('El registro fue modificado correctamente.')
            }
        } catch (error) {
            console.log(error);
        }

        return respuesta;
    }

    const obtenerProductoPorIdApi = async (id: number) => {
        const respuesta = {
            ok: false,
            data: {},
        };

        try {
            const resp = await dbApi.get(
                `http://localhost:3000/Productos/${ id }`,
                {
                    headers: {
                        'Content-type' : 'application/json',
                    }
                }
            );
            if (resp.status && resp.status === 200 && resp.statusText && resp.statusText === 'OK') {
                respuesta.ok = true;
                respuesta.data = resp.data;
            }
        } catch (error) {
            console.log(error);
        }

        return respuesta;
    }

    return {
        obtenerCategoriasApi,
        eliminarCategoriaApi,
        grabarCategoriaApi,
        editarCategoriaApi,
        obtenerCategoriaPorIdApi,

        obtenerProductosApi,
        eliminarProductoApi,
        grabarProductoApi,
        editarProductoApi,
        obtenerProductoPorIdApi,
    };
};

export default categoriasServices;