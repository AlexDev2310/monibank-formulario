export default function isLegalAge(field) {
    const birthDate = new Date(field.value);
    validateAge(birthDate);

    if (!validateAge(birthDate)) {
        field.setCustomValidity('The user is not of legal age');
    }
}

function validateAge(birthDate) {
    const currentDate = new Date();
    const dateMore18 = new Date(birthDate.getUTCFullYear() + 18, birthDate.getUTCMonth(), birthDate.getUTCDate());

    return currentDate >= dateMore18;
}