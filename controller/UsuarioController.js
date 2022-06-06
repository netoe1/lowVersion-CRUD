function abreAdd(req,res){
    router.get('/add', (req,res) =>{
        res.render('usuario/add.ejs')
    });
}
function addSalva(req,res){

}
function listarTudo(req,res){}
function listaComFiltro(req,res){}
function abreEdt(req,res){}
function salvaEdt(req,res){}
function deletaDado(req,res){}

module.exports = 
{
    abreAdd,
    addSalva,
    listarTudo,
    listaComFiltro,
    abreEdt,
    salvaEdt,
    deletaDado
};
