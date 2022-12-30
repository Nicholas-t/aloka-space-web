const fs = require('fs')
const { tools, usecase, pageSitemap } = require('./variables')
const templateExport = {}
const TEMPLATEDIR = __dirname + "/../public/frame/"
const allFile = fs.readdirSync(TEMPLATEDIR)

for (let i = 0; i < allFile.length; i++) {
    if (allFile[i].includes(".html")) {
        templateExport[allFile[i].split(".")[0]] = fs.readFileSync(TEMPLATEDIR + allFile[i]).toString()
    }
}


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


let parentListPagesHtml = ""
let childListPages = {}

let _sitemapXml = ""
const existingPages = [
    "/", "/contact"
]
for (let i = 0; i < pageSitemap.length; i++) {
    parentListPagesHtml += `<a href="/${pageSitemap[i].slug}" class="tag-cloud-link">${pageSitemap[i].main}</a>`
    childListPages[pageSitemap[i].slug] = ""
    _sitemapXml += `    
    <url>
        <loc>https://alokaspace.com/${pageSitemap[i].slug}</loc>
        <priority>0.9</priority>
    </url>`
    for (let j = 0; j < pageSitemap[i].childPage.length; j++) {
        childListPages[pageSitemap[i].slug] += `<a href="/${pageSitemap[i].slug}/${pageSitemap[i].childPage[j].slug}" class="tag-cloud-link">${pageSitemap[i].childPage[j].main}</a>`
        _sitemapXml += `    
        <url>
            <loc>https://alokaspace.com/${pageSitemap[i].slug}/${pageSitemap[i].childPage[j].slug}</loc>
            <priority>0.9</priority>
        </url>`
    }
}

let sitemap = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
<url>
    <loc>https://alokaspace.com/</loc>
    <priority>0.9</priority>
</url>
<url>
    <loc>https://alokaspace.com/contact</loc>
    <priority>0.9</priority>
</url>
${_sitemapXml}
</urlset>`

fs.writeFileSync(__dirname + "/../public/sitemap.xml", sitemap)


module.exports = { ...templateExport, toolHtml, usecaseHtml, parentListPagesHtml, childListPages }