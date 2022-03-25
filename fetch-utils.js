const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnenNmc3Fhb2h0a3Z5d2x1a3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgxMzc4NzMsImV4cCI6MTk2MzcxMzg3M30.om7bZuYtorq0m3djqz_kSD3Nk_4yrHIUjDusyXl-Z9s';

const SUPABASE_URL = 'https://lgzsfsqaohtkvywluksc.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createPoll(pollQuest, optOneInput, optTwoInput,
    optOneVotes, optTwoVotes) {
    const response = await client
        .from('poll')
        .insert([
            {
                question: pollQuest,
                option_one: optOneInput,
                option_two: optTwoInput,
                option_one_votes: optOneVotes,
                option_two_votes: optTwoVotes
            },
        ]);

    return response.body;
}

export async function getPoll(){
    const response = await client
        .from('poll')
        .select();

    return response.data;
}

export async function signUp(email, password){
    const response = await client.auth.signUp({
        email: email,
        password: password,
    });
    return response.user; 

}

export async function signIn(email, password){
    const response = await client.auth.signIn({
        email: email,
        password: password,
    });
    return response.user; 
}

export async function getUser(){
    return client.auth.session();

}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}