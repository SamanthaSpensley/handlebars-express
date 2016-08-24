const express = require('express')
let hbs = require('hbs')
let app = express();

//configuring express with handlebars
app.set('view engine', 'hbs');
hbs.localsAsTemplateData(app);

app.locals.cohortName = 'g31'
app.locals.title = 'My Handlebars Title'

//registering routes
app.get('/', (req, res) => {
  //render a template file and send back to client
  res.render('home', {
    cohortName: 'g31',
    foods: [
      'chalupa',
      'ceviche',
      'sprinkles'
    ]
  })
})

app.get('/page2', (req, res) => {
  res.render('page2')
})

//listening
app.listen(3000, () => {
  console.log('Server runnin on port 3000');
})
