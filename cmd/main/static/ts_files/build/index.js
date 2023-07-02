"use strict";
//use sveltekit (framework) when this way dont work properly
//try out axios
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function load_patient_list() {
    return __awaiter(this, void 0, void 0, function* () {
        var patients = yield getPatients();
        if (typeof patients === "string") {
            console.log(patients);
        }
        else {
            var div = document.getElementById("list");
            var ul = document.createElement("ul");
            for (var i = 0; i < patients.data.length; i++) {
                var li = document.createElement('li');
                li.innerText = patients.data[i].name;
                ul.append(li);
            }
            //do the code in the then function
            // var li = document.createElement('li');
            // li.innerText = "lol";
            // ul.append(li);     
            div === null || div === void 0 ? void 0 : div.append(ul);
        }
    });
}
// getPatients().then((data) => {
//     var patients = data;
//     if (typeof patients === "string"){
//         console.log(patients);
//     }else{
//         var div = document.getElementById("list");
//         var ul = document.createElement("ul");
//         for (var i = 0; i < patients.data.length; i++){
//             var li = document.createElement('li');
//             li.innerText = patients.data[i].name;
//             ul.append(li);
//         }
//         //do the code in the then function
//         var li = document.createElement('li');
//         li.innerText = "lol";
//         ul.append(li);
//         div?.append(ul);
//     }
// });
//json : http functions
function getPatients() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('http://localhost:8080/patient/get_all/', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    ContentType: 'application/json;charset=utf-8'
                }
            });
            if (!response.ok) {
                throw new Error('Error! status: ${response.status}');
            }
            console.log(response.body);
            const result = yield response.json();
            console.log(result);
            return result;
        }
        catch (err) {
            if (err instanceof Error) {
                return err.message;
            }
            else {
                return 'An unknown error occurred';
            }
        }
    });
}
