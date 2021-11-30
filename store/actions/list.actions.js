export const SELECT_ODONT ='SELECT_ODONT';
export const UPDATE_ODONT ='UPDATE_ODONT';

export const selectedOdont = (id) => ({
    type: SELECT_ODONT,
    odontID: id,
})

export const UpdateOdont = (odont) => ({
    type: UPDATE_ODONT,
    list: odont,
})