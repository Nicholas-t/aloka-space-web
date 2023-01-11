var express = require('express')
var bodyparser = require('body-parser');

const template = require('./packages/template');
const { pageSitemap } = require('./packages/variables');
const axios = require("axios");

var app = express()

const urlencodedParser = bodyparser.urlencoded({ extended: true })
app.use(urlencodedParser)
app.use(express.urlencoded({ extended: false }))
app.engine('html', require('ejs').renderFile);
app.use('/static', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
    if (req.query.campaign_rec_id) {
        axios.get(`https://n8n.nicholasbudiharsa.xyz/webhook/recently-funded-outreach-visited?record_id=${req.query.campaign_rec_id}`)
        res.redirect(req.path)
    } else {
        next()
    }
})

app.get('/', function (req, res) {
    res.render(__dirname + `/public/pages/index.html`, { ...template })
});

app.get('/contact', function (req, res) {
    let message = ""
    if (req.query.inquire) {
        message = `Hi ALOKA Space, I would like to inquire more about ${req.query.inquire}`
    }
    res.render(__dirname + `/public/pages/contact.html`, { ...template, message })
});

app.get('/logo', function (req, res) {
    res.sendFile(__dirname + `/public/assets/img/logo.png`)
});

app.get('/logo/campaign-:record_id', function (req, res) {
    axios.get(`https://n8n.nicholasbudiharsa.xyz/webhook/recently-funded-outreach-read?record_id=${req.params.record_id}`)
    res.sendFile(__dirname + `/public/assets/img/banner.jpg`)
});

app.get('/:parent', function (req, res, next) {
    let pageData = {}
    for (let i = 0; i < pageSitemap.length; i++) {
        if (pageSitemap[i].slug == req.params.parent) {
            pageData.path = `/${req.params.parent}`
            pageData.main = pageSitemap[i].main
            pageData.metaTitle = pageSitemap[i].metaTitle
            pageData.metaDescription = pageSitemap[i].metaDescription
            pageData.heroTitle = pageSitemap[i].heroTitle
            pageData.heroSubTitle = pageSitemap[i].heroSubTitle
        }
    }
    if (pageData.main) {
        const childListPagesHtml = template.childListPages[req.params.parent]
        const breadCrumb = `<a href="/">Home</a> > <a href="/${req.params.parent}">${pageData.main}</a>`
        res.render(__dirname + `/public/pages/usecase.html`, { ...template, ...pageData, childListPagesHtml, breadCrumb })
    } else {
        next()
    }
})


app.get('/:parent/:child', function (req, res, next) {
    let pageData = {}
    let parentMain = ""
    for (let i = 0; i < pageSitemap.length; i++) {
        if (pageSitemap[i].slug == req.params.parent) {
            parentMain = pageSitemap[i].main
            for (let j = 0; j < pageSitemap[i].childPage.length; j++) {
                if (req.params.child == pageSitemap[i].childPage[j].slug) {
                    pageData.path = `/${req.params.parent}/${req.params.child}`
                    pageData.main = pageSitemap[i].childPage[j].main
                    pageData.metaTitle = pageSitemap[i].childPage[j].metaTitle
                    pageData.metaDescription = pageSitemap[i].childPage[j].metaDescription
                    pageData.heroTitle = pageSitemap[i].childPage[j].heroTitle
                    pageData.heroSubTitle = pageSitemap[i].childPage[j].heroSubTitle
                }
            }
        }
    }
    if (pageData.main) {
        const childListPagesHtml = template.childListPages[req.params.parent]
        const breadCrumb = `<a href="/">Home</a> > <a href="/${req.params.parent}">${parentMain} > <a href="/${req.params.parent}/${req.params.child}">${pageData.main}</a>`
        res.render(__dirname + `/public/pages/usecase.html`, { ...template, ...pageData, childListPagesHtml, breadCrumb })
    } else {
        next()
    }
})

app.get('/error', function (req, res) {
    res.status(404)
    res.render(__dirname + `/public/pages/error.html`, { ...template })
});

app.get('/sitemap.xml', function (req, res) {
    res.sendFile(__dirname + '/public/sitemap.xml');
});

app.get('*', function (req, res) {
    res.redirect('/error')
});


const server = app.listen(5000, () => {
    console.log('Express listening at ', 5000);
})

