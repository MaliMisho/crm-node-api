exports.createContact = (
  company_name,
  first_name,
  last_name,
  phone,
  email,
  address,
  city,
  state,
  zip,
  notes = "no notes yet"
) => {
  return `INSERT INTO contacts (
          	company, first_name, last_name, 
            phone, email, address,
            city, state, zip, notes
						)
          	VALUES 
            	(
              	'${company_name}', '${first_name}', '${last_name}', 
              	'${phone}', '${email}', '${address}',
              	'${city}', '${state}', '${zip}', '${notes}'
            	);`;
};

exports.findContact = (contact_id) => {
  return `SELECT
            *
          FROM
            contacts
					WHERE
						contact_id = ${contact_id};`;
};

exports.findAllContacts = (contact_id) => {
  return `SELECT
            *
          FROM
            contacts;`;
};

exports.updateContact = (
  company_name,
  first_name,
  last_name,
  phone,
  email,
  address,
  city,
  state,
  zip,
  contact_id
) => {
  return `UPDATE 
						contacts 
					SET
						company = '${company_name}', first_name = '${first_name}', last_name = '${last_name}', 
						phone = '${phone}', email = '${email}', address = '${address}',
						city = '${city}', state = '${state}', zip = '${zip}'
					WHERE
						contact_id = ${contact_id};`;
};

exports.updateNotes = (notes, contact_id) => {
  return `UPDATE 
						contacts 
					SET
						notes = '${notes}'
					WHERE
						contact_id = ${contact_id};`;
};

exports.updateDate = (initial_contact, contact_id) => {
  console.log(initial_contact);
  return `UPDATE 
						contacts 
					SET
            initial_contact = '${initial_contact}'
					WHERE
						contact_id = ${contact_id};`;
};

exports.deleteContact = (contact_id) => {
  return `DELETE FROM
						contacts
					WHERE
						contact_id = ${contact_id};`;
};
