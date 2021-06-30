(() => {

    const retirarDinero = (monto: number) => {
        
        let miDinero = 10000;
        return new Promise((res, rej) => {
            if (monto > miDinero) {
                rej("No hay fondos suficientes en tu cuenta");
            } else {
                miDinero -= monto;
                res(miDinero);
           } 
        });
    }

         
    retirarDinero(10990)
    .then(miDinero => console.log(`Te quedan ${miDinero}`))
    .catch(console.warn);

}
)();

