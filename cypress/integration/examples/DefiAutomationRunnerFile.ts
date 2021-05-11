/// <reference types="Cypress" />

const masterObject = require("../../fixtures/MasterFile.json");

import { createCustomFields, editCustomFields } from '../../support/utilities/CreateEditCustomFields';
import { createFormulas, editFormulas } from '../../support/utilities/CreatePageFormulas';

describe('Defi Automation', () => {
  before(()=>{
    cy.visit(Cypress.env('url'))
  })
  let keys = Object.keys(masterObject);
  debugger;
  keys.forEach((value) => {
    let splitValue = masterObject[value].split("_");
    let jsonFileName = splitValue[0];
    let scenario = splitValue[1];
    let groupName = splitValue[2];
    let userName = splitValue[3];
    let jsonData = require(`../../fixtures/${jsonFileName}.json`);
    let obj = jsonData[scenario].find(x => x.Name == userName && x.Group == groupName) as any;

    it(`${scenario} ${jsonFileName} for ${userName} in Group - ${groupName}`, () => {
      if (jsonFileName.toLowerCase() == 'customfields' && scenario.toLowerCase() == "create") {
       createCustomFields(obj);
      } else if (scenario.toLowerCase() == "edit") {
        
        cy.wait(6000)
        
        editCustomFields(obj);

      }
      if (jsonFileName.toLowerCase() == 'formulas' && scenario.toLowerCase() == "create") {
        createFormulas(obj);
      } else if (scenario.toLowerCase() == "edit") {
        editFormulas(obj);
      }

    })
  })
});