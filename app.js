var express = require('express')
var bodyparser = require('body-parser');

const template = require('./packages/template');
const { tools, usecase } = require('./packages/variables');

var app = express()

const urlencodedParser = bodyparser.urlencoded({ extended: true })
app.use(urlencodedParser)
app.use(express.urlencoded({ extended: false }))
app.engine('html', require('ejs').renderFile);
app.use('/static', express.static(__dirname + '/public'));


app.get('/', async function (req, res) {
    let toolHtml = "";
    for (let i = 0; i < Object.keys(tools).length; i++) {
        let toolType = Object.keys(tools)[i]
        toolHtml += `
        <div class="text-center wow fadeInUp">
            <small class="subhead">${toolType}</small>
        </div>`
        let thisToolHtml = ""
        for (let j = 0; j < tools[toolType].length; j++) {
            thisToolHtml += `
            <div class="col-lg-4 py-3 wow fadeInUp">
                <div class="display-3" style="height:90%;">
                    <div class="img-place text-center">
                        <img  style="width:50%;" src="${tools[toolType][j].image}" alt="">
                    </div>
                </div>
                <h5>${tools[toolType][j].label}</h5>
            </div>`
        }
        toolHtml += `
        <div class="row mt-5 text-center">
            ${thisToolHtml}
        </div>
        `
    }


    let usecaseHtml = `
        <div class="col-md-6 col-lg-3 py-3 wow fadeInUp">
            <div class="card-blog">
            <div class="header">
                <div class="entry-footer">
                <div class="post-author">Have a usecase in mind ?</div>
                </div>
            </div>
            <div class="body">
                <div class="post-title"><a>We would love to hear from you!</a></div>
            </div>
            <div class="footer">
                <a href="/contact">Contact Us <span class="mai-chevron-forward text-sm"></span></a>
            </div>
            </div>
        </div>`
    for (let i = 0; i < usecase.length; i++) {
        usecaseHtml += `
        <div class="col-md-6 col-lg-3 py-3 wow fadeInUp">
          <div class="card-blog">
            <div class="header">
              <div class="entry-footer">
                <div class="post-author">${usecase[i].name}</div>
                <i class="post-date">${usecase[i].tools}</i>
              </div>
            </div>
            <div class="body">
              <div class="post-title"><a>${usecase[i].description}</a></div>
            </div>
            <div class="footer">
              <a href="/contact?inquire=${encodeURIComponent(usecase[i].name)}">Inquire More <span class="mai-chevron-forward text-sm"></span></a>
            </div>
          </div>
        </div>`
    }
    res.render(__dirname + `/public/pages/index.html`, { ...template, toolHtml, usecaseHtml })
});

app.get('/about', async function (req, res) {
    res.render(__dirname + `/public/pages/about.html`, { ...template })
});

app.get('/contact', async function (req, res) {
    let message = ""
    if (req.query.inquire) {
        message = `Hi ALOKA Space, I would like to inquire more about ${req.query.inquire}`
    }
    res.render(__dirname + `/public/pages/contact.html`, { ...template, message })
});


app.get('*', function (req, res) {
    res.redirect('/error')
});


const server = app.listen(5000, () => {
    console.log('Express listening at ', 5000);
})

