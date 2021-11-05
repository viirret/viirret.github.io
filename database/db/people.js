const db = require('./dbconfig');

// show all people
const getAllPeople = (req, res) => {
   db.query('SELECT * FROM people', (err, result) => {
      if (err)
      	console.error(err);
      else
        res.json(result.rows)
   })
}
 
// show human based on id
const getHumanById = (req, res) => {
	const query = {
         text: 'SELECT * FROM people WHERE id = $1',
         values: [req.params.id],
    }
 
    db.query(query, (err, result) => {
    	if (err) {
       		return console.error('Error executing query', err.stack)
    	}
    	else {
      		if (result.rows.length > 0)
        			res.json(result.rows);
      		else
        		res.status(404).end();
    	}
	})
 
}

// adding new person
const addHuman = (req, res) => {
	// extract person from request body
	const newH = req.body;
	
	const query = {
		text: 'INSERT INTO people (firstname, lastname, email, phone, company, msg) VALUES ($1, $2, $3, $4, $5, $6)',
		values: [newH.firstname, newH.lastname, newH.email, newH.phone, newH.company, newH.msg],
	}

	db.query(query, (err, res) => {
		if(err)
			return console.error('Error executing query', err.stack);
	})

  res.send(`
  <h1>Thank you for registering to valtteriviirret.xyz!</h1>
  <p>Your data is now stored in my database.</p>
  <p>Maybe in the future I will program something for the user but for now this is pretty much it.</p>
  <p>If you want your data removed contact me <a href="mailto:viirretvaltteri@gmail.com">viirretvaltteri@gmail.com</a></p>
  <div class="centerme">
  <a href="https://valtteriviirret.xyz/">Back to website</a>
  </div>
  <style>
  h1 {text-align: center;}
  p {text-align: center;}
  .centerme {text-align: center;}
  
  </style>
  `) 
} 

// deleting person (not gonna be used a lot but whatever)
const deleteHuman = (req, res) => {
    const query = {
        text: 'DELETE FROM people WHERE id = $1',
        values: [req.params.id],
      }

    db.query(query, (err, res) => {
        if (err) {
          return console.error('Error executing query', err.stack)
        }
      })
    
      res.status(204).end();
}

// update information for a spesific person
const updateHuman = (req, res) => {
    // extract edited person from the request body
    const EH = req.body;

    const query = {
        text: 'UPDATE people SET firstname=$1, lastname=$2, email=$3, phone=$4, company=$5, msq=$6 WHERE id = $7',
        values: [EH.firstname, EH.lastname, EH.email, EH.phone, EH.company, EH.msg, req.params.id],
    }

    db.query(query, (err, res) => {
        if (err) {
          return console.error('Error executing query', err.stack)
        }
      })
    
    res.json(EH);
}



module.exports = {
	getAllPeople: getAllPeople,
	getHumanById: getHumanById,
	addHuman: addHuman,
	deleteHuman: deleteHuman,
	updateHuman: updateHuman
}
