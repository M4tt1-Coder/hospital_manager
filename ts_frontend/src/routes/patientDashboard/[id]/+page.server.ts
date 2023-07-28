import type iPatient from '$lib/models/iPatient.ts';

export function load({ params, fetch }) {
    let patient: iPatient = {
        id: "hello",
        name: "Matti"
    }
    let patientData = {
        patient: patient
    }

    return {
        patientData
    };
}