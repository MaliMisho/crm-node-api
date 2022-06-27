const db = require("../database");
const sql = require("../sql/sqlCommands");

exports.createContact = (req, res) => {
  db.execute(
    sql.createContact(
      req.headers.company_name,
      req.headers.first_name,
      req.headers.last_name,
      req.headers.phone,
      req.headers.email,
      req.headers.address,
      req.headers.city,
      req.headers.state,
      req.headers.zip,
      req.headers.notes
    )
  )
    .then(() => {
      res.send(true);
    })
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
};

exports.findContact = (req, res) => {
  db.execute(sql.findContact(req.query.contact_id))
    .then((result) => {
      res.json(result[0]);
    })
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
};

exports.findAllContacts = (req, res) => {
  db.execute(sql.findAllContacts())
    .then((result) => {
      res.json(result[0]);
    })
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
};

exports.updateContact = (req, res) => {
  db.execute(
    sql.updateContact(
      req.headers.company_name,
      req.headers.first_name,
      req.headers.last_name,
      req.headers.phone,
      req.headers.email,
      req.headers.address,
      req.headers.city,
      req.headers.state,
      req.headers.zip,
      req.headers.contact_id
    )
  )
    .then(() => {
      res.send(true);
    })
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
};

exports.updateNotes = (req, res) => {
  db.execute(sql.updateNotes(req.headers.notes, req.headers.contact_id))
    .then(() => {
      res.send(true);
    })
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
};

exports.updateDate = (req, res) => {
  db.execute(
    sql.updateDate(req.headers.initial_contact, req.headers.contact_id)
  )
    .then(() => {
      res.send(true);
    })
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
};

exports.deleteContact = (req, res) => {
  db.execute(sql.deleteContact(req.headers.contact_id))
    .then(() => {
      res.send(true);
    })
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
};
