// user authentication file
import GUN from 'gun'

import 'gun/sea'; // stands for security, encryption, auth
import 'gun/axe'; // this is what connect to the peer gun server
// @ts-ignore
import { writable } from 'svelte/store'; //for a reactive username
//Database
export const db = GUN();

// Gun user
export const user = db.user().recall({sessionStorage: true});

// current user's username
export const username = writable(''); //it will re-render comp whenever its value is changed
user.get('alias').on(v => username.set(v))
db.on('auth', async(event)=>{
    const alias = await user.get('alias');
    username.set(alias);
});