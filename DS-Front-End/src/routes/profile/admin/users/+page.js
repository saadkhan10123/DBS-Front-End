/** @type {import('./$types').PageLoad} */
export async function load({ data, url }) {
    const searchParam = new URLSearchParams(url.searchParams)
    const searchUser = searchParam.get('param1')

    console.log(searchUser)
    return data
};