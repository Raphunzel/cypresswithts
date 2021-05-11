import FormulasPage from "../pageObjects/FormulasPage"
const formulasPage = new FormulasPage();

export function createFormulas(obj : any) {
    formulasPage.getName().type(obj.Name);
    formulasPage.getActive().type(obj.Active)
    formulasPage.getGroup().type(obj.Group)

}

export function editFormulas(obj : any) {
    formulasPage.getName().clear();
    formulasPage.getPhone().type(obj.Name);
}




