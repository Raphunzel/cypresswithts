import addContext from 'mochawesome/addContext'
import './commands'
let base64Image = ''
afterEach(function () {
    // if test failed
    if (this.currentTest.state === 'failed') {
        //array containing the parent folder title and scenario name
        let titlePathArray = this.currentTest.titlePath();

        const screenshot = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/${titlePathArray[0]} ` +
            `-- ${titlePathArray[1]} \(failed\).png`;

        //read file and generate base64 string
        cy.readFile(screenshot, 'base64').then((file) => {
            base64Image = file;
        })
    }
})

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        addContext({ test }, "data:image/png;base64," + base64Image);
    }
});