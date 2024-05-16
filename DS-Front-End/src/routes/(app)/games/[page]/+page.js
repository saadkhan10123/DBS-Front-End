import { goto } from '$app/navigation';

/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
    return data;
}