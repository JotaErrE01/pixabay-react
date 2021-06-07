

const CalcularTotalPaginas = (response, imagenesPagina) => {

    const {totalHits} = response;

    const totalPaginas = Math.ceil(totalHits / imagenesPagina);

    return totalPaginas;
}
 
export default CalcularTotalPaginas;