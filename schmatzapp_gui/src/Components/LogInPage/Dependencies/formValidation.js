
export default function formValidation(forms) {
    let validationAnswer = true
    forms.forEach(form => {
        document.getElementById(form.formId).style.borderColor = "#485058"
        if (form.formValue === '') {
            validationAnswer = false
            document.getElementById(form.formId).style.borderColor = "red"
        }
    })
    return validationAnswer

}
