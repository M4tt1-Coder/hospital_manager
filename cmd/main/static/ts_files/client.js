"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTemplate = void 0;
//load (ul)-list of all patients
//-> https://youtu.be/X-mUYxLjqLY ... video create unordered list
//https://youtu.be/HNV28WcHLns
class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(patients) {
        for (let i = 0, len = patients.length; i < len; i++) {
            //create a unordered list of patients
            const li = document.createElement("li");
            //create paragraph element
            const pa = document.createElement("p");
            pa.innerText = patients[i].Name;
            li.append(pa);
            this.container.append(li);
        }
    }
}
exports.ListTemplate = ListTemplate;
function load_patient_list() {
    //load patients
    //const patients = Patient[];
    //get html element
    var div = document.getElementById("patientlist");
    var ul = document.createElement("ul");
    // for (let i = 0; i < load_patient_list.length; i++){
    //     const li = document.createElement("li");
    //     li.innerText = patients[i].Name;
    //     ul.append(li);
    // }   
    //testing _______
    var li = document.createElement("li");
    var text = document.createTextNode("Test");
    li.appendChild(text);
    ul.appendChild(li);
    //________
    div === null || div === void 0 ? void 0 : div.appendChild(ul);
}
