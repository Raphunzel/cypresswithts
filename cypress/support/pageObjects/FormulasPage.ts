class FormulasPage {

    getName(){
        return cy.get("#txtName")
    }

    getActive(){
        return cy.get("#txtAddress1")
    }

    getGroup(){
        return cy.get("#txtAddress2")
    }

    getPhone(){
        return cy.get("#txtMobile")
    }
}
export default FormulasPage;
