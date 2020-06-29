const editedTalentCertification = (state = [], action) => {
    if (action.type === 'SET_INITIAL_CERTIFICATIONS') {
        return action.payload; 
    } else if (action.type === 'SET_EDITED_CERTIFICATION') {
        const index = state.findIndex(item => item.id == action.payload.id)
        if (index < 0) {
            let certificateToAdd = {
                id: '',
                certificate: '',
                issuingCompany: '',
                issueDate: '',
                expirationDate: ''
            } //end of certificate to add 
            certificateToAdd.id = action.payload.id;
            certificateToAdd.certificate = action.payload.certificate;
            certificateToAdd.issuingCompany = action.payload.issuingCompany;
            certificateToAdd.issueDate = action.payload.issueDate;
            certificateToAdd.expirationDate = action.payload.expirationDate;
            console.log('need to add')
            return [...state, certificateToAdd] 

        } else {

            let certificateToAdd = {
                id: '',
                certificate: '',
                issuingCompany: '',
                issueDate: '',
                expirationDate: ''
            } //end of certificate to add 
            certificateToAdd.id = action.payload.id;
            certificateToAdd.certificate = action.payload.certificate;
            certificateToAdd.issuingCompany = action.payload.issuingCompany;
            certificateToAdd.issueDate = action.payload.issueDate;
            certificateToAdd.expirationDate = action.payload.expirationDate;
            console.log('need to delete');
            let filteredCertificates = state.filter(certificate => {
                return certificate.id !== action.payload.id
            }) //end of filter
        
            filteredCertificates.push(certificateToAdd)
        return filteredCertificates; 
        } //end of else
     } else if (action.type === 'DELETE_EDITED_CERTIFICATE') {
            let filteredCertificates = state.filter(certificate => {
                return certificate.id !== action.payload.id
            }) //end of filter

        return filteredCertificates; 
     } else {
        return state; 
    }
}



export default editedTalentCertification;