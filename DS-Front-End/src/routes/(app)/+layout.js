/** @type {import('./$types').LayoutLoad} */
// import Cookies from 'js-cookie';

export async function load({ data }) {
    return {
        user: data.user
    };
}