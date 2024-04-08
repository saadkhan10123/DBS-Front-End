// placeholder svelte store for users

import { writable } from 'svelte/store';

export const users = writable([
    {
        name: "John Doe",
        email: "jdoe@gmail.com",
        password: "password",
        country: "US",
        admin: true
    },
    {
        name: "Jane Doe",
        email: "jadoe@gmail.com",
        password: "password",
        country: "US",
        admin: false
    },
    {
        name: "John Smith",
        email: "jsmith@gmai.com",
        password: "password",
        country: "UK",
        admin: false
    },
]);