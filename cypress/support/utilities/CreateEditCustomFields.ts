import CustomFieldsPage from "../pageObjects/CustomFieldsPage"
const customFieldsPage = new CustomFieldsPage();

export function createCustomFields(obj: any) {
    customFieldsPage.getName().type(obj.Name);
    customFieldsPage.getActive().type(obj.Active)
    customFieldsPage.getGroup().type(obj.Group)
}

export function editCustomFields(obj: any) {
    customFieldsPage.getName().clear();
    customFieldsPage.getPhone().type(obj.Name);
}





