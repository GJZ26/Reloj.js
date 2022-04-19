// Previene que la pantalla se bloquee
async function wake (){
    const lock = await navigator.wakeLock.request('screen');
    await lock.release();    
}

wake();