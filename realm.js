import Realm from 'realm';

class Contact extends Realm.Object{}

Contact.schema = {
    name: "Contact",
    properties: {
        recordID: 'int',
        givenName: 'string',
        familyName: 'string',
        phoneNumber: 'string'
    },
    primaryKey:"recordID",
};

let realm = new Realm ({schema:[Contact], schemaVersion: 4});

let getAllContacts = () => {
    return realm.objects("Contact");
}

let addContact = (_recordID, _givenName, _familyName, _phoneNumber) => {
    realm.write(() => {
   let contact = realm.create("Contact",{
    recordID:_recordID,
    givenName:_givenName,
    familyName:_familyName,
    phoneNumber:_phoneNumber,
   })
    })
}

let deleteAllContact = () => {
    realm.write(() => {
     
        realm.deleteAll()
    })
}    


export default realm;

export {
    getAllContacts, addContact, deleteAllContact
}