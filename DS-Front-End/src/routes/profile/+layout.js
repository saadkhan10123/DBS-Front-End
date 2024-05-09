/** @type {import('./$types').LayoutLoad} */
export async function load({ data }) {

    console.log(data)
    return {
        user: data.userInfo
    };
}